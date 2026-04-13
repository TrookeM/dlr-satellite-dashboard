import { useState } from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

function App() {

  const [satellites, setSatellites] = useState([
    {
      id: 1, name: 'Galileo-1', status: 'Online', battery: 85,
      telemetry: [{ time: '10:00', temp: 15 }, { time: '11:00', temp: 18 }, { time: '12:00', temp: 16 }]
    },
    {
      id: 2, name: 'Kepler-X', status: 'Maintenance', battery: 40,
      telemetry: [{ time: '10:00', temp: 22 }, { time: '11:00', temp: 28 }, { time: '12:00', temp: 35 }]
    },
    {
      id: 3, name: 'Voyager-1', status: 'Maintenance', battery: 16,
      telemetry: [{ time: '10:00', temp: -50 }, { time: '11:00', temp: -55 }, { time: '12:00', temp: -60 }]
    },
  ]);

  return (
    <>
      <div className="bg-blobs">
        <div className="bg-blob b1"></div>
        <div className="bg-blob b2"></div>
        <div className="bg-blob b3"></div>
      </div>

      <div className="dashboard-container">
        <header className="header glass-panel">
          <h1>🛰️ DLR Satellite Control</h1>
          <span className="badge">System Online</span>
        </header>

        <div className="grid-layout">
          {satellites.map((sat) => (
            <satellite-card
              key={sat.id}
              name={sat.name}
              status={sat.status}
              battery={sat.battery}
            >
              <div style={{ height: '110px', width: '100%', marginTop: '20px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={sat.telemetry} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id={`colorTemp-${sat.id}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={sat.status === 'Maintenance' ? '#fbbf24' : '#c084fc'} stopOpacity={0.5} />
                        <stop offset="95%" stopColor={sat.status === 'Maintenance' ? '#fbbf24' : '#c084fc'} stopOpacity={0} />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    <XAxis dataKey="time" hide />
                    <Tooltip
                      cursor={{ stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 1, strokeDasharray: '4 4' }}
                      contentStyle={{
                        backgroundColor: 'rgba(15, 10, 25, 0.85)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        color: '#f3f4f6',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)'
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="temp"
                      stroke={sat.status === 'Maintenance' ? '#f59e0b' : '#d8b4fe'}
                      strokeWidth={3}
                      fillOpacity={1}
                      fill={`url(#colorTemp-${sat.id})`}
                      style={{ filter: 'url(#glow)' }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </satellite-card>
          ))}
        </div>
      </div>
    </>
  )
}

export default App;