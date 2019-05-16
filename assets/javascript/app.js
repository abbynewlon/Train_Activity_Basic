
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
  var trainName = "";
  var destination = "";
  var frequency = "";
  var nextArrival = "";
  var minutesAway = "";


  //testing moment.js
  var timer = "2015-04-03";
  var format = "LLLL";
  var result = moment(timer).format(format);
  console.log(result);

  //getting user input from add train form

  $("#new-train-info").on("click", function(event) {
    event.preventDefault();
    
    var trainName = $("#trainNameInput").val().trim();
    console.log(trainName);
    var destination = $("#destinationNameInput").val().trim();
    //need to change whole moment thing here
    var frequency = $("#frequencyInput").val().trim();
    //do math for these next 2
    var nextArrival = "";
    var minutesAway = "";
    
    var specificTrain = {
      tname: trainName,
      dest: destination,
      freq: frequency,
      arriv: nextArrival,
      away: minutesAway
    }
    //so that can send to method to print onto page
    addToHTML(specificTrain);
    //create object to store specific train info and store that object in firebase
 
    //not sure what below is doing. complete the firebase portion later
    //maybe have a counter for the different names 
    //database.ref().push(specificTrain);


    //clear the data from the fields
    $("#form")[0].reset();
  
});

  function addToHTML(valueOfNewTrainVar) {
    var newTrainData= $("<tr>").append(
      $("<td>").text(valueOfNewTrainVar.tname),
      $("<td>").text(valueOfNewTrainVar.dest),
      $("<td>").text(valueOfNewTrainVar.freq),
      $("<td>").text(valueOfNewTrainVar.arriv),
      $("<td>").text(valueOfNewTrainVar.away),
      
    );

    //append time-table
      $("table").append(newTrainData);
      console.log(valueOfNewTrainVar.destination);
  }
});
