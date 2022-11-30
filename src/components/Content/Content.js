import React from 'react'
import hero from "../../images/hero.png"
import leftArrow from "../../images/leftArrow.png"
import rightArrow from "../../images/rightArrow.png"
import bigElypse from "../../images/bigElypse.svg"
import littleElypse from "../../images/littleElypse.svg"
import ShowcaseElement from '../reusable/ShowcaseElement/ShowcaseElement'
import "./Content.css"

function Content() {

    const showcaseElements = [
        {
            title: "ICEWAYS",
            description: "City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.",
        },
        {
            title: "DRIVEWAYS SPORT",
            description: "Driveways is a ‘’Comfort tyre’’ developed for a considerably wide vehicle pool ranging from middle class sedans to upper class comfort automobiles.",
        },
        {
            title: "DRIVEWAYS COMPETUS H/P",
            description: "City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use."
        },]

    return (
        <div className='content-container'>
            <div className='content-image-container'>

                <img src={hero} className="content-image" alt="content" />


                <div className='content-image-elements'>
                    <div className='image-text'>Nothing can stop you</div>

                    <button className='find-out-more-button'>FIND OUT MORE</button>

                </div>

            </div>

            <div className='content-showcase-container'>

                <div className='content-showcase-text'>
                    Featured Products
                </div>


                <div className='content-showcase-elements-container'>

                    <button className='arrow-button' style={{ marginRight: "24px" }}>
                        <img src={leftArrow} alt='left-arrow' />
                    </button>

                    <>
                        {
                            showcaseElements.map((elem, index) => {
                                return <ShowcaseElement title={elem.title} description={elem.description} key={index} />
                            })
                        }

                    </>

                    <button className='arrow-button'>
                        <img src={rightArrow} alt='right-arrow' />
                    </button>

                </div>

                <div className='content-showcase-page-container'>
                    <img className='page-button' src={bigElypse} alt='big-elypse' />
                    <img className='page-button' src={littleElypse} alt='little-elypse' />
                    <img className='page-button' src={littleElypse} alt='little-elypse' />
                </div>
            </div>

        </div >
    )
}

export default Content