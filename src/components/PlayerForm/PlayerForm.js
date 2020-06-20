import React, { Component } from 'react';
import FormField from './FormField';

class PlayerForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            playerName: "",
            playerSkill: 2,
        };

        this.handleName = this.handleName.bind(this);
        this.handleSkill = this.handleSkill.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleName = e => {
        this.setState({
            playerName: e.currentTarget.value
        });
    };

    handleSkill = e => {
        this.setState({
            playerSkill: +e.currentTarget.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.handleSubmit({ ...this.state });

        this.setState({
            playerName: "",
            playerSkill: 2,
        })
    };

    render() {

        const { playerName, playerSkill } = this.state;

        const { playerInputComplete } = this.props;

        return (
            <form onSubmit={ this.handleSubmit }>
                <FormField
                    name={ "player-name" }
                    label={ "Enter player name" }
                    type={ "text" }
                    value={ playerName }
                    handleChange={ this.handleName }
                />
                <FormField
                    name={ "player-skill" }
                    label={ "Select skill level" }
                    type={ "range" }
                    min={ "1" }
                    max={ "3" }
                    step={ "1" }
                    value={ playerSkill }
                    handleChange={ this.handleSkill }
                />
                { playerInputComplete ? null :
                    <button>Add player</button>
                }
            </form>
        );
    };
};

export default PlayerForm;