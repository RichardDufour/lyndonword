import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'

// BEM -> Block Element Modifier

const Menu = () => (
  <>
    <p><a href="#generation">Generation</a></p>
    <p><a href="#factorization">Factorization</a></p>
    <p><a href="#bruijnword">Bruijn Words</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return(<div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo"> 
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center"> 
            <div className="gpt3__navbar-menu_container-links"> <Menu /> </div>
          </div>
        )}
      </div>
    </div>
  )
};

export default Navbar;