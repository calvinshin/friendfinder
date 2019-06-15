// Require the friends javascript file for things
var friends = require("../data/friends");
var frindFinder = require("../functions/friendFinder")

apiCall = function(req, res) {
    return res.json(friends);
}

apiPost = function(req, res) {
    newFriend = req.body;

    // Find the closest friend
    foundFriend = friendFinder(newFriend);

    // Push the new data in
    friends.push(newFriend);

    // Return the user's 
    res.json(foundFriend);
}



module.exports = {apiCall : apiCall, apiPost : apiPost}