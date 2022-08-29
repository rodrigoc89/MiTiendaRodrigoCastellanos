import React from 'react';
function NavBar() {
    return ( 
        <header>
        <div className="nav container">
          <i className="bx bx-menu burger-btn" id="burger-icon"></i>
          <h1><a href="#" className="logo ">Mi Tienda</a></h1>
          <div className="headerSections">
            <a href="#">Inicio</a>
            <a href="#">Contacto</a>
            <a> <i className="fa-solid fa-cart-shopping"> </i></a>
            <a> <i className="fa-solid fa-user"></i></a>
          </div>
        </div>
      </header>
      
    )
}

export default NavBar;