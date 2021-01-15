import React from 'react'
import "./LandingPage.css"
import { Button } from "antd"
import viacom from "../Img/viacom.png"
import pluralsight from "../Img/pluralsight.png"
import percolate from "../Img/percolate.png"
import invision from "../Img/invision.png"
import github from "../Img/github.png"
import cloudflare from "../Img/cloudflare (1).png"
import logo_coursera from "../Img/logo_coursera.png"
import logo_theLinuxFoundation from "../Img/logo_theLinuxFoundation.png"
import logo_foursquare from "../Img/logo_foursquare.png"


function LandingPage() {
  return (
    <div className="GeneralLandingPage">
      <div className="SubGeneralLandingPage">
        <div className="LandingPageWidth">
          <div className="content1">Andela builds remote engineering teams</div>
          <div className="content2"> {"<"} that work{">"} </div>
          <div className="content3">Doing remote well is hard. We’ve helped hundreds of companies<br />
build and manage high performing teams.</div>
          <Button style={{ height: "45px", width: "134px", backgroundColor: "#ffaf30", border: "none", marginBottom: "50px" }}>GET STARTRD</Button>
          <div className="content5">TRUSTED BY LEADING TECH COMPANIES</div>
          <div className="content6">
            <img src={viacom} alt="" style={{ width: "98px", color: "#c4caea" }} />
            <img src={pluralsight} alt="" style={{ width: "98px", color: "#c4caea" }} />
            <img src={percolate} alt="" style={{ width: "98px", color: "#c4caea" }} />
            <img src={invision} alt="" style={{ width: "98px", color: "#c4caea" }} />
            <img src={github} alt="" style={{ width: "98px", color: "#c4caea" }} />
            <img src={cloudflare} alt="" style={{ width: "98px", color: "#c4caea" }} />
            <img src={logo_coursera} alt="" style={{ width: "98px", color: "#c4caea" }} />
            <img src={logo_theLinuxFoundation} alt="" style={{ width: "98px", color: "#c4caea" }} />
            <img src={logo_foursquare} alt="" style={{ width: "98px", color: "#c4caea" }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
