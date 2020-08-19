import React from "react"

import { Link } from "react-router-dom"

import "./NoMatch.css"

const NoMatch = () => {
  return(
    <div className="nomatch__design">
      <h1>Uh ohhh !</h1>
      <div className="paragraph__design">
        <p>we can't find</p>
        <p>the page that you're</p>
        <p>looking for ;(</p>
      </div>
      <Link to="/"><button style={{ marginTop: "20px", backgroundColor: "#f16051", borderRadious: "5px"}}>GO BACK</button></Link>
    </div>
  )
}

export default NoMatch
