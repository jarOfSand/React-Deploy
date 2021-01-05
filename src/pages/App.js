import logo from 'images/logo.svg';
import 'styles/App.css';
import TritonPower from 'components/TritonPower.js';

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
      <TritonPower />
      <TritonPower />
    </div>
  );
}

export default App;
