import './App.css';
import MyButton from './components/myButton'
import Navbar from './components/Navbar'; //ini untuk memasukkan 
import Footer from './components/Footer';
import Cek from './components/Cek';
import Jsx from './components/Jsx';
import Props from './components/Props';
import State from './components/State';

const App=()=> {
  
  return (
    <div>
      <MyButton></MyButton>
      <Navbar></Navbar>
      <Cek></Cek>
    <div>
      <Footer></Footer>
    </div>
      <Jsx></Jsx>
      <Props></Props>
      <State></State>
    </div>
  );
}

export default App;