import React from 'react';

const ConfirmButton = ({ handleClick }) => {

    return (
        <div>
            <p className="text-large customise">
                <span className="arrow bounce-left arrow-desktop">
                    &#8592;
                </span> 
                Customise teams
                <span className="arrow bounce-right arrow-desktop">
                    &#8594;
                </span>
            </p>
            <p className="arrow bounce-down arrow-mobile">&#8595;</p>
            <button 
                onClick={ handleClick }
                className="btn-medium btn-generate"
            >Confirm teams</button>
        </div>
    );

};

export default ConfirmButton;