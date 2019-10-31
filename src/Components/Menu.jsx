import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

export default function Menu() {

  return (
    <nav className="menu">
      <NavLink className="menu__item" activeClassName='menu__item-active' exact to="/">Главная</NavLink>
      <NavLink className="menu__item" activeClassName='menu__item-active' exact to="/drift">Дрифт-такси</NavLink>
      <NavLink className="menu__item" activeClassName='menu__item-active' exact to="/timeattack">Time Attack</NavLink>
      <NavLink className="menu__item" activeClassName='menu__item-active' exact to="/forza">Forza Karting</NavLink>
    </nav>
  )

}
