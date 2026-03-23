import { LitElement, html, css } from 'lit';

export class SatelliteCard extends LitElement {
  // 1. Aquí va el CSS encapsulado (Shadow DOM)
  static styles = css`
    .card {
      border: 2px solid #333;
      padding: 16px;
      margin: 10px;
      border-radius: 8px;
      width: 250px;
    }
    /* Te toca: Añadir una clase para cuando la batería sea baja (rojo) */
  `;

  // 2. Aquí declaras las propiedades que va a recibir de React
  static properties = {
    name: { type: String },
    status: { type: String },
    battery: { type: Number }
  };

  constructor() {
    super();
    // Valores por defecto por si React no le pasa nada
    this.name = 'Unknown';
    this.status = 'Offline';
    this.battery = 0;
  }

  // 3. El renderizado del HTML
  render() {
    return html`
      <div class="card">
        <h3>🚀 ${this.name}</h3>
        <p>Status: ${this.status}</p>
        <p>Battery: ${this.battery}%</p>
      </div>
    `;
  }
}

// Esto es vital: registra la etiqueta HTML personalizada
customElements.define('satellite-card', SatelliteCard);
