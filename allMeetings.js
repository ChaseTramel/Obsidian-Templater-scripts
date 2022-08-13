//moment.js is already loaded into Obsidian Templater, included here for debugging
//const moment = require('moment');

//set up function to calculate tomorrow and meeting dates
function allMeetings() {
    //set up standardized format
    var format = "dddd, MMMM Do YYYY";

    //tomorrow
    //calculate tomorrow
    var tomorrow = "Tomorrow is " + moment().add(1, 'd').format(format) + ".  ";

    //weekly meeting
    //calculate next monday
    var weeklyMeeting = "Our next weekly meeting is " + moment().endOf('week').day("1").format(format) + ".  ";

    //monthly meeting
    //calculate first wednesday of the month
    var monthlyMeeting = "Our next monthly meeting is " + moment().endOf('month').day(3).format(format) + ".  ";

    //quarterly meeting
    //calculate first saturday of next quarter
    var quarterlyMeeting = "Our next quarterly meeting is " + moment().endOf('quarter').day(6).format(format) + ".  ";

    //yearly meeting
    //calculate first sunday of next year
    var yearlyMeeting = "Our next yearly meeting is " + moment().endOf('year').day(7).format(format) + ".  ";

    //write output to console
    console.log(tomorrow + "\n" + weeklyMeeting + "\n" + monthlyMeeting + "\n" + quarterlyMeeting + "\n" + yearlyMeeting);

    //return output
    return tomorrow + "\n" + weeklyMeeting + "\n" + monthlyMeeting + "\n" + quarterlyMeeting + "\n" + yearlyMeeting;
}

//run allMeetings function for debugging purposes
allMeetings();

//export allMeetings for use in Obsidian
module.exports = allMeetings;
