import React from "react"

import "./Form.css"

class Form extends React.Component {
  render() {
    return(
      <form onSubmit={this.props.getPlayer} className="form__div">
        <input type="text" name="firstname" placeholder="Firstname..." />
        <input type="text" name="lastname" placeholder="Lastname..." />
        <button className="hvr-bounce-out">Get Player...</button>
      </form>
    )
  }
}

export default Form
