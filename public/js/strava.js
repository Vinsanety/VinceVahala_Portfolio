$(document).ready(function(){
  var getActivities = {
    "async": true,
    "crossDomain": true,
    "url":"https://www.strava.com/api/v3/athlete/activities",
    "raw_url":"https://www.strava.com/api/v3/athlete/activities?per_page=30",
    "method":"get",
    "headers": {
      "accept":"application/json",
      "authorization":"Bearer 13a5b14bc224564ca6f3e3c1615da43e546db62c"
    },
    "queries": {
      "per_page":"30"
    }
  }
  $.ajax(getActivities).done(function (data) {
    console.log(data);
    var latestActivity = data[0].name;
    console.log(latestActivity);
    var latestDistanceMeters = data[0].distance;
    var latestDistanceMiles = Math.round(latestDistanceMeters * 0.00062137 * 100) / 100;
    // var latestDistanceMiles = (latestDistanceMeters * 0.00062137).toFixed(2);
    $('#latestActivity').html(latestActivity);
    $('#latestDistance').html(latestDistanceMiles);
  });
});
