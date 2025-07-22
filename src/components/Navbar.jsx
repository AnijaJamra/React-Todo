import React from 'react'
import ReactLogo from '../assets/react.svg'
const Navbar = ({ChangeTheme, theme}) => {

    
  return (
  <nav>
        <img src={ReactLogo}alt="" />
       <h1>TODO APP</h1>
      <button onClick={ChangeTheme} className="change-btn">{theme ? "Dark-Mode" : "Light-Mode"}</button>
    </nav>
  )
}

export default Navbar
