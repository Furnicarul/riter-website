import React from "react"
import { Link } from "react-router-dom"

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import "./Player.css"

// gender, lvl, exp, money, warns, bank, fraction, fraction level, sim, licenses, create-date

function refreshPage(){
    window.location.reload();
}

const Player = props => {
  return(
    <div className="player__div">
      {props.firstname && props.lastname &&
        <div className="card__div">
          <Card>
            <CardBody>
              <CardTitle><h2>{ props.firstname } { props.lastname }</h2></CardTitle>
              <CardText className="card__design">Gender: { props.gender }</CardText>
              <CardText className="card__design">Lvl: { props.lvl }</CardText>
              <CardText className="card__design">Money: { props.money }</CardText>
              <CardText className="card__design">Create date: { props.createdate }</CardText>
              <Link to="/panel" onClick={refreshPage}><Button className="hvr-bounce-out">Reload</Button></Link>
            </CardBody>
          </Card>
        </div>
      }
    </div>
  )
}

export default Player
