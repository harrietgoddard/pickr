import React from 'react';
import SelectNumber from '../SelectNumber/';
import PlayerForm from '../PlayerForm/';
import GenerateTeams from '../GenerateTeams/';
import Prompt from '../Prompt/';
import Reset from '../Reset/';
import Error from '../Error/';
import { maxNoOfPlayers } from '../../data/settings';

const ControlPanel = () => {

    return (
        <section className="control-panel">
            <SelectNumber max={ maxNoOfPlayers }/>
            <PlayerForm />
            <GenerateTeams />
            <Error />
            <Prompt />
            <Reset />
        </section>
    );

};

export default ControlPanel;