
// import './App.css';
import Navbar from './components/Navbar'
import Form from './components/Form';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter , Routes ,
  Route, Redirect,Link} from "react-router-dom";

function App() {
  return (
    <>
    {/* <Navbar title="Navbar title" />
    <Form heading="Enter text to convert"/>  */}
    {/* <About/> */}
    <BrowserRouter>
    <Routes>
      <Route path="/Register" element={<Register/>}></Route>
      <Route path="/" element={<Login/>}></Route>
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;

