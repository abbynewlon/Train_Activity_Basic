$(document).ready(function () {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDcRACiXiWcOENQyID29GuDW2P6l6-YBwY",
    authDomain: "train-activity-9f70f.firebaseapp.com",
    databaseURL: "https://train-activity-9f70f.firebaseio.com",
    projectId: "train-activity-9f70f",
    storageBucket: "train-activity-9f70f.appspot.com",
    messagingSenderId: "1098310526369"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  //initailize varibles. should somehow be in an object or something
  var trainName;
  var destination;
  var frequency;
  var nextArrival;
  var minutesAway;


  //testing moment.js
  var timer = "2015-04-03";
  var format = "LLLL";
  var result = moment(timer).format(format);
  console.log(result);

  //getting user input from add train form

  $("#new-train-info").on("click", function(event) {
    event.preventDefault();
  
    var valueTrainName = $("#trainNameInput").val().trim();
    var valueDestinationName = $("#destinationNameInput").val().trim();
    //need to change whole moment thing here
    var valueFirstTrain = moment($("#firstTrainInput").val().trim(), "MM/DD/YYYY").format("X");
    var valueFrequency = $("#frequencyInput").val().trim();
    alert("into the click");
  });

  
});
