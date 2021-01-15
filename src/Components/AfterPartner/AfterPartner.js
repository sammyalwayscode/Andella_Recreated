import React from 'react'

function AfterPartner() {
  return (
    <div style={{
      height: "502px",
      width: "100vw",
      // backgroundColor: "#111c64",
      backgroundColor: "#111c64",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        width: "1116px",
        display: "flex",
        flexWrap: "wrap",
        // justifyContent: "center",
        // alignItems: "center"
        justifyContent: "space-between"

      }}>
        <div style={{
          width: "530px",
          fontSize: "90px",
          fontWeight: "bold",
          lineHeight: "1.1",
          color: "white"

        }}>YOUR TEAM,<strong style={{
          color: "#fcad31",

        }}>OUR TALENT</strong></div>
        <div style={{
          width: "473px",
        }}>
          <p style={{
            color: "#df1995",
            fontWeight: "bold",
            fontSize: "18px"
          }}>DEDICATED</p>
          <p style={{
            color: "white",
            fontSize: "28px",
            fontWeight: "bold",
            marginTop: "-9px"
          }}>Successful engineering teams require the right talent at the right time.</p>
          <p style={{
            color: "white",
            // fontSize: "15px",
            marginTop: "-8px"
          }}>We know that effective engineering teams require more than code junkies to be successful. Andela engineers are full-time technologists who engage proactively with your team, manage stakeholders effectively, and excel at communication. In addition, our reputation as a top employer on the African continent means our engineers stay for the long term.</p>
        </div>
      </div>
    </div>
  )
}

export default AfterPartner
