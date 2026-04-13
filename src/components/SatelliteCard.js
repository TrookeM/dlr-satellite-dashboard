import { LitElement, html, css } from 'lit';

export class SatelliteCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .card {
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 24px;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.04);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4);
      box-sizing: border-box;
      font-family: inherit;
      transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
      color: #f3f4f6;
    }

    .card:hover {
      transform: translateY(-6px);
      border-color: rgba(255, 255, 255, 0.15);
      background: rgba(255, 255, 255, 0.06);
      box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.5), 0 0 24px rgba(192, 132, 252, 0.15);
    }

    /* Animación de latido para emergencias */
    @keyframes pulse-red {
      0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4), inset 0 0 10px rgba(239, 68, 68, 0.2); border-color: rgba(239, 68, 68, 0.5); }
      50% { box-shadow: 0 0 0 15px rgba(239, 68, 68, 0), inset 0 0 25px rgba(239, 68, 68, 0.4); border-color: rgba(239, 68, 68, 0.8); }
      100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0), inset 0 0 10px rgba(239, 68, 68, 0.2); border-color: rgba(239, 68, 68, 0.5); }
    }

    /* Clase condicional para batería baja */
    .card.alert {
      border-color: rgba(239, 68, 68, 0.5); 
      background-color: rgba(239, 68, 68, 0.08); 
      animation: pulse-red 2.5s infinite ease-in-out; 
    }
  `;

  static properties = {
    name: { type: String },
    status: { type: String },
    battery: { type: Number }
  };

  constructor() {
    super();
    this.name = 'Unknown';
    this.status = 'Offline';
    this.battery = 0;
  }

  render() {
    const batteryLevel = Number(this.battery);
    const isLowBattery = batteryLevel < 20;
    const alertClass = isLowBattery ? 'alert' : '';
    const batteryColor = isLowBattery ? '#ef4444' : '#34d399';
    const statusBg = this.status === 'Maintenance' ? 'rgba(245, 158, 11, 0.2)' : (isLowBattery ? 'rgba(239,68,68,0.2)' : 'rgba(192,132,252,0.2)');
    const statusText = this.status === 'Maintenance' ? '#fcd34d' : (isLowBattery ? '#fca5a5' : '#e879f9');
    const statusBorder = this.status === 'Maintenance' ? 'rgba(245, 158, 11, 0.3)' : (isLowBattery ? 'rgba(239,68,68,0.3)' : 'rgba(192,132,252,0.3)');

    return html`
      <div class="card ${alertClass}">
        
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 16px; margin-bottom: 20px;">
          <h3 style="margin: 0; font-size: 1.3rem; font-weight: 500; letter-spacing: -0.5px; display: flex; align-items: center; gap: 8px;">
            <span style="filter: drop-shadow(0 0 8px rgba(255,255,255,0.4));">🚀</span> ${this.name}
          </h3>
          <span style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; background: ${statusBg}; color: ${statusText}; padding: 6px 12px; border-radius: 20px; border: 1px solid ${statusBorder}; backdrop-filter: blur(4px);">
            ${this.status}
          </span>
        </div>

        <p style="margin: 5px 0; color: #9ca3af; font-size: 0.95rem; font-weight: 300;">Battery Level 
          <span style="color: ${batteryColor}; font-weight: 600; margin-left: 8px; text-shadow: 0 0 10px ${batteryColor}40;">${this.battery}%</span>
        </p>

        <slot></slot>
      </div>
    `;
  }
}

customElements.define('satellite-card', SatelliteCard);