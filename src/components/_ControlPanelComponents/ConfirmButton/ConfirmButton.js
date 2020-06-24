import React from 'react';

const ConfirmButton = ({ handleClick }) => {

    return (
        <div>
            <p className="text-main customise">
                <span className="arrow bounce-left">
                    &#8592;
                </span> 
                Customise teams
                <span className="arrow bounce-right">
                    &#8594;
                </span>
            </p>
            <button 
                onClick={ handleClick }
                className="btn-small btn-generate"
            >Confirm teams</button>
        </div>
    );

};

export default ConfirmButton;