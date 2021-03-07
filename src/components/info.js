import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Info = () => {
  return (
    <div className="secion" id="info">
      <div className="container">
        <div className="info-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>Info</h1>
            </Fade>
            <p>
              {data.infoParaOne}
              <br></br>
              <iframe src="https://docs.google.com/document/d/e/2PACX-1vQKSmil119hnuWNiQ1-Q-8OTqDkCCl3buJQLpOL3oSGtVvxa2iF_UYcg0DK9f1wBA/pub?embedded=true"></iframe>
              <br></br>
              {data.infoParaTwo}
              <br></br>
              <br></br>
              {data.infoParaThree}
            </p>
          </div>
          <div className="image-wrapper">
            <img src={data.infoImage} alt="info"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
