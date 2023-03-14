import React from 'react'
import './RightSidebar.css'


const WidgetTags = () =>{
const tags=['Fertilizer', 'weather','Yield tips ','Crop suggestion']
return (
    <div className='widget-tags'>
        <h3>Watched Tags</h3>
        <div className='widget-tags-div'>
            {
                // eslint-disable-next-line array-callback-return
                tags.map((tag) => (
                    <p key={tag}>{tag}</p>
                ))
            }
        </div>

    </div>
)

}
export default WidgetTags