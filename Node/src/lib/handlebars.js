const timeago = require("timeago.js");
const { format } = require("../database");
const timeago = timeago();


const helpers = {};


helpers.timeago = ( timeago)  => {
    return format(timeago);
}

module.exports = helpers;


