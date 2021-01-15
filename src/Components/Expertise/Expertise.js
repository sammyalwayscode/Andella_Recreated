import React from 'react'
import android from "../Img/android.png"
import angularjs from "../Img/angularjs.png"
import ios from "../Img/ios.png"
import java from "../Img/java.png"
import javascript from "../Img/javascript.png"
import nodejs from "../Img/nodejs.png"
import php from "../Img/php.png"
import react from "../Img/react.png"
import ruby from "../Img/ruby.png"
import python from "../Img/python.png"

function Expertise() {
  return (
    <div style={{
      height: "508px",
      width: "100vw",
      backgroundColor: "#111c64",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      // alignItems: "center"
    }}>
      <div style={{
        width: "1199px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        // alignItems: "center"

      }}>
        <div>
          <p style={{ fontSize: "20px", fontWeight: "bold", color: "#fcad31" }}>OUR EXPERTISE</p>
          <div style={{
            width: "460px",
            display: "flex",
            flexWrap: "wrap"
          }}>

            <div style={{ width: "80px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <img src={ios} alt="" style={{ width: "46px" }} />
              <p style={{ marginTop: "10px", fontWeight: "500", color: "#fcad31" }}>iOS</p>
            </div>

            <div style={{ width: "80px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <img src={android} alt="" style={{ width: "46px" }} />
              <p style={{ marginTop: "10px", fontWeight: "500", color: "#fcad31" }}>Andriod</p>
            </div>

            <div style={{ width: "80px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <img src={javascript} alt="" style={{ width: "46px" }} />
              <p style={{ marginTop: "10px", fontWeight: "500", color: "#fcad31" }}>Javascript</p>
            </div>

            <div style={{ width: "80px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <img src={react} alt="" style={{ width: "46px" }} />
              <p style={{ marginTop: "10px", fontWeight: "500", color: "#fcad31" }}>React</p>
            </div>

            <div style={{ width: "80px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <img src={angularjs} alt="" style={{ width: "46px" }} />
              <p style={{ marginTop: "10px", fontWeight: "500", color: "#fcad31" }}>Angular</p>
            </div>

            <div style={{ width: "80px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <img src={nodejs} alt="" style={{ width: "46px" }} />
              <p style={{ marginTop: "10px", fontWeight: "500", color: "#fcad31" }}>Node</p>
            </div>

            <div style={{ width: "80px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <img src={php} alt="" style={{ width: "46px" }} />
              <p style={{ marginTop: "10px", fontWeight: "500", color: "#fcad31" }}>PHP</p>
            </div>

            <div style={{ width: "80px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <img src={python} alt="" style={{ width: "46px" }} />
              <p style={{ marginTop: "10px", fontWeight: "500", color: "#fcad31" }}>Python</p>
            </div>

            <div style={{ width: "80px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <img src={ruby} alt="" style={{ width: "46px" }} />
              <p style={{ marginTop: "10px", fontWeight: "500", color: "#fcad31" }}>Ruby</p>
            </div>

            <div style={{ width: "80px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <img src={java} alt="" style={{ width: "46px" }} />
              <p style={{ marginTop: "10px", fontWeight: "500", color: "#fcad31" }}>Java</p>
            </div>




          </div>
        </div>
        <i style={{
          width: "541px",
          fontSize: "27px",
          fontWeight: "bold",
          color: "#fcad31"
        }}>
          We were in the middle of the largest project we’ve undertaken as a business. There’s no way we would have been able to grow as aggressively or be as successful as we have been without our Andela team.
        </i>
      </div>
    </div>
  )
}

export default Expertise
