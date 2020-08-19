import React, { Component } from "react";
import bg from "../../image/dark.png"

import Navigation from "../Navigation"

import "./About.css"

export default class About extends Component {
  render() {
    return (
      <div className="idk" style={{ backgroundColor: "#1c1e2a", height: "100vh" }}>
      <Navigation />
        <div className='row'>
          <div className='col s12 m6' style={{ paddingTop: "70px", textAlign: "center", paddingLeft: "400px" }}>
            <h1 style={{ color: "#f16051" }}>
              RITER
            </h1>
            <p className='para' style={{ color: "white" }}>
            GTA V RP - un nou nivel de jocuri online.
              <br /> Simteți atmosfera minunatei lumi a jocurilor de rol cu ​​lumea realistă a GTA 5!
            </p>
            <h6 className='font' style={{ color: "white" }}>
              <a href="https://discord.gg/X9fjcrW" style={{ color: "white" }}><b>Join Us Today</b></a>
            </h6>
            <div className="img__design"></div>
          </div>
        </div>
      </div>
    );
  }
}
