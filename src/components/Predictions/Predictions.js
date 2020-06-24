import React from 'react';

const Predictions = ({ predictions, showPredictions, handleClick, homeAdvantage }) => {

    const { favourite, unfavourite, favouriteHome, favouriteSkills, unfavouriteSkills } = predictions;

    return (
        <section>
            <button 
                onClick={ handleClick }
                className="btn-small btn-predictions"
            >Get predictions</button>

            { !showPredictions ? null :
                <div className="predictions-text">
                    <p className="text-card-small">
                        { favouriteHome ? 
                            `Benefiting from a home advantage, ` :
                            `Despite team ${ unfavourite } having the home advantage, `
                        }
                        Team { favourite } are tipped to win, with an adjusted skills rating* of { favouriteSkills } (Team { unfavourite }: { unfavouriteSkills })
                    </p>
                    <p className="text-card-small">
                        *skills ratings assume a { homeAdvantage * 100 }% uplift for the home team
                    </p>
                </div>
            }
        </section>
    );

};

export default Predictions;