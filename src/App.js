import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import Person from './components/Person';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
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
      {/* <Head technology="react js"></Head>
      <Head></Head>
      <Person id="120" name="arshad" ></Person>
      <Greet></Greet> */}
      <Welcome first="arshad" last="alam"></Welcome>
      <Greet name="arshad" last="alam"><p>hiui</p></Greet>
      <Greet name="talat" last="mahmood"></Greet>
    </div>
  );
}

export default App;
