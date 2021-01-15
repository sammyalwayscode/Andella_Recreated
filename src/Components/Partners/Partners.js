import React from 'react'
import google from "../Img/google.png"
import logo_microsoft from "../Img/logo_microsoft.png"
import logo_udacity from "../Img/logo_udacity.png"
import logo_pluralsight from "../Img/logo_pluralsight.png"
import logo_facebook from "../Img/logo_facebook.png"

function Partners() {
  return (
    <div style={{
      height: "325px",
      width: "100vw",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "40px"
    }} >
      <div style={{
        width: "1132px",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "flex-end",
        // backgroundColor: "blueviolet"
        // alignItems: "center"
      }}>
        <div style={{
          fontSize: "23px",
          fontWeight: "bold",
          marginBottom: "40px"
        }}>Preferred training partner of</div>
        <div style={{
          display: "flex",
          justifyContent: "space-between"
        }}>
          <img src={google} alt="" />
          <img src={logo_microsoft} alt="" />
          <img src={logo_facebook} alt="" />
          <img src={logo_udacity} alt="" />
          <img src={logo_pluralsight} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Partners
