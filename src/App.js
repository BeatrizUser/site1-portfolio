import './App.css';
import Topo from './components/Topo';
import Corpo from './components/Corpo';
import Slider from './components/Slider';
import Rodape from './components/Rodape';



function App() {
  return (
    <div className="App">
      <Topo/>
      <Slider/>
      <Corpo/>
      <Rodape/>
    </div>
  );
}

export default App;
