import React from 'react';
import TeamList1 from '../TeamList/TeamList1';
import TeamList2 from '../TeamList/TeamList2';
import TeamKit from '../TeamKit/';

const TeamsFinal = ({ color1, color2 }) => {

    return (
        <>
            <div className="team-list-1-final">
                <TeamList1 />
                <TeamKit
                name={ "Team 1" }
                color={ color1 }
                />
            </div>
            <div className="team-list-2-final">
                <TeamList2 />
                <TeamKit
                name={ "Team 2" }
                color={ color2 } 
                />
            </div>
        </>
    );

};

export default TeamsFinal;