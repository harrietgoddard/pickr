
/*
* takes an array and returns another array with the same values in a random * order
*/

let shuffle = arr => {

    //make a copy of the array
    let result = [...arr];
    
    //identify highest index
    let maxIndex = result.length - 1;

    //loop through array from highest index to index 0
    for (let i = maxIndex; i > 0; i -= 1) {
    
        //generate random index (between 0 and current index)
        let randomIndex = Math.floor(Math.random() * i);
    
        //save value of current index
        let currentValue = result[i];
    
        //swap the values of the current index and the random index:

        //set the value of the current index to the value of the random index
        result[i] = result[randomIndex];
    
        //set the value of the random index to the value of the current index
        result[randomIndex] = currentValue;
    
    };

    return result;

};


/*
* orders a players array by skill level
*/

let orderBySkill = arr => {
    return arr.sort((a, b) => a.skill - b.skill);
};


/*
* checks an array can be divided into n equal parts
*/

let isDivisible = (arr, n) => arr.length % n === 0;


/*
* takes an array and returns another array containing n arrays, whereby    * items are allocated based on their position in the original array 
*/

let splitArrays = (arr, n) => {
    
    if (!isDivisible(arr, n)) {
        return "Can't generate equal teams";
    };

    let container = [];

    for (let i = 0; i < n; i += 1) {
        container.push(arr.filter((item, index) => index % n === i));
    };

    return container;
};


/*
* generates teams randomly
*/

export const randomTeams = (players, numberOfTeams) => {
    return splitArrays(shuffle(players), numberOfTeams);
};


/*
* generates teams whereby skill level is balanced as far as possible
*/

export const balancedTeams = (players, numberOfTeams) => {
    return splitArrays(orderBySkill(players), numberOfTeams);
};



//takes an array and divides it into n equal arrays (returns an array of arrays)
// let divide = (arr, n) => {
    
//     if (!isDivisible(arr, n)) {
//         return "Can't generate equal teams";
//     }
    
//     let container = [];
    
//     let interval = arr.length / n;
    
//     for (let i = 0; i < arr.length; i += interval) {
//         if (i % interval === 0) {
//             container.push(arr.slice(i, i + interval));
//         } 
//     }

//     return container;

// };





