var username = document.getElementById("userN");
var password = document.getElementById("passW");
function validate() {
    if(username.value =="" || password.value =="") {
        alert("Please Enter the username and password !");
        return false;
    } else if(username.value =="Eshwar" || password.value =="1234567890") {
        return true;
    } else {
        alert("Invalid Username and Password!");
        return false;
    }
}
