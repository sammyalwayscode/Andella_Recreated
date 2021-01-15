import React from 'react'
import img3 from "../Img/img3.png"

function Embedded() {
  return (
    <div style={{
      height: "606px",
      width: "100vw",
      backgroundColor: "#111c64",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-end",
      // alignItems: "center"
    }}>
      <div style={{
        width: "1260px",
        // backgroundColor: "red",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between"
      }}>
        <div style={{
          width: "490px",
        }}>
          <p style={{
            color: "#49aaaf",
            fontWeight: "bold",
            fontSize: "18px"
          }}>EMBEDDED</p>
          <p style={{
            color: "white",
            fontSize: "28px",
            fontWeight: "bold",
            marginTop: "-9px"
          }}>Andela engineers use your company systems to support a fully embedded workflow.</p>
          <p style={{
            color: "white",
            // fontSize: "15px",
            marginTop: "-8px",
            width: "460px"
          }}>Our engineers adopt your workflows and preferred communication platforms like Slack, Microsoft teams, and more. All engineers are native English speakers and overlap with your teams for at least 5 working hours per day and dedicate the rest of their day to digging in and focusing on important tasks at hand. And, every engagement includes on-boarding to ensure your distributed team hits the ground running.</p>
        </div>
        <img src={img3} alt="" style={{
          height: "487px",
          width: "661px",
        }} />
      </div>
    </div>
  )
}

export default Embedded
