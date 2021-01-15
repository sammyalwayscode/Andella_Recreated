import React from 'react'
import { Button } from "antd"

function SecToLast() {
  return (
    <div style={{
      height: "427px",
      width: "100vw",
      backgroundColor: "#111c64",
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center"
    }} >
      <div style={{
        fontSize: "35px",
        fontWeight: "bold",
        color: "white",
        marginBottom: "20px",
      }}>Andela builds remote engineering teams</div>
      <div
        style={{
          fontSize: "35px",
          fontWeight: "bold",
          // color: "white",
          color: "#ffaf30",
          marginBottom: "28px",
        }}
      > {"<"} that work{">"} </div >
      <Button style={{ height: "45px", width: "134px", backgroundColor: "#ffaf30", border: "none", }}>GET STARTRD</Button>
    </div >
  )
}

export default SecToLast
