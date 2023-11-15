import React from 'react';
import logo from './logo.svg?url';
import './App.css';
import Clipboard from 'clipboard';
console.log(Clipboard);
debugger
const clipboard = new Clipboard('.copy-btn');
clipboard.on('success', (e) => {
  console.log('复制成功');
  e.clearSelection();
});

clipboard.on('error', () => console.error('复制失败'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
