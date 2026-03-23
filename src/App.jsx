function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>🛰️ DLR Satellite Control</h1>
      <hr />
      <satellite-card name="Galileo-1" status="Online" battery="85"></satellite-card>
    </div>
  )
}

export default App
