function validateForm() {
  let x = document.forms["myForm"]["email"].value;
  let y = document.forms["myForm"]["fname"].value;
  let z = document.forms["myForm"]["lname"].value;
  if (x !== ""&& y !== "" && z !== "") {
    document.getElementById("message").innerHTML="Thank you for your interest.  A member from KSOA will contact you shortly."
    document.getElementById("message").style.display="Flex"
    document.forms["myForm"]["email"].value="";
    document.forms["myForm"]["fname"].value="";
    document.forms["myForm"]["lname"].value="";
    setTimeout(() => {
      document.getElementById("message").style.display="none"
    }, 5000);

  } else {  
    document.getElementById("message").innerHTML="Please complete the entire form."
    document.getElementById("message").style.display="Flex"
 
    setTimeout(() => {
    document.getElementById("message").style.display="none" }, 5000);
  } 
}







/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }