import React from 'react'
import './Header.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'

const Header = ({theme, setTheme}) => {
  const toggle_mode = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }
  const navLinks = [
    {name: "Home", href: "/"},
    {name: "Products", href: "/products"},
    {name: "Features", href: "/features"},
    {name: "About", href: "/about"},
  ];
  return (
    <div className='header'>
      <img src={theme == 'light' ? logo_light : logo_dark} alt="" className='logo' />

      <ul>
        {navLinks.map((link, index)=>(
          <li key={index}>
            <a href={link.href}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="search-box">
        <input type="text" placeholder='Search' />
        <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt="" />
      </div>
      <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? toggle_light : toggle_dark} alt="" className='toggle-icon' />
    </div>
  )
}

export default Header
