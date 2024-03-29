import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import LocalFloristSharpIcon from '@material-ui/icons/LocalFloristSharp';

const mapReduxStateToProps = reduxState => ({
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

    handlePlantClick(plant){
        this.props.dispatch({ type: "FIND_PLANT_ID", payload: plant.id });
        this.props.dispatch({ type: "FIND_PLANT", payload: plant});
        this.props.history.push(`/plant/${plant.id}`)
    }

    render() {
        return (
            <div>
                <h2>Garden:</h2>
                
                    {this.props.reduxState.plantList.map((plant,i) => {
                        return (<li key={i}>{plant.name} 
                        <DeleteForeverIcon color='secondary' size='small' variant='outlined' 
                            onClick={()=>this.deletePlant(plant.id)}>DELETE
                        </DeleteForeverIcon>
                        <LocalFloristSharpIcon color="secondary" fontSize="small" onClick={()=>this.handlePlantClick(plant)}/></li>)
                    })}

            
                {/* <pre>{JSON.stringify(this.props.reduxState)}</pre> */}
            </div>
        );
    }
}


export default withRouter(connect(mapReduxStateToProps)(PlantList));
