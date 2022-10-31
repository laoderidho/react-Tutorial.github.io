import './App.css';
import MyButton from './components/myButton'
import Navbar from './components/Navbar'; //ini untuk memasukkan 
import Footer from './components/Footer';
import Cek from './components/Cek';
import Jsx from './components/Jsx';
import Props from './components/Props';
import State from './components/State';
import Events from './components/Events';
import ConditionalRendering from './components/ConditionalRendering';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const App=()=> {
  
  return (
    <div>
      <MyButton></MyButton>
      <Navbar></Navbar>
      <Cek></Cek>
      <Jsx></Jsx>
      <Props></Props>
      <State></State>
      <br></br>
      <Events></Events>
      <br></br>
      <ConditionalRendering></ConditionalRendering>
      <div>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;