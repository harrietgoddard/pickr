// let testArray = [1, 2, 3, 4, 5, 6, 7, 8];

let shuffle = arr => {

    //identify highest index
    let maxIndex = arr.length - 1;

    //loop through array from highest index to index 0
    for (let i = maxIndex; i > 0; i -= 1) {
    
        //generate random index (between 0 and current index)
        let randomIndex = Math.floor(Math.random() * i);
    
        //save value of current index
        let currentValue = arr[i];
    
        //swap the values of the current index and the random index:

        //set the value of the current index to the value of the random index
        arr[i] = arr[randomIndex];
    
        //set the value of the random index to the value of the current index
        arr[randomIndex] = currentValue;
    
    };

    return arr;

};

let isDivisible = (arr, n) => arr.length % n === 0;

//takes an array and divides it into n equal arrays (returns an array of arrays)
let divide = (arr, n) => {
    
    if (!isDivisible(arr, n)) {
        return "Can't generate equal teams";
    }
    
    let container = [];
    
    let interval = arr.length / n;
    
    for (let i = 0; i < arr.length; i += interval) {
        if (i % interval === 0) {
            container.push(arr.slice(i, i + interval));
        } 
    }

    return container;

};

export const generateTeams = (players, numberOfTeams) => {
    return divide(shuffle(players), numberOfTeams);
};
