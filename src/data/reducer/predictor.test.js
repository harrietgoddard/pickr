import {
    totalTeamSkills,
    addHomeAdvantage,
    calculateScores,
    calculateFavourite,
} from './predictor';
import { homeAdvantage } from '../settings';

it('totals team skills', () => {

    let players = [
        {
            name: "test1",
            skill: 2,
        },
        {
            name: "test2",
            skill: 3,
        },
        {
            name: "test3",
            skill: 1,
        },
    ]

    let result = totalTeamSkills(players);

    expect(result).toEqual(6);

});

it('adds home advantage', () => {

    let result = addHomeAdvantage(16);

    expect(result).toEqual(16 * (1 + homeAdvantage));

});

it('calculates total scores', () => {

    let team1 = [
        {
            name: "test1",
            skill: 1,
        },
        {
            name: "test2",
            skill: 2,
        },
        {
            name: "test3",
            skill: 1,
        },
    ];

    let team2 = [
        {
            name: "test1",
            skill: 3,
        },
        {
            name: "test2",
            skill: 3,
        },
        {
            name: "test3",
            skill: 3,
        },
    ];

    let result = calculateScores(team1, team2, 1);

    let expected = {
        team1Total: 4 * (1 + homeAdvantage),
        team2Total: 9,
    }

    expect(result).toEqual(expected);

});

it("calculates favourite team", () => {

    let scores1 = {
        team1Total: 8,
        team2Total: 6,
    };

    let scores2 = {
        team1Total: 6,
        team2Total: 10
    };

    let result1 = calculateFavourite(scores1);

    let result2 = calculateFavourite(scores2);

    expect(result1).toEqual(1);

    expect(result2).toEqual(2);

})
