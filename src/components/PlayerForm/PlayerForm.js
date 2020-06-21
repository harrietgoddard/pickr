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

        const { playerInputComplete, tooManyPlayers, teamsComplete } = this.props;

        return (
            
            teamsComplete ? null :
            
                <form onSubmit={ this.handleSubmit }>
                    <FormField
                        name={ "player-name" }
                        label={ "Enter player name" }
                        type={ "text" }
                        value={ playerName }
                        disable={ playerInputComplete }
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
                        disable={ playerInputComplete }
                        handleChange={ this.handleSkill }
                    />
                    { playerInputComplete ? null :
                        <button 
                            type="submit"
                            disabled={ tooManyPlayers }
                        >Add player</button>
                    }
                    { !tooManyPlayers ? null :
                        <p>Too many players - please delete</p>
                    }
                </form>
        );
    };
};

export default PlayerForm;