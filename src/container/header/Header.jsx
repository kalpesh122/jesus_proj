import React from 'react'
import BgImg from "../../assets/Banner-20220412T084819Z-001/Banner/Banner landing page@3x.png"
import "./Header.css"
import Logo from "../../assets/Logo-20220412T084820Z-001/Logo/Asset 8@3x.png"
const Header = () => {
    return (
        <div>
            <div className="bgclass">
                <div className="logo_Img">
                    <img src={Logo} alt="" />
                    <div className="text">
                        <h1>RUNIE</h1>
                        <p>Move to earn, make your life better!</p>
                    </div>
                </div>
                {/* <img src={BgImg} alt="" /> */}
            </div>
        </div>
    )
}

export default Header