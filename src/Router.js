import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import App from "./App"
import About from "./Components/Navbar/About"
import Howto from "./Components/Navbar/Howto"
import Payment from "./Components/Navbar/Payment"
import NoMatch from "./Components/Navbar/NoMatch"

const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/home" component={About} />
        <Route path="/howto" component={Howto} />
        <Route path="/panel" component={App} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
