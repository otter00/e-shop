import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import './Header.scss'
import LOGO from '../../images/dollar-symbol.svg'

const Header = () => {
  return (
    <div className="header-container">
        <div className="header-title">
            <Link to={ROUTES.HOME}/>
            <span className='header-logo'>
                <img src={LOGO} alt="logo" />TUFF
            </span>
        </div>

        <div className="header-info">
            <div className="header-user">
                <div className="user-avatar">
                    <div className="user-name">Guest</div>
                </div>
            </div>

            <form action="" className='header-form'>
                <div className='header-form-icon'>
                    <svg className="icon">
                        <use xlinkHref=''></use>
                    </svg>
                </div>

                <div className="header-form-input">
                    <input type="search"
                    name='search'
                    placeholder='search for anything'
                    autoComplete='off' 
                    onChange={() => {}}
                    value=''
                    />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Header