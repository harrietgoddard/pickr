import React, { Component } from 'react';
import FormField from './FormField';

class PlayerForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            playerName: ""
        };

        this.handleName = this.handleName.bind(this);
    };

    handleName = e => {
        this.setState({
            playerName: e.currentTarget.value
        });
    };

    render() {

        const { playerName } = this.state;

        return (
            <div>
                <FormField
                    name={ "player-name" }
                    label={ "Enter player names" }
                    type={ "text" }
                    value={ playerName }
                    handleChange={ this.handleName }
                />
            </div>
        );
    };
};

export default PlayerForm;