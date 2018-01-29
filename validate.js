$(function(){
  //make a variable to keep track of data coming from firebase
  var data= [];
  
  //create new connection to firebase
	var ref= new Firebase('https://data-application1.firebaseio.com/activities');
  

  //listen to data updates from firebase
	ref.on("value", function (snapshot){
    console.log(snapshot.val());
   //when the data updates at firebase, put it in the data variable
    data= snapshot.val();
  })
//Entire Form (handler)
$('#contact').submit(function(event) {
  
  var $form = $(this);
  console.log("Submit to Firebase");
  
  //get values to send to Firebase
  var nameToSend = $('#name').val();
  console.log(nameToSend);
  
  var emailToSend = $('#email').val();
  console.log(emailToSend);
  
  var phoneToSend= $('#phno').val();
  console.log(phoneToSend);
    
  var regToSend= $('#regno').val();
  console.log(regToSend);
	
  var sizeToSend= $('#size').val();
  console.log(sizeToSend);
	
  var rateToSend= $('#rate').val();
  console.log(rateToSend);
	
  var txtToSend= $('#txt').val();
  console.log(txtToSend);
  
  //take the values from the form, and put them in an object
  var newActivity= {
    "name": nameToSend ,
    "email": emailToSend ,
    "phone": phoneToSend ,
    "register": regToSend ,
    "size": sizeToSend ,
    "rate": rateToSend ,
    "text": txtToSend
  }
  //put new object in data array
  data.push(newActivity);
  console.log(data);
  
    //send the new data to Firebase
		ref.set(data, function(err){
      if(err){
        alert("Data not sent!");
      }
	else{
	alert("Thanks, "+ nameToSend);
      }
    });

    return false;
  })

  
})
