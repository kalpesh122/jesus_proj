import React from 'react'
import "./About.css"
import abtImg from "../../assets/Whitepaper-20220412T141453Z-001/Whitepaper/Image/Artboard 1 copy@3x.png"
const About = () => {
    return (
        <div className='about_bg'>
            <img src={abtImg} alt="" />
            {/* <div className="intro">
                <h1>What is RUNIE</h1>
                <p>RUNIE is a Web3 lifestyle
                    app built on Binance Smart Chain (BSC)
                    platform. Based on Move to  Earn concept
                    , RUNIE helps users to both impore
                    their health through walking, jogging
                    , climbing, etc... whileearning profits
                    . By owing RUNIE's NFT sneaker, users will able to
                    participate in this attractive earning mechanism.
                </p>
            </div>
            <div className="img_section">
                <img src="" alt="img" />
            </div> */}
        </div>
    )
}

export default About