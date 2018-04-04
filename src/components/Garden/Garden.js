import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
  reduxState,
});

const Garden = props => (
  <div>
    <h2>This is the garden</h2>
    <pre>{JSON.stringify(props.reduxState)}</pre>
    <button onClick={() => props.dispatch({ type: 'BUTTON_ONE' })}>button one</button>
  </div>
);

export default connect(mapStateToProps)(Garden);
