import React from 'react'
import sidePixOne from "../Img/longthreee.png"

function HomeCont2() {
  return (
    <div style={{
      height: "100%",
      width: "100%",
      // backgroundColor: "green",
      display: "flex",
      justifyContent: "flex-end"
    }}>
      <div style={{
        width: "1223px",
        // backgroundColor: "red",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div style={{
          width: "593px",
          display: "flex",
          flexWrap: "wrap",
          // backgroundColor: "pink",
          justifyContent: "space-between"
        }} >

          {/* No One */}
          <div style={{
            height: "319px",
            width: "281px",
            // backgroundColor: "brown"
          }}>
            <hr />
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Global talent<br /> Sourcing</p>
            <p style={{ fontSize: "50px", fontWeight: "bold", marginTop: "-13px", color: "#49aaaf" }}>200,000</p>
            {/* <div style={{ marginTop: "-20x", color: "blueviolet", fontSize: "19px", fontWeight: "bold" }}>applications</div> */}

            <p style={{ marginTop: "-50px", fontSize: "19px", fontWeight: "bold", color: "#49aaaf" }}>application</p>
            <p style={{ marginBottom: "80px", color: "gray" }}>Our expert talent team ensures we source the right talent at the right time.</p>
            <hr />
          </div>


          {/* Two */}




          <div style={{
            height: "319px",
            width: "281px",
            // backgroundColor: "brown"
          }}>
            <hr />
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Best in class<br /> assessments</p>
            <p style={{ fontSize: "50px", fontWeight: "bold", marginTop: "-13px", color: "#df1995" }}>2%</p>
            {/* <div style={{ marginTop: "-20x", color: "blueviolet", fontSize: "19px", fontWeight: "bold" }}>applications</div> */}

            <p style={{ marginTop: "-50px", fontSize: "19px", fontWeight: "bold", color: "#df1995" }}>get offers</p>
            <p style={{ marginBottom: "80px", color: "gray" }}>We assess engineering skills against a robust competency framework.</p>
            <hr />
          </div>


          {/* three */}


          <div style={{
            height: "319px",
            width: "281px",
            // backgroundColor: "brown"
          }}>
            <hr />
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Data-driven<br /> matching</p>
            <p style={{ fontSize: "50px", fontWeight: "bold", marginTop: "-13px", color: "#98be24" }}>96%</p>
            {/* <div style={{ marginTop: "-20x", color: "blueviolet", fontSize: "19px", fontWeight: "bold" }}>applications</div> */}

            <p style={{ marginTop: "-50px", fontSize: "19px", fontWeight: "bold", color: "#98be24" }}>successful match rate</p>
            <p style={{ marginBottom: "80px", color: "gray" }}>We evaluate your technical and cultural needs to match you with engineers who are passionate about your company.</p>
            {/* <hr /> */}
          </div>


          {/* four  */}



          <div style={{
            height: "319px",
            width: "281px",
            // backgroundColor: "brown"
          }}>
            <hr />
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Global<br />Infacture & HR </p>
            <p style={{ fontSize: "50px", fontWeight: "bold", marginTop: "-13px", color: "#fbae30" }}> 20+ month </p>
            {/* <div style={{ marginTop: "-20x", color: "blueviolet", fontSize: "19px", fontWeight: "bold" }}>applications</div> */}

            <p style={{ marginTop: "-50px", fontSize: "19px", fontWeight: "bold", color: "#fbae30" }}>long-term engagements</p>
            <p style={{ marginBottom: "80px", color: "gray" }}>We provide engineers with everything they need to develop software—remotely and securely.</p>
            {/* <hr /> */}
          </div>




        </div>
        <img src={sidePixOne} alt="" />
      </div>
    </div>
  )
}

export default HomeCont2
