import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa';

export default class Navbar extends Component {
  state = {
    isopen: false
  };
  toggleButton = () =>{
    this.setState({isopen: !this.state.isopen});
  }
  render() {
    return(
      <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            <Link to="/">
              <img src={logo}/>
            </Link>
            <button type='button' className='nav-btn' onClick={this.toggleButton}>
              <FaAlignRight className='nav-icon'/>
            </button>
          </div>
          <ul className={this.state.isopen ? 'nav-links show-nav': 'nav-links'}>
            <li>
            <Link to="/">
              Home
            </Link>
            </li>
            <li>
            <Link to="/room">
              Rooms
            </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
      
    
  }
}
