Aquí tienes tu **Manual de Operaciones Rápido**. Diseñado para que, si en tres meses se te olvida cómo hacer algo, puedas abrir este documento y recordar la sintaxis exacta de un solo vistazo.

---

## ⚛️ MANUAL RÁPIDO: REACT (El Cerebro)

React es el director de orquesta. Controla los datos y decide cuándo se redibuja la pantalla.

### 1. Variables Reactivas (`useState`)
Si quieres que la pantalla cambie automáticamente al modificar una variable, debes usar esto.
```jsx
import { useState } from 'react';

// Declaración: [variableLectura, funcionParaEscribir] = useState(valorInicial)
const [bateria, setBateria] = useState(100);

// Para leer:
<p>Batería al {bateria}%</p>

// Para cambiar el valor (NUNCA hagas bateria = 50):
<button onClick={() => setBateria(50)}>Bajar Batería</button>
```

### 2. Pintar Listas (`.map`)
React no usa `for`. Transforma arrays de datos en HTML usando `.map()`.
```jsx
const naves = [{ id: 1, nombre: 'Apollo' }, { id: 2, nombre: 'Gemini' }];

// Todo elemento generado en un map DEBE tener la propiedad 'key'
return (
  <div>
    {naves.map((nave) => (
      <h3 key={nave.id}>{nave.nombre}</h3>
    ))}
  </div>
);
```

### 3. Enviar datos a otros componentes (Props)
React pasa información de arriba hacia abajo inyectándola como atributos HTML.
```jsx
<satellite-card name="Galileo" battery={bateriaActual}></satellite-card>
```

---

## 🧱 MANUAL RÁPIDO: LIT (El Constructor de Piezas)

Lit crea tus propias etiquetas HTML. Todo lo que ocurre dentro de ellas está aislado del resto de la página.

### 1. Estructura Base de un Componente
El esqueleto mínimo para crear una etiqueta nueva.
```javascript
import { LitElement, html, css } from 'lit';

export class MiComponente extends LitElement {
  
  // 1. Recibir datos desde React
  static properties = {
    titulo: { type: String }
  };

  // 2. CSS Aislado (Shadow DOM)
  static styles = css`
    :host { display: block; } /* Hace que el componente sea una caja sólida */
    h1 { color: red; } /* Este rojo NO afectará a los h1 del resto de la web */
  `;

  // 3. Pintar el HTML
  render() {
    return html`
      <h1>${this.titulo}</h1>
      <slot></slot> `;
  }
}

// 4. Bautizar la etiqueta
customElements.define('mi-componente', MiComponente);
```

### 2. Clases CSS Dinámicas
Cómo cambiar el diseño basado en una variable (sin tocar el DOM).
```javascript
render() {
  const claseAlerta = this.bateria < 20 ? 'rojo-peligro' : 'verde-ok';
  
  return html`
    <div class="tarjeta ${claseAlerta}">...</div>
  `;
}
```

---

## 📐 MANUAL RÁPIDO: KOR UI (El Sistema de Diseño)

Herramientas prefabricadas para que la interfaz se vea profesional e industrial sin escribir CSS.

### 1. Inicialización
Para que la magia oscura corporativa funcione:
```javascript
// En tu main.jsx
import '@kor-ui/kor';
```
```html
<body theme="dark">
```

### 2. El Grid (La Cuadrícula de 12 Columnas)
El sistema para organizar elementos sin que se amontonen.
```html
<kor-grid spacing="l">
  <div grid-cols="4" grid-cols-s="12">Elemento 1</div>
  <div grid-cols="4" grid-cols-s="12">Elemento 2</div>
  <div grid-cols="4" grid-cols-s="12">Elemento 3</div>
</kor-grid>
```
* **`grid-cols`**: Tamaño en monitores (PC).
* **`grid-cols-m`**: Tamaño en Tablets.
* **`grid-cols-s`**: Tamaño en Móviles (`12` significa que ocupa toda la pantalla).

---

## ✨ BONUS: CSS "Glassmorphism" (Efecto Cristal)

La fórmula mágica para hacer que cualquier caja parezca un cristal translúcido flotante.
```css
.cristal {
  background: rgba(255, 255, 255, 0.05); /* Fondo casi transparente */
  backdrop-filter: blur(15px);           /* Difumina lo que hay detrás */
  border: 1px solid rgba(255, 255, 255, 0.1); /* Borde sutil brillante */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);  /* Sombra para que flote */
  border-radius: 16px;                   /* Bordes redondeados */
}
```