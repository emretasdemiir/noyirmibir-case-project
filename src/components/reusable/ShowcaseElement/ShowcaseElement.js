import React from 'react'
import "./ShowcaseElement.css"
function ShowcaseElement({
    title,
    description
}) {
    return (
        <div className='showcase-element-container'>
            <div className='texts-container'>
                <div className='title'>
                    {title}
                </div>
                <div className='description'>
                    {description}
                </div>
            </div>
            <div className='buttons-container'>
                <button className='learn-more-button'>LEARN MORE</button>
                <button className='find-a-dealer-button'>FIND A DEALER</button>
            </div>
        </div>
    )
}

export default ShowcaseElement