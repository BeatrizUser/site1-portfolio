import '../components/style/personagem.css';
import Topo from '../components/Topo';
import Corpo from '../components/Corpo';
import Slider from '../components/Slider';
import Rodape from '../components/Rodape';



function Home() {
  return (
    <div className="App">
      <Topo/>
      <Slider/>
      <Corpo/>
      <Rodape/>
    </div>
  );
}

export default Home;
