import './index.css';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header title="Galeria de Imágenes con React" />
      <div className='contenedorCartas'>
        <Cards title="Rick Hunter" src="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2019/09/robotech-rick-hunter-oaxaca-avion.jpg?fit=1080%2C608&quality=80&ssl=1" desc="Es un piloto de combate varitech comandando al escuadrón Bermellón, y posteriormente el Escuadrón Skull." />
      <Cards title="Roy Focker" src="https://static.wikia.nocookie.net/macross/images/b/be/Roy_focker_0001.jpg"desc="Talentoso y determinado piloto de combate, también conocido por su gusto por las mujeres y el alcohol."/>
        <Cards title="Lynn Minmay" src="https://static.wikia.nocookie.net/macross/images/b/b4/LynnMinmay_DYRL-Na.jpg" desc="Ciudadana Chino-Americana de la Isla Macross, sobrina de los dueños de un restaurante chino." />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
