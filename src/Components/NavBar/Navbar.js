import React from 'react';
import './Navbar.css';


function Navbar(){

    return(

      <div className="div">
          <nav className="nav">
              <ul>
                  <li><a href="#">Add Items</a></li>
                  <li><a href="#">Checkout</a></li>
                  <li><a href="#">Contact Us</a></li>
              </ul>
          </nav>
      </div>

    );
}

export default Navbar;