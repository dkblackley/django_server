import logo from './logo.svg';
import './App.css';
import { LoginForum } from './LoginForum'

function App() {
  return (
    <>
    <div className="App" className="App-background">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to scream.
        </p>
        </header>
        <body className="App-body">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <LoginForum />
      </body>
    </div>
    </>
  );
}

export default App;
