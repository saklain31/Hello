
  var config = {
    apiKey: "AIzaSyDRSMxZObtlFU7eDgkWmJkMJrK4RfOWZPg",
    authDomain: "test1-aa9c8.firebaseapp.com",
    databaseURL: "https://test1-aa9c8.firebaseio.com",
    projectId: "test1-aa9c8",
    storageBucket: "test1-aa9c8.appspot.com",
    messagingSenderId: "569411524002"
  };
  firebase.initializeApp(config);

window.onload = func();

function func()
{
     console.log("ekhane");
     /*var name = localStorage.getItem("username");
     alert("Welcome "+name);
     document.getElementById('pro').innerHTML= name;
     alert(document.getElementById('pro').innerHTML);*/


	


	firebase.auth().onAuthStateChanged(function(user) {
	  console.log("inside jjj");
	  if (user !== null) {
	  console.log("more inside jjj");

	  var userId = firebase.auth().currentUser.uid;	
	  console.log(userId);
	  firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  		userProperty=snapshot.val();
		console.log(userProperty.fullname);
		console.log(userProperty.userID);
		console.log(userProperty.username);
		console.log(userProperty.email);

		var name = userProperty.username;
		alert("Welcome "+name);
		document.getElementById('pro').innerHTML= name;
	        alert(document.getElementById('pro').innerHTML);

		});
	}
	else
	{
		console.log("user null");
	}
  });		

}



