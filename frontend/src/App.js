import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const handleButtonClick = () => {
    axios("/api/testwithcurrentuser").then(response => {
      console.log('response', response)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Change from docker
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br/>
        <button onClick={handleButtonClick}>Make api request</button>
      </header>
    </div>
  );
}

export default App;
