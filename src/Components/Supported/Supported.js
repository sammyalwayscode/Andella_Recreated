import React from 'react'
import treetwo from "../Img/treetwo.png"

function Supported() {
  return (
    <div style={{
      height: "453px",
      width: "100vw",
      backgroundColor: "#111c64",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        width: "1200px",
        // backgroundColor: "red",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "-210px",
        marginRight: "50px"
      }}>
        <img src={treetwo} alt="" />

        <div style={{
          width: "456px",
          marginRight: "100px"
        }}>
          <p style={{
            color: "#98be24",
            fontWeight: "bold",
            fontSize: "18px"
          }}>SOPPORTED</p>
          <p style={{
            color: "white",
            fontSize: "28px",
            fontWeight: "bold",
            marginTop: "-9px"
          }}>Dedicated technical support and mentorship every step of the way</p>
          <p style={{
            color: "white",
            // fontSize: "15px",
            marginTop: "-8px",
            // width: "460px"
          }}>Our dedicated account and engineering managers work closely with your team to ensure the continued success of your distributed engineering team. From communicating project goals to maintaining the highest level of security, we’ve seen—and done—it all.</p>
        </div>
      </div>
    </div>
  )
}

export default Supported
