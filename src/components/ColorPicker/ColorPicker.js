import React, { Component } from 'react';
import { CirclePicker } from 'react-color';

class ColorPicker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            color: ""
        };

        this.handleChangeComplete = this.handleChangeComplete.bind(this);
    };

    //pass color value up to state onChangeComplete
    handleChangeComplete = color => {
        this.props.handleColor(color.hex);
    };

    render() {
        
        return (

            !this.props.teamsGenerated ? null :

            <div>

                <p className="text-small">Pick team colour</p>

                <CirclePicker
                colors={ ["#f44336", "#e91e63", "#9c27b0", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ff9800", "#ff5722", "#795548", "#607d8b"] }
                circleSize={ 23 }
                circleSpacing={ 10 }
                onChangeComplete={ this.handleChangeComplete }
                />
                
            </div>
        );
    };

};

export default ColorPicker;