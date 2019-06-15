friends = require("../data/friends");

friendFinder = function(data) {
    let newFriend = {};
    let winningSum = 100;

    for(let i = 0; i < friends.length; i++) {
        let currentSum = 0;
        let currentFriend = friends[i];
        for(let j = 1; j < 11; j++) {
            currentSum += Math.abs(currentFriend["Q"+j] - data["Q"+j])
        }

        if(winningSum > currentSum) {
            winningSum = currentSum;
            newFriend = friends[i];
        }
    }

    return newFriend
}

module.exports = friendFinder;