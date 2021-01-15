import React from 'react'
import press from "../Img/press.png"
import youtwo from "../Img/youtwo.png"
import youthree from "../Img/youthree.png"
// import { Button } from "antd"

function WhatsNew() {
  return (
    <div style={{
      height: "700px",
      width: "100vw",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center"
    }} >
      <div style={{
        width: "1204px",
        display: "flex",
        flexWrap: "wrap",
        // justifyContent: "center",
        // alignItems: "center"
      }}>
        <div style={{
          width: "579px",
          color: "#111c64",
          fontWeight: "bold",
          fontSize: "85px"
        }}>SEE <br /> <strong style={{ color: "#fcad31" }}>WHAT'S NEW</strong></div>

        <div style={{
          width: "1204px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <div style={{
            width: "382px",
          }}>
            <img src={press} alt="" style={{ height: "253px", width: "382px", objectFit: "cover" }} />
            <p style={{ color: "#ec0783", fontWeight: "bold", }}>IN THE NEWS</p>
            <p style={{
              fontWeight: "bold",
              fontSize: "20px"
            }}>Andela to Double Engineering Talent<br /> Pool With Pan-African Expansion</p>

          </div>
          <div style={{
            width: "382px"
          }}>
            <img src={youtwo} alt="" style={{ height: "253px", width: "382px", objectFit: "cover" }} />
            <p style={{ color: "#49aaaf", fontWeight: "bold", }}>RESOURCES</p>
            <p style={{
              fontWeight: "bold",
              fontSize: "20px"
            }}>
              On-Demand Webinar: Best Practices<br /> for Remote Engineering Teams</p>
          </div>
          <div style={{
            width: "382px"
          }}>

            <img src={youthree} alt="" style={{ height: "253px", width: "382px", objectFit: "cover" }} />
            <p style={{ color: "#fbad30", fontWeight: "bold", }}>EBOOK</p>
            <p style={{
              fontWeight: "bold",
              fontSize: "20px"
            }}>
              Making the shift: Experts share how<br /> to rapidly build and scale remote teams</p>
          </div>
          {/* <Button style={{ height: "45px", width: "134px", backgroundColor: "#ffaf30", border: "none", marginBottom: "50px" }}>GET STARTRD</Button> */}

        </div>

      </div>
    </div>
  )
}

export default WhatsNew
