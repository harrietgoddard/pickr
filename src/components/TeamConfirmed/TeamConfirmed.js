import React from 'react';
import TeamList1 from '../TeamList/TeamList1';
import TeamList2 from '../TeamList/TeamList2';
import TeamKit from '../TeamKit';
import { teamName } from '../../data/settings';

const TeamConfirmed = ({ color1, color2, home }) => {

    return (
        <>
            <div className="team-list-1-final">
                <TeamList1 />
                <TeamKit
                name={ teamName(1) }
                color={ color1 }
                home={ home === 1 }
                />
            </div>
            <div className="team-list-2-final">
                <TeamList2 />
                <TeamKit
                name={ teamName(2) }
                color={ color2 }
                home={ home === 2 } 
                />
            </div>
        </>
    );

};

export default TeamConfirmed;