import React from 'react';
import './Navbar.css';
import Shopping from '../../shopping-main.jpg';


function Navbar(){

    return(

      <div className="div">
          <nav className="nav">
              <ul>
                  <li><a href="#">Carterio</a></li>
                  <li><a href="#">Add Items</a></li>
                  <li><a href="#">Checkout</a></li>
                  <li><a href="#">Contact Us</a></li>
              </ul>
          </nav>
          
          <div className="container">
              <img className="container-image" src={Shopping} alt="shop-image" />
          </div>
      </div>

    );
}

export default Navbar;