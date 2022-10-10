import logo from './logo.svg';
import './App.css';
import MyButton from './components/myButton'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App=()=> {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello My Name Is Ridho
        </p>
        <MyButton></MyButton>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;