// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDcRACiXiWcOENQyID29GuDW2P6l6-YBwY",
    authDomain: "train-activity-9f70f.firebaseapp.com",
    databaseURL: "https://train-activity-9f70f.firebaseio.com",
    projectId: "train-activity-9f70f",
    storageBucket: "train-activity-9f70f.appspot.com",
    messagingSenderId: "1098310526369"
  };
  //firebase.initializeApp(config);


  //testing moment.js
  var timer = "2015-04-03";
  var format = "LLLL";
  var result = moment(timer).format(format);
  console.log(result);

