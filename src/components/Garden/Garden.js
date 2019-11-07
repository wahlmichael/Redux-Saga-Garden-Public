import React from 'react';
import NewPlantForm from '../NewPlantForm/NewPlantForm';
import PlantList from '../PlantList/PlantList';
import Plant from '../Plant/Plant.js'
import { HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';

const mapReduxStateToProps = reduxState => ({
  reduxState,
});

const Garden = props => (
  <Router >
    <div>
      <Route exact path='/' component={NewPlantForm}/>
      <Route exact path='/' component={PlantList}/>
      <Route exact path='/plant/:id' render = {() => <Plant myPlant={props.reduxState.myPlant}/>} />
      {/* <pre>{JSON.stringify(props.reduxState)}</pre> */}
    </div>
  </Router>
);




export default connect(mapReduxStateToProps)(Garden);
