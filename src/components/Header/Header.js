import React from 'react'
import logo from "../../images/logo.svg"
import "./Header.css"

function Header() {

    const navigationButtonNames = ["SHOW ALL TYRES", "FIND A DEALER", "GUIDES AND VIDEOS", "GO WITH", "SERVICE & HELP"]

    return (
        <div className='header-container'>
            <div className='header-company-logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='header-navigation'>
                <div className='header-navigation-button-container'>
                    {
                        navigationButtonNames.map((name, index) => {
                            return <button key={index} className='navigation-button'>{name}</button>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Header