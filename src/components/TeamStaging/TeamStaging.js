import React from 'react';
import TeamList1 from '../TeamList/TeamList1';
import TeamList2 from '../TeamList/TeamList2';
import HomeButton1 from '../HomeButton/HomeButton1';
import HomeButton2 from '../HomeButton/HomeButton2';
import ColorPicker1 from '../ColorPicker/ColorPicker1';
import ColorPicker2 from '../ColorPicker/ColorPicker2';

const TeamStaging = ({ teamsGenerated }) => {

    return (
        <section>

            <section>

                <header className="header-team-1">
                    {/* make this a variable: */}
                    <h2 className="title-sub">Team 1</h2>
                </header> 

                <div className="team-list-1">
                    { !teamsGenerated ? null :
                        <>
                            <TeamList1 />
                            <ColorPicker1 />
                        </>
                    }
                </div>

                <div className="home-btn-container-1">
                    <HomeButton1 />
                </div>

            </section>

            <section>

                <header className="header-team-2">
                    <h2 className="title-sub">Team 2</h2>
                </header>

                <div className="team-list-2">
                { !teamsGenerated ? null :
                        <>
                            <TeamList2 />
                            <ColorPicker2 />
                        </>
                    }
                </div>
                
                <div className="home-btn-container-2">
                    <HomeButton2 />
                </div>

            </section>

        </section>
    );

};

export default TeamStaging;