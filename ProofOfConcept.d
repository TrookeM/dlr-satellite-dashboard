# 🚀 Plan de Refactorización VVAFER: Lit + KorUI + ECharts

Este documento define la hoja de ruta para la migración de la interfaz frontend de VVAFER desde código React *legacy* hacia una librería de Web Components reutilizables y empaquetables, utilizando **Lit**, **KorUI** (para el sistema de diseño) y **Apache ECharts** (para visualización de datos).

---

## 🛑 Fase 0: Entorno de Pruebas "Vanilla" (Fase Pre-Node)
Mientras se gestionan los permisos de IT para la instalación de Node.js, utilizaremos esta Prueba de Concepto (PoC) basada en CDNs. Permite desarrollar y validar la interoperabilidad entre Lit, KorUI y ECharts directamente en el navegador sin dependencias locales.

**Instrucciones:** Guardar el siguiente código como `poc.html` y abrir en el navegador.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PoC VVAFER - Lit + ECharts + KorUI</title>
    
    <script type="module" src="[https://unpkg.com/@kor-ui/kor@1.3.1/kor.js](https://unpkg.com/@kor-ui/kor@1.3.1/kor.js)"></script>
    
    <script src="[https://cdn.jsdelivr.net/npm/echarts@5.5.0/dist/echarts.min.js](https://cdn.jsdelivr.net/npm/echarts@5.5.0/dist/echarts.min.js)"></script>
    
    <style>
        body { 
            font-family: sans-serif; 
            padding: 2rem; 
            background-color: #f4f5f7; 
        }
    </style>
</head>
<body>

    <kor-card label="VVAFER Refactoring PoC" icon="timeline">
        <vvafer-line-chart></vvafer-line-chart>
    </kor-card>

    <script type="module">
        import { LitElement, html, css } from '[https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js](https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js)';

        class VvaferLineChart extends LitElement {
            static styles = css`
                .chart-container {
                    width: 100%;
                    height: 350px; 
                    margin-top: 10px;
                }
            `;

            render() {
                return html`<div id="chart" class="chart-container"></div>`;
            }

            firstUpdated() {
                const chartContainer = this.shadowRoot.getElementById('chart');
                const myChart = echarts.init(chartContainer);

                const option = {
                    tooltip: { trigger: 'axis' },
                    xAxis: {
                        type: 'category',
                        data: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']
                    },
                    yAxis: { type: 'value' },
                    series: [{
                        data: [120, 200, 150, 80, 70],
                        type: 'line',
                        smooth: true,
                        itemStyle: { color: 'rgba(52, 120, 246, 1)' },
                        areaStyle: { color: 'rgba(52, 120, 246, 0.2)' }
                    }]
                };

                myChart.setOption(option);
                window.addEventListener('resize', () => myChart.resize());
            }
        }

        customElements.define('vvafer-line-chart', VvaferLineChart);
    </script>
</body>
</html>

📅 Hoja de Ruta del Proyecto (Plan Semanal)
Semanas 1-2: Setup del Entorno y Puente React-Lit
Gestión IT: Conseguir permisos e instalar Node.js, dependencias (npm install) y configurar el IDE.

Auditoría de Repositorio: Mapear el estado actual de los componentes en src/Components e identificar dependencias a eliminar.

Instalación del Stack: Integrar echarts, @kor-ui/kor y @lit/react en el package.json.

Configuración del Build: Adaptar vite.config.ts para compilar en modo librería (Library Mode).

Theming: Configurar variables CSS de KorUI en theme.ts para que coincidan con la identidad visual del proyecto.

Semanas 3-4: Refactorización de UI y Componentes Base
Migración Nivel 1 (UI Estática): Reemplazar HTML/CSS manual de las carpetas CardsComponents y ExpandedButtonComponents utilizando <kor-card>, <kor-button> y <kor-icon>.

Migración Nivel 2 (Modales y Formularios): Refactorizar FilterComponents usando <kor-modal> y gestionar la emisión de eventos (CustomEvent) desde el Shadow DOM hacia el exterior.

Migración Nivel 3 (Fechas): Adaptar ReferenceDatePickerComponents.

Semanas 5-6: Integración de Apache ECharts
Lógica Base: Crear la clase base en Lit para instanciar gráficos ECharts dentro del Shadow DOM asegurando el control del ciclo de vida (firstUpdated y disconnectedCallback para destruir el canvas).

LineChart: Migración completa de LineChartComponents y la lógica interna de src/shared/LineChart.

HeatMap: Migración de MapComponents. Consolidación de HeatMap.tsx, Legend.ts y polígonos utilizando las capacidades nativas de mapas y visual maps de ECharts.

Semana 7: Internacionalización (i18n) y Testing
i18n: Integración de @lit/localize o adaptación del sistema actual (locales/) para asegurar traducciones dinámicas en los Web Components (EN/DE).

Adaptación de Tests: Reescritura de los tests unitarios en la carpeta __test__ usando @open-wc/testing para validar el Shadow DOM, sustituyendo las pruebas antiguas de React Testing Library.

Semana 8: Empaquetado, Wrappers y Despliegue
React Wrappers: Implementar exportaciones compatibles con React utilizando createComponent de @lit/react para consumo interno en proyectos legacy.

Typings: Asegurar la correcta generación y exportación de las definiciones de TypeScript (.d.ts).

CI/CD & Artifactory: Configurar el pipeline de despliegue para publicar el artefacto de la librería en el Artifactory interno, dejándolo listo para ser importado por otros equipos (ej. ESID).
