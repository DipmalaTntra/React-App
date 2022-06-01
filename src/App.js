// import logo from './logo.svg';
import './App.css';
import Profile from './components/profile';


function App() {
  return (
    <div className="App">
      <Profile/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Dipmala
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <h1>React</h1> */}
    </div>
  );
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default App;
