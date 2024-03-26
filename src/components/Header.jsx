import React from 'react'
import s from '../styles/Header.module.css'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <>
        <header className={s.header}>
            <div className={s.header_container}>

                <div className={s.header_logo}>
                    <img className={s.logo} src="../public/logo-black 1.png" alt="" />   
                </div>
                <div className={s.header_nav}>
                    <Link to={'/'}>Персонажи</Link>
                    <Link to={'/episode'}>Эпизоды</Link>
                    <Link to={'/location'}>Локации</Link>
                </div>

            </div>
        </header>
    </>
  )
}

export default Header