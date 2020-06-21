import React from 'react';

const Predictions = ({ predictions, handleClick, homeAdvantage }) => {

    const { favourite, unfavourite, favouriteHome, favouriteSkills, unfavouriteSkills } = predictions;

    return (
        <div>
            <button onClick={ handleClick }>Get predictions</button>
            <p>
                { favouriteHome ? 
                    `Benefiting from a home advantage, ` :
                    `Despite team ${ unfavourite } having the home advantage, `
                }
                team { favourite } are tipped to win, with an adjusted skills rating* of { favouriteSkills } (team { unfavourite } : { unfavouriteSkills })
                *skills ratings assume a { homeAdvantage * 100 }% uplift for the home team
            </p>
        </div>
    );

};

export default Predictions;