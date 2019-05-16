
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
    var destination = $("#destinationNameInput").val().trim();
    var frequency = $("#frequencyInput").val().trim();
    var nextArrival = "";
    var minutesAway = "";

    //not printed on html just to do math.
    var firstOne = $("#firstTrainInput").val().trim();
    var t = moment(firstOne, "hh:mm");
    var currentTime = moment();
    var differenceBetween = t.diff(currentTime, "minutes");
    console.log(t.format("hh:mm"));
    console.log(firstOne);
    if(differenceBetween < 0){
      //nextArrival = currentTime.add(moment.duration(differenceBetween, 'minutes')).format("hh:mm");
      console.log("differenceBetween"+ differenceBetween);
      //nextArrival = currentTime.add(differenceBetween, "minutes").format("hh:mm");
      nextArrival = differenceBetween%frequency;
      console.log("nextArrival" + nextArrival);
      //nextArrival = currentTime + differenceBetween; Need to format correctly
    }else{
      nextArrival = firstOne;
    }
  
    
    //(currentTime - firstOne)%frequency
    //(firstOne)).toNow()
   
    
    var specificTrain = {
      tname: trainName,
      dest: destination,
      freq: frequency,
      arriv: nextArrival,
      away: minutesAway
    }
    //so that can send to method to print onto page
    //create object to store specific train info and store that object in firebase

    database.ref().push(specificTrain);

    //clear the data from the fields
    $("#form")[0].reset();
  
});

  
    
  

  database.ref().on("child_added", function(snapshotTrain) {
    var newTrainData= $("<tr>").append(
      $("<td>").text(snapshotTrain.val().tname),
      $("<td>").text(snapshotTrain.val().dest),
      $("<td>").text(snapshotTrain.val().freq),
      $("<td>").text(snapshotTrain.val().arriv),
      $("<td>").text(snapshotTrain.val().away),
      
    );
    //append time-table
      $("table").append(newTrainData);
    


  });
});
