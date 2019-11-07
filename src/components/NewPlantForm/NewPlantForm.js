import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                <form onSubmit={this.addNewPlant}>
                    <input placeholder='name' type='text' value={this.state.newPlant.name} onChange={ (event) => this.handleNameChange(event, 'name')} />
                    <input placeholder='kingdom'type='text' value={this.state.newPlant.kingdom} onChange={ (event) => this.handleNameChange(event, 'kingdom')} />
                    <input placeholder='clade'type='text' value={this.state.newPlant.clade} onChange={ (event) => this.handleNameChange(event, 'clade')} />
                    <input placeholder='order'type='text' value={this.state.newPlant.order} onChange={ (event) => this.handleNameChange(event, 'order')} />
                    <input placeholder='family'type='text' value={this.state.newPlant.family} onChange={ (event) => this.handleNameChange(event, 'family')} />
                    <input placeholder='subfamily'type='text' value={this.state.newPlant.subfamily} onChange={ (event) => this.handleNameChange(event, 'subfamily')} />
                    <input placeholder='genus'type='text' value={this.state.newPlant.genus} onChange={ (event) => this.handleNameChange(event, 'genus')} />
                    <input type='submit' value='Add New Plant' />
                </form>
            </div>
        );
    }
}


export default connect(mapStateToProps)(NewPlantForm);
