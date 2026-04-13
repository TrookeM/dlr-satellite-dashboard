function App() {

  const [satellites, setSatellites] = useState([
    { id: 1, name: 'Galileo-1', status: 'Online', battery: 85 },
    { id: 2, name: 'Kepler-X', status: 'Maintenance', battery: 40 },
    { id: 3, name: 'Kepler-X', status: 'Maintenance', battery: 16 },
  ]);

  return (
    <kor-page>
      {/* slot="top" ancla la barra arriba. label le da el título. */}
      <kor-app-bar slot="top" label="🛰️ DLR Satellite Control"></kor-app-bar>

      {/* Todo lo que no tenga slot, va al centro de la página automáticamente */}
      <kor-grid>
        {satellites.map((sat) => (
          <satellite-card
            key={sat.id}
            name={sat.name}
            status={sat.status}
            battery={sat.battery}
          ></satellite-card>
        ))}
      </kor-grid>
    </kor-page>
  )
}

export default App