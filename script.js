let username = document.getElementById("username");
let password = document.getElementById("password");
let email = document.getElementById("email");
let Aadhar = document.getElementById("Aadhar");
let phoneNumber = document.getElementById("phoneNumber");

let flag = 1;

function validateForm(){
    if(username.value ==""){
        document.getElementById("userError").innerHTML = "User Name is empty";
        flag = 0;
    }else if(username.value.length < 3){
        document.getElementById("userError").innerHTML = "User Name required min 3 char";
        flag = 0;

    }else{
        document.getElementById("userError").innerHTML = "";
        flag = 1;
    }
    if(password.value == ""){
        document.getElementById("passError").innerHTML = "password is empty";
        flag = 0;
    }else{
        document.getElementById("passError").innerHTML = "";
        flag = 1;
    }
    if(email.value.length <= 0){
        document.getElementById("emailError").innerHTML = "Enter an email Id";
        flag = 0;
    }else{
        document.getElementById("emailError").innerHTML = "";
        flag = 1;
    }
    if(Aadhar.value.length <= 12){
        document.getElementById("AadharError").innerHTML = "Enter valid aadhar";
        flag = 0;
    }else{
        document.getElementById("AadharError").innerHTML = "";
        flag = 1;
    }

    if(number.value.length < 10){
        document.getElementById("numError").innerHTML = "number must be 10 didgit";
        flag = 0;
    }else{
        document.getElementById("numError").innerHTML = "";
        flag = 1;
    }
    
    if(flag){
        return true;
    }else{
        return false;
    }
}
