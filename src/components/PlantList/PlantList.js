import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

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

    deletePlant(id){
        this.props.dispatch({type: 'DELETE_PLANT', payload: id});
    }

    render() {
        return (
            <div>
                <h3>
                    {this.props.reduxState.plantList.map((plant,i) => {
                        return (<li key={i}>{plant.name} <DeleteForeverIcon color='secondary' size='small' variant='outlined' onClick={()=>this.deletePlant(plant.id)}>DELETE</DeleteForeverIcon></li>)
                    })}

                </h3>
                <pre>{JSON.stringify(this.props.reduxState)}</pre>
            </div>
        );
    }
}

export default connect(mapStateToProps)(PlantList);
