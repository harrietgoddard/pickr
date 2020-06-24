import { 
    shuffle, 
    orderBySkill, 
    isDivisible,
    splitArrays, 
} from './teamPicker';

it('shuffles an arry', () => {

    let result = shuffle([1, 2, 3, 4, 5, 6]);

    expect(result).not.toEqual([1, 2, 3, 4, 5, 6]);
    expect(result).not.toEqual([6, 5, 4, 3, 2, 1]);

});

it('orders by skill level', () => {

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

    let result = orderBySkill(players);

    let expected = [
        {
            name: "test3",
            skill: 1,
        },
        {
            name: "test1",
            skill: 2,
        },
        {
            name: "test2",
            skill: 3,
        },
    ]

    expect(result).toEqual(expected);

});

it('checks an array can be divided into equal parts', () => {

    let resultPass = isDivisible([1, 2, 3, 4, 5, 6], 3);

    let resultFail = isDivisible([1, 2, 3, 4, 5, 6], 4);

    expect(resultPass).toEqual(true);

    expect(resultFail).toEqual(false);

});

it('split arrays according to index', () => {

    let result1 = splitArrays([1, 2, 3, 4, 5, 6], 3);

    let result2 = splitArrays([1, 2, 3, 4, 5, 6, 7, 8], 2);

    expect(result1).toEqual([[1, 4], [2, 5], [3, 6]]);

    expect(result2).toEqual([[1, 3, 5, 7], [2, 4, 6, 8]]);

});