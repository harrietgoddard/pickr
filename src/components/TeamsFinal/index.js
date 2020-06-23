import React from 'react';
import TeamList1 from '../TeamList/TeamList1';
import TeamList2 from '../TeamList/TeamList2';

const TeamsFinal = () => {

    return (
        <>
            <div className="team-list-1-final">
                <TeamList1 />
            </div>
            <div className="team-list-2-final">
                <TeamList2 />
            </div>
        </>
    );

};

export default TeamsFinal;