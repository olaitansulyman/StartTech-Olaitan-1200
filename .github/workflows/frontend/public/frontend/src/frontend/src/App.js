import React, { useState, useEffect } from 'react';

function App() {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    fetch('/api/status')
      .then(res => res.json())
      .then(data => setStatus(data.message))
      .catch(() => setStatus('Backend unavailable'));
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>StartTech Application</h1>
      <p>Status: {status}</p>
    </div>
  );
}

export default App;
