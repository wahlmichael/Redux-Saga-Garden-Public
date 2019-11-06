import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class PlantList extends Component {
    componentDidMount() {
        this.getPlant();
        // use component did mount to dispatch an action to request the plantList from the API
    }

    getPlant() {
        this.props.dispatch({ type: 'GET_PLANT' })
    }

    render() {
        return (
            <div>
                <h3>
                    {this.props.reduxState.plantList.map((plant,i) => {
                        return (<li key={i}>{plant.name}</li>)
                    })}

                </h3>
                <pre>{JSON.stringify(this.props.reduxState)}</pre>
            </div>
        );
    }
}

export default connect(mapStateToProps)(PlantList);
