import '../components/style/home.css';
import NavMenu from '../components/NavMenu';
import Corpo from '../components/Corpo';
import Slider from '../components/Slider';
import Rodape from '../components/Rodape';



function Home() {
  return (
    <div className="App">
      <NavMenu/>
      <Slider/>
      <Corpo/>
      <Rodape/>
    </div>
  );
}

export default Home;
