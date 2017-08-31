import React from 'react'
import {NavLink} from 'react-router-dom'
import {withRouter} from 'react-router'
import './Header.scss'
import searchIcon from '../Images/search.svg'

const Header = ({location}) => {

  return (
    <header>
      <div className="header-inner">
        <div className="logo">猿声</div>
        <div className="search">
          <input id="search" type="text" placeholder="Search"/>
          <img className="search-icon" src={searchIcon}></img>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink exact to='/'>动态</NavLink>
            </li>
            <li>
              <NavLink to='/technology'>技术</NavLink>
            </li>
            <li>
              <NavLink to='/project' onClick= {() => { console.log(location); }}>好玩</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default withRouter(Header);
