Template.registerHelper('formatToTime', function (dateTime) {
    var formattedTime = moment(dateTime).format('h:mma');
    if (formattedTime == 'Invalid date') return '';
    return formattedTime;
});

Template.registerHelper("arrayJoin", function (arr) {
    if (arr == null)
        return "No Group";
    else
        return arr.join(",");
});

Template.registerHelper("isAdmin", function (user) {
    var _user = user || Meteor.user();
    return _user.role == "admin";
});