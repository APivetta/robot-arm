import React, { Component } from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from 'mdbreact';
import Slider from './Slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base: 0,
      low: 0,
      mid: 0,
      up: 0,
      rotate: 0,
      claw: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8080/status',{
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      referrer: 'no-referrer'
    })
      .then(response => response.json())
      .then(servoStatus => {
        this.setState(servoStatus);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      fetch('http://localhost:8080/move', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        referrer: 'no-referrer',
        body: JSON.stringify(this.state)
      });
    }
  }

  handleChange(name, event) {
    const newState = {};
    newState[name] = parseInt(event.target.value, 10);
    this.setState(newState);
  }


  render() {
    return (
      <>
        <MDBNavbar color="green darken-4" dark expand="md">
          <MDBNavbarBrand>
              <strong className="white-text">Control Brazo Robotico</strong>
          </MDBNavbarBrand>
        </MDBNavbar>
        <MDBContainer>
          <Slider title="Rotar Base" name="base" value={this.state.base} onChange={this.handleChange}/>
          <Slider title="Articulación Inferior" name="low" value={this.state.low} onChange={this.handleChange}/>
          <Slider title="Articulación Media" name="mid" value={this.state.mid} onChange={this.handleChange}/>
          <Slider title="Articulación Superior" name="up" value={this.state.up} onChange={this.handleChange}/>
          <Slider title="Rotar Garra" name="rotate" value={this.state.rotate} onChange={this.handleChange}/>
          <Slider title="Apertura Garra" name="claw" value={this.state.claw} onChange={this.handleChange}/>
        </MDBContainer>
      </>
    );  
  }
}

export default App;
