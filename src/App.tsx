import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@rmwc/button';
import '@material/button/dist/mdc.button.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.<br />
          <Button raised icon="favorite" theme={['secondaryBg', 'onSecondary']}>Hello From RMWC.io!</Button>
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
