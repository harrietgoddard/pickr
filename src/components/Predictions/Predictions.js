import React from 'react';

const Predictions = ({ predictions, handleClick }) => {

    const { favourite, unfavourite, favouriteHome, favouriteSkills, unfavouriteSkills } = predictions;

    return (
        <div>
            <button onClick={ handleClick }>Get predictions</button>
            <p>
                { favouriteHome ? 
                    `Benefiting from a home advantage, ` :
                    `Despite team ${ unfavourite } having the home advantage, `
                }
                team { favourite } are tipped to win, with a adjusted skills rating* of { favouriteSkills } (team { unfavourite } : { unfavouriteSkills })
                *skills ratings assume a 15% uplift for the home team
            </p>
        </div>
    );

};

export default Predictions;