import React from 'react'
import './topheader.css'
import logo from '../images/logo2.png'

const TopHeader = () => {
    return (
        <div className="topheader">
            <div className="logo">
                <img src={logo} height='150px' width='150px'/>
            </div>
            <div className="about_me"><h4>Адвокат<br/> БУЦКО ОЛЬГА ВОЛОДИМИРІВНА</h4></div>
            <div className="email"><h4>lawyer22082019@ukr.net</h4></div>
            <div className="phone"><h4>063-523-83-60</h4></div>
        </div>
    )
}
export default TopHeader