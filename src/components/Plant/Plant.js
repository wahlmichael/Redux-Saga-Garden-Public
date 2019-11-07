import React from 'react';
import { connect } from 'react-redux';


const Plant = (props) => (
  <>
  <div className="indivPlant">
      <h1>{props.myPlant.name}</h1> 
  </div>
  
    <pre>{JSON.stringify(props.myPlant)}</pre>
  </>
);

export default connect()(Plant);
