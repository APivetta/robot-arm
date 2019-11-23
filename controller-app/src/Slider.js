import React from 'react';

import { MDBRow, MDBCol } from 'mdbreact';

const Slider = (props) =>
  <MDBRow>
    <MDBCol size="10">
      <label htmlFor="baseRange">{props.title}</label>
      <input type="range" value={props.value} onChange={(event) => props.onChange(props.name, event)} className="custom-range" id="baseRange" min="0" max="180" />
    </MDBCol>
    <MDBCol size="2">{props.value}</MDBCol>
  </MDBRow>

export default Slider;