import React, { Component } from 'react';
import FormField from './FormField';

class PlayerForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            playerName: "",
            playerSkill: 2,
        };

        this.nameInput = React.createRef();

        this.handleName = this.handleName.bind(this);
        this.handleSkill = this.handleSkill.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
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
        });
    };

    handleFocus() {
        this.nameInput.focus();
    };

    render() {

        const { playerName, playerSkill } = this.state;

        return (
            
            <form 
                onSubmit={ this.handleSubmit }
                className="form-container"
            >
                <div className="form-inputs">
                    <FormField
                        name={ "player-name" }
                        label={ "Enter player name" }
                        type={ "text" }
                        value={ playerName }
                        handleChange={ this.handleName }
                        inputClass={ "text-input"}
                        containerClass={ "form-field" }
                        nameRef={ ref => { this.nameInput = ref; } }
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
                        containerClass={ "form-field" }
                    />
                </div>
                <button 
                    type="submit"
                    className="btn-medium btn-add"
                    onClick={ this.handleFocus }
                >Add player</button>
            </form>
        );
    };
};

export default PlayerForm;