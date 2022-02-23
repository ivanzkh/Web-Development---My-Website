function validation(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var error_message = document.getElementById("error_message");



error_message.style.padding = "10px";

if(fname.length<5){
    text = "Please Enter Valid First Name";
    error_message.innerHTML = text;
    return false;
}
if(lname.length<5){
    text = "Please Enter Valid Last Name";
    error_message.innerHTML = text;
    return false;
}  

    
    
 if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
 }
 
if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
    
alert("Thank You! Our Agent Will Contact You Soon!");
  return true;
}
            




