import React from 'react'
import "./Roadmap.css"
import roadmap from "../../assets/Whitepaper-20220412T141453Z-001/Whitepaper/Image/Artboard 1 copy 10@3x.png"
const RoadMap = () => {
    return (
        <div className='roadmap_bg'>
            <img src={roadmap} alt="" />
        </div>
    )
}

export default RoadMap