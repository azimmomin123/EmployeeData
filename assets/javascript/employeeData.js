$(document).ready(function(){

// Initialize Firebase
	var config = {
		apiKey: "AIzaSyCjpprgdiv4hm0UwxcKIKZIqIL6KLBg3tQ",
		authDomain: "employee-database-f2b20.firebaseapp.com",
		databaseURL: "https://employee-database-f2b20.firebaseio.com",
		storageBucket: "employee-database-f2b20.appspot.com",
		messagingSenderId: "920597560980"
	};
	firebase.initializeApp(config);

	//Creating a variable to reference the data base
	var database = firebase.database();
  
  	//Creating Variables
	var employeeName = "";
	var role = "";
	var startDate = "";
	var monthsWorked = "";
	var monthlyRate = 0;
	var totalBilled = 0;

	$("#submitButton").on("click", function(){

		employeeName = $("#employeeName").val().trim();
		role = $("#role").val().trim();
		startDate = $("#startDate").val().trim();

		database.ref().push({
			name: employeeName,
			role: role,
			startDate: startDate,

		}); // ends pushing the data to the firebase
	}) // ends eventlistener for submit button
	

	// Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("value", function(snapshot) {

      // Log everything that's coming out of snapshot
      console.log(snapshot.val());
      console.log(snapshot.val().employeeName);
      console.log(snapshot.val().role);
      console.log(snapshot.val().startDate);
   

      // Change the HTML to reflect
      $("#employee-name").html(snapshot.val().employeeName);
      $("#r").html(snapshot.val().role);
      $("#start-date").html(snapshot.val().startDate);
   

    // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

});

