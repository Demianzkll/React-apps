import logo from './logo.svg';
import './App.css';

import Countdown from './Countdown';
import Accesscontrol from './AccessControl';
import { AppContext } from './AppContext';
import { AppProvider } from './AppContext';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <AppProvider>
         <Accesscontrol />
         <Countdown />
    </AppProvider>
    </div>
  );
}

export default App;
