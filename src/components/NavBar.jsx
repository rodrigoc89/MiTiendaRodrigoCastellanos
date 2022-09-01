import React from 'react';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';
function NavBar() {
    return ( 
        <header>
        <div className="nav container">
          <i className="bx bx-menu burger-btn" id="burger-icon"></i>
          <h1><a href="#" className="logo ">Mi Tienda</a></h1>
          <div className="headerSections">
            <a href="#">Inicio</a>
            <a href="#">Contacto</a>
            <CartWidget/>
            <a> <i className="fa-solid fa-user"></i></a>

          </div>
        </div>
      </header>
      
    )
}

function ItemListContainer() {
    return (
        <ItemListContainer />
    )

}
export default NavBar;