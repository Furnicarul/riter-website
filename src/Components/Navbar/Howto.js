import React from "react"

import Cards from "./Cards"

import Navigation from "../Navigation"
import "./Howto.css"

import { Container, Row, Col } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import { IoIosArrowForward } from "react-icons/io"
import { IoIosArrowDroprightCircle } from "react-icons/io"

const Howto = () => {
  return(
    <>
      <Navigation />
      <Container  className="wrap side-margin">
        <Row xs="2" className="row__design pt-5">
          <h1 className="h1__design"><span style={{ color: "#f16051" }}>CUM</span>INCEPI SA JOCI ?</h1>
          <p style={{ paddingRight: "70px" }}><span style={{ fontSize: "25px" }}>GTA V RP</span>- un nou nivel de jocuri online. <span style={{ fontSize: "25px" }}>J</span>oacă ca un gangster sau polițist, biker sau medic, mafiot sau ofițer FBI. <span style={{ fontSize: "25px" }}>S</span>imteți atmosfera minunatei lumi a jocurilor de rol cu ​​lumea realistă a GTA 5!</p>
        </Row>
        <Row className="d-flex flex-row justify-content-center pt-5">
          <Col sm="3">
            <Card style={{ backgroundColor: "#1c1e2a" }}>
              <CardImg top width="100%" src="http://blyat.fun/screen/slide_Gta.jpg" alt="Card image cap" />
              <CardBody className="cardbody">
                <CardTitle style={{ color: "#f16051" }}>Instalati GTA 5</CardTitle>
                <CardText style={{ color: "white" }}>Orice versiune de GTA 5 ( Steam sau Social Club ) este potrivita pentru a juca pe server.</CardText>
                <CardSubtitle style={{ color: "grey" }}>De asemenea, orice cont interzis GTA 5 este potrivit pentru joc</CardSubtitle>
                <IoIosArrowForward style={{ color: "#f16051" }}/>
              </CardBody>
            </Card>
          </Col>
          <Col sm="3">
            <Card style={{ backgroundColor: "#1c1e2a" }}>
              <CardImg top width="100%" src="http://blyat.fun/screen/slide_Rage.png" alt="Card image cap" />
              <CardBody className="cardbody">
                <CardTitle style={{ color: "#f16051" }}>Instalati Rage Multiplayer</CardTitle>
                <CardText style={{ color: "white" }}>In continuare, va trebui sa descarcati si sa instalati RAGE:MP.</CardText>
                <IoIosArrowForward style={{ color: "#f16051" }}/>
              </CardBody>
            </Card>
          </Col>
          <Col sm="3">
            <Card style={{ backgroundColor: "#1c1e2a" }} >
              <CardImg top width="100%" src="http://blyat.fun/screen/slide_Riter.png" alt="Card image cap" />
              <CardBody className="cardbody">
                <CardTitle style={{ color: "#f16051" }}>Gasiti RITER</CardTitle>
                <CardText style={{ color: "white" }}>Pentru a gasit serverul nostru, trebuie sa deschideti multiplayer-ul si sa faceti click pe butonul "Servers" si sa gasiti numele "Riter".</CardText>
                <CardSubtitle style={{ color: "grey" }}>De asemenea, orice cont interzis GTA 5 este potrivit pentru joc</CardSubtitle>
                <IoIosArrowForward style={{ color: "#f16051" }}/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Howto
