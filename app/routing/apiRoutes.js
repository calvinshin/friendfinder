// Require the friends javascript file for things
var friends = require("../data/friends");

apiCall = function(req, res) {
    return res.json(friends);
}

apiPost = function(req, res) {
    newFriend = req.body;

    friends.push(newFriend);
    res.json(newFriend);
}

module.exports = {apiCall : apiCall, apiPost : apiPost}