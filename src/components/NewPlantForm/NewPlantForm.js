import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';


// import Button from '@material-ui/core/Button';

const mapStateToProps = reduxState => ({
    reduxState,
});

class NewPlantForm extends Component {
    state = {
        newPlant: {
            // id: 4,
            name: '',
            kingdom: '',
            clade: '',
            order: '',
            family: '',
            subfamily: '',
            genus: ''
        }
    }

    handleNameChange = (event, property) => {
        console.log('event happended')
        this.setState({
            newPlant: {
                ...this.state.newPlant,
                [property]: event.target.value,
            }
        });
    }

    addNewPlant = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'SET_PLANT', payload: this.state.newPlant })
        this.setState({
            newPlant: {
                // id: this.state.newPlant.id + 1,
                name: '',
                kingdom: '',
                clade: '',
                order: '',
                family: '',
                subfamily: '',
                genus: ''            }
        });
    }

    render() {
        return (
            <div>
                <h3>This is the form</h3>
                <pre>{JSON.stringify(this.state)}</pre>
                <div id="plantForm">
                    <TextField variant="outlined" className="plantInput" placeholder='name' type='text' value={this.state.newPlant.name} onChange={ (event) => this.handleNameChange(event, 'name')} />
                    <TextField variant="outlined" className="plantInput" placeholder='kingdom'type='text' value={this.state.newPlant.kingdom} onChange={ (event) => this.handleNameChange(event, 'kingdom')} />
                    <TextField variant="outlined" className="plantInput" placeholder='clade'type='text' value={this.state.newPlant.clade} onChange={ (event) => this.handleNameChange(event, 'clade')} />
                    <TextField variant="outlined" className="plantInput" placeholder='order'type='text' value={this.state.newPlant.order} onChange={ (event) => this.handleNameChange(event, 'order')} />
                    <TextField variant="outlined" className="plantInput" placeholder='family'type='text' value={this.state.newPlant.family} onChange={ (event) => this.handleNameChange(event, 'family')} />
                    <TextField variant="outlined" className="plantInput" placeholder='subfamily'type='text' value={this.state.newPlant.subfamily} onChange={ (event) => this.handleNameChange(event, 'subfamily')} />
                    <TextField variant="outlined" className="plantInput" placeholder='genus'type='text' value={this.state.newPlant.genus} onChange={ (event) => this.handleNameChange(event, 'genus')} />
                    {/* <input type='submit' value='Add New Plant' /> */}
                    <CheckCircleSharpIcon color="primary" fontSize="large" onClick={this.addNewPlant} />
                </div>
            </div>
        );
    }
}


export default connect(mapStateToProps)(NewPlantForm);
