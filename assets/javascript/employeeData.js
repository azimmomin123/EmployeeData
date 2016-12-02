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

	console.log("Kashan")


	// Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("value", function(snapshot) {

      // Log everything that's coming out of snapshot
      console.log(snapshot.val());
      console.log(snapshot.val().employeeName);
      console.log(snapshot.val().role);
      console.log(snapshot.val().startDate);
   

      // Change the HTML to reflect
      $("#employeeName").html(snapshot.val().employeeName);
      $("#role").html(snapshot.val().role);
      $("#startDate").html(snapshot.val().startDate);
   

    // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });