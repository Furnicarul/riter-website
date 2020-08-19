import React from "react"
import { setState, useState } from "react"

import Navigation from "./Components/Navigation";
import Form from "./Components/Form";
import Player from "./Components/Player"

import Cards from "./Components/Navbar/Cards"

import "./index.css"

import { Container } from "reactstrap"

// import Title from "./Components/Title"
// In "Title" sa avem informatiile despre sever cum ar fi:
  // -> Bun venit, etc.

const API_KEY_USAGE = "http://api.riterrp.site/characters_api.php?type=specific&firstname=Reduxxx&lastname=Muieee"
const API_KEY_ALL = "http://api.riterrp.site/characters_api.php?type=all"
// gender, lvl, exp, money, warns, bank, fraction, fraction level, sim, licenses, create-date

class App extends React.Component {
  state = {
    firstname: undefined,
    lastname: undefined,
    gender: undefined,
    lvl: undefined,
    exp: undefined,
    money: undefined,
    warns: undefined,
    bank: undefined,
    sim: undefined,
    licenses: undefined,
    createdate: undefined,
    error: undefined
  }

  getPlayer = async (e) => {
    e.preventDefault()
    const firstname = e.target.elements.firstname.value
    const lastname = e.target.elements.lastname.value
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://api.riterrp.site/characters_api.php?type=specific&firstname=${firstname}&lastname=${lastname}`)
    const data = await api_call.json()
    if( firstname && lastname ) {
      this.setState({
        firstname: data.firstname,
        lastname: data.lastname,
        gender: data.gender,
        lvl: data.lvl,
        exp: data.exp,
        money: data.money,
        warns: data.warns,
        bank: data.bank,
        sim: data.sim,
        licenses: data.licenses,
        createdate: data.createdate,
        error: ""
      })
    } else {
      this.setState({
        firstname: undefined,
        lastname: undefined,
        gender: undefined,
        lvl: undefined,
        exp: undefined,
        money: undefined,
        warns: undefined,
        bank: undefined,
        sim: undefined,
        licenses: undefined,
        createdate: undefined,
        error: "Please enter the required values."
      })
    }
  }

  render() {
    return(
      <div className="wrapper">
        <div className="main">
          <Container>
            <div className="row">
                <Navigation />
                <div className="col-xs-7 form-container">
                  <Form getPlayer={this.getPlayer}/>
                  <div className="col-xs-4 form-container">
                    <Player
                      firstname={this.state.firstname}
                      lastname={this.state.lastname}
                      gender={this.state.gender}
                      lvl={this.state.lvl}
                      exp={this.state.exp}
                      money={this.state.money}
                      warns={this.state.warns}
                      bank={this.state.bank}
                      sim={this.state.sim}
                      licenses={this.state.licenses}
                      createdate={this.state.createdate}
                      error={this.state.error}
                    />
                    </div>
                </div>
            </div>
          </Container>
        </div>
      </div>
    )
  }
}

export default App
