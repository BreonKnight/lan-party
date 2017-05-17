import React, { Component } from 'react';
import { Button, Card, Row, Col, Icon, Navbar, NavItem } from 'react-materialize';
import logo from './logo.svg';
import './App.css';


class Header extends Component {
  render() {
    return (
      <Navbar brand='Lan Party'className="black" right>
        <NavItem href='get-started.html'>Getting started</NavItem>
        <NavItem href='components.html'>Components</NavItem>
      </Navbar>
    )
  }
}

class Search extends Component {
  render() {
    return (
      <Row>
        <p>search here</p>
      </Row>
    );
  }
}

class LanEvents extends Component {

}

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
      </div>
    );
  }
}

export default App;
