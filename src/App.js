import { useState } from 'react'; 
import logo from './images/logo.svg';
import iconMenuHamburguer from './images/icon-hamburger.svg';
import iconClose from './images/icon-close.svg';
import './App.css';
import Leader from './components/Leader';
import Creations from './components/Creations';
import Footer from './components/Footer';

function App() {
  const [ isChecked, setIsChecked ] = useState(false);

  return (
    <>
      <div className="main-image container">
        <header>
          <img src={ logo } alt="logo Loopstudios" />
          <span onClick={ () => setIsChecked(!isChecked) }>
            <img src={ 
              isChecked
                ? (iconClose)
                : (iconMenuHamburguer)
             } alt="icon-menu-hamburguer" />
          </span>
          { isChecked
            ? (<nav className="menu-header">
                <ul>
                  <li>About</li>
                  <li>Careers</li>
                  <li>Events</li>
                  <li>Products</li>
                  <li>Support</li>
                </ul>
              </nav>)
            : false }

              <nav className="menu-header-desktop">
                <ul>
                  <li>About <span></span></li>
                  <li>Careers <span></span></li>
                  <li>Events <span></span></li>
                  <li>Products <span></span></li>
                  <li>Support <span></span></li>
                </ul>
              </nav>
        </header>
        <div className="main-text">
          Immersive experiences that deliver
        </div>
      </div>
      <Leader />
      <Creations />
      <Footer /> 
    </>
  );
}

export default App;
