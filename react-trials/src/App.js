import logo from './logo.svg';
import './App.css';

function myfunc(){
 return "hi";
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Sheepie is confused.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      {myfunc()} 
      </header>
    </div>
  );
}

export default App;
