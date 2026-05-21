🗺️ Hoja de Ruta de Desarrollo (VVAFER Sandbox)

📍 Hito 1: El Escenario Base (Reconstrucción)
Volver a levantar el archivo index.html con los CDNs correctos de KorUI (v1.11.3) y ECharts, estructurando el proyecto en carpetas locales para poder trabajar de forma modular con el servidor de Python.

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VVAFER Sandbox - Reconstrucción Base</title>
    
    <link href="https://cdn.jsdelivr.net/npm/@kor-ui/kor@1.11.3/kor-styles.min.css" rel="stylesheet">
    
    <script src="https://cdn.jsdelivr.net/npm/echarts@5.5.0/dist/echarts.min.js"></script>
    
    <style>
        body { 
            font-family: sans-serif; 
            padding: 2rem; 
            background-color: #f4f5f7; 
            margin: 0;
        }
        .dashboard-layout {
            max-width: 1000px;
            margin: 0 auto;
        }
    </style>
</head>
<body>

    <div class="dashboard-layout">
        <kor-card label="VVAFER Framework - Hito 1" icon="developer_board">
            <div slot="header">
                </div>
            
            <p>El entorno base está listo. Próximo paso: Crear el componente de Lit.</p>
        </kor-card>
    </div>

    <script type="module">
        import "https://cdn.jsdelivr.net/npm/@kor-ui/kor@1.11.3/components/card/index.min.js";
        import "https://cdn.jsdelivr.net/npm/@kor-ui/kor@1.11.3/components/icon/index.min.js";
        import "https://cdn.jsdelivr.net/npm/@kor-ui/kor@1.11.3/components/button/index.min.js";
    </script>

    </body>
</html>


📍 Hito 2: El "Data Socket" (El Motor de Datos)
Crear el componente que actuará como el núcleo central de la arquitectura según el paper. No pinta nada en pantalla; su único trabajo es almacenar el estado de los datos, filtrar por filas/columnas y suministrar la información a las gráficas.

📍 Hito 3: El Componente Visual puro (ECharts + Shadow DOM)
Construir el componente Lit para la gráfica de líneas, aislando el canvas de ECharts dentro del Shadow DOM y preparándolo para escuchar los cambios que vengan del Data Socket.

📍 Hito 4: Componentes Interactivos (Filtros KorUI)
Añadir botones, selectores o barras de búsqueda de KorUI que simulen la interfaz de ESID, comunicando las interacciones del usuario hacia el Data Socket mediante eventos personalizados.

🤖 Prompts para ir avanzando (Copia uno cada vez)
Cuando estés listo para empezar, vete pasándome estos mensajes uno a uno:

📋 Para el Hito 1 (Mañana al llegar)
Prompt 1: "Ayúdame a reconstruir el escenario base de mi PoC sin Node.js. Dame la estructura exacta de carpetas de mi proyecto local y el código limpio del archivo index.html usando la estructura correcta del CDN de KorUI v1.11.3 (estilos separados e importaciones granulares de card e icon) junto con el CDN de Apache ECharts, listo para levantar con el servidor de Python."

📋 Para el Hito 2
Prompt 2: "Ya tengo la base funcionando. Ahora vamos a implementar el principio del paper de VVAFER: el Data Socket. Ayúdame a escribir un archivo JavaScript (DataSocket.js) que actúe como un componente global o servicio. Debe almacenar un array de objetos con datos simulados (por ejemplo, telemetría de satélites con campos de fecha, id_satélite y valor) y tener funciones para filtrar esos datos."

📋 Para el Hito 3
Prompt 3: "Con el Data Socket listo, necesito crear el componente de visualización en Lit: VvaferLineChart.js. Ayúdame a escribir el código para que inicialice Apache ECharts dentro del Shadow DOM y exponga una propiedad reactiva que reciba directamente los arrays procesados por el Data Socket, actualizando el gráfico automáticamente con el ciclo de vida updated."

📋 Para el Hito 4
Prompt 4: "Para terminar el flujo interactivo tipo ESID, quiero crear un panel de control usando KorUI (VvaferFilters.js). Necesito un componente Lit que pinte botones o selectores de KorUI para alternar entre diferentes conjuntos de datos. Al hacer clic, debe disparar un evento nativo o comunicarse con el Data Socket para actualizar la gráfica de ECharts sin que ambos componentes estén acoplados."

Descansa esta noche y no te preocupes por el código borrado. Mañana empezamos con el Prompt 1 y en una hora lo tendrás todo montado, limpio y mejor estructurado que antes. ¡A por ello!
