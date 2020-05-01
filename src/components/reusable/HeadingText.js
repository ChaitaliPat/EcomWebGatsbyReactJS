import React from 'react'

export default function HeadingText({headertext}) {
    return (
        <div className='container'>
            <div className="col text-center mb-4">
                <h1 className="display-5">{headertext}</h1> 
            </div>            
        </div>
    )
}
