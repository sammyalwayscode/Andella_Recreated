import React from 'react'
import "./Header.css"
import AndellaLogo from "../Img/AndelaLogo.png"
import { Button } from "antd"

function Header() {
  return (
    <div className="GeneralHeader">
      <div className="HeaderWidth">
        <img src={AndellaLogo} alt="" className="AndelaLogo" />
        <div className="HeaderNav">
          <p>Services</p>
          <p>Case Studies</p>
          <p>Resoures</p>
          <p>Blog</p>
          <p>About</p>
        </div>
        <div className="JoinGet">
          <p>Join Andella</p>
          <Button style={{ height: "45px", width: "134px", backgroundColor: "#ffaf30", border: "none" }}>GET STARTRD</Button>
        </div>
      </div>
    </div>
  )
}

export default Header
