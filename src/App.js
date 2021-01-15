import React from "react"
import AfterPartner from "./Components/AfterPartner/AfterPartner"
import Embedded from "./Components/Embedded/Embedded"
import Expertise from "./Components/Expertise/Expertise"
import Header from "./Components/Header/Header"
import HomeCont1 from "./Components/HomeCont1/HomeCont1"
import HomeCont2 from "./Components/HomeCont2/HomeCont2"
import LandingPage from "./Components/LandingPage/LandingPage"
import Partners from "./Components/Partners/Partners"
import SecToLast from "./Components/SecToLast/SecToLast"
import Supported from "./Components/Supported/Supported"
import WhatsNew from "./Components/WhatsNew/WhatsNew"

function App() {
  return (
    <div>
      <Header />
      <LandingPage />
      <HomeCont1 />
      <HomeCont2 />
      <Partners />
      <AfterPartner />
      <Embedded />
      <Supported />
      <Expertise />
      <WhatsNew />
      <SecToLast />
    </div>
  );
}

export default App;
