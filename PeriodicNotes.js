
//set up function to calculate today and meeting dates
function allMeetings() {
    //set up standardized format
    let format = "dddd, MMMM Do YYYY";

    //today
    //calculate today
    let today = "Today is " + moment().format(format) + ".  ";

    //weekly meeting
    //calculate next monday
    let weeklyMeeting = "Our next weekly meeting is " + moment().endOf('week').day("1").format(format) + ".  ";

    //monthly meeting
    //calculate first wednesday of the month
    let monthlyMeeting = "Our next monthly meeting is " + moment().endOf('month').day(3).format(format) + ".  ";

    //quarterly meeting
    //calculate first sunday of next quarter
    let quarterlyMeeting = "Our next quarterly meeting is " + moment().endOf('quarter').day(6).format(format) + ".  ";

    //yearly meeting
    //calculate first sunday of next year
    let yearlyMeeting = "Our next yearly meeting is " + moment().endOf('year').day(7).format(format) + ".  ";

    return today + "\n" + weeklyMeeting + "\n" + monthlyMeeting + "\n" + quarterlyMeeting + "\n" + yearlyMeeting;
}
//print function output to console
console.log(allMeetings());