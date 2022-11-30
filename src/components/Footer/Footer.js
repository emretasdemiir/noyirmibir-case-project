import React from 'react'
import video from "../../images/video.png"
import "./Footer.css"

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-elements'>
                <div className='footer-text'>Feel the excellent wet braking with Driveways!</div>

                <button className='watch-all-videos-button'>WATCH ALL VIDEOS</button>

            </div>

            <div className='footer-image-container'>

                <img src={video} className="footer-image" alt="footer" />

            </div>
        </div>
    )
}

export default Footer