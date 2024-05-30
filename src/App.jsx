import React, { useState } from 'react';
import WebApp from '@twa-dev/sdk';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is
          {' '}
          {count}
        </button>
      </div>
      <div>
        {WebApp.initData}
      </div>
      {/* Here we add our button with alert callback */}
      <div className="card">
        <button
          type="button"
          onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}
        >
          Show Alert
        </button>
      </div>
    </>
  );
}

export default App;
