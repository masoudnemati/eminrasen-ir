import React, { Component } from "react";
import Logo from "../images/dalitoporlogo.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return <img src={Logo} alt="Dalitopor" />;
  }
}
