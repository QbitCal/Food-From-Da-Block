import React from 'react'
import {
    Nav, 
    NavLink, 
    Bars, 
    NavMenu, 
    NavBtn, 
    NavBtnLink} 
    from './NavbarElements';


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          INSERT ICON
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/hungryhomies' activeStyle>
            Hungry Homies
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
        </NavMenu>

        {/* Will need to work on login and out later on... */}
        {/* <NavBtn>
          <NavBtnLink to='/logout'>Logout</NavBtnLink>
        </NavBtn> */}

      </Nav>
    </>
  );
};

export default Navbar