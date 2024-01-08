//sign up

var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var passInput = document.getElementById("passInput");
var message = document.getElementById("message");
var messageExist = document.getElementById("messageExist");
var messageSuccess = document.getElementById("messageSuccess");
var signUp = document.getElementById("signUp");
//console.log(nameInput, emailInput, passInput, message, messageExist, messageSuccess, signUp);

var users = [];
if (localStorage.getItem("users") != null) {
    users = JSON.parse(localStorage.getItem("users"));
}

if (signUp != null) {
    signUp.addEventListener("click", function () {

        if (vaildation() == true) {

            if (isEmailExists() == false) {

                var user = {
                    name: nameInput.value,
                    email: emailInput.value,
                    pass: passInput.value
                }
                users.push(user);
                console.log(users);
                localStorage.setItem("users", JSON.stringify("users"));
                clearForm();
                messageExist.classList.add("d-none");
                messageSuccess.classList.remove("d-none");
            }
            else {
                messageSuccess.classList.add("d-none");
            }
            message.classList.add("d-none");

        }
        else {
            message.classList.remove("d-none");
        }

    })
}


function vaildation() {
    let regexName = /^[a-zA-Z]{2,50}$/;
    let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let regexPass = /[A-Za-z1-9.]{6,15}/;
    //vaild data
    if (regexName.test(nameInput.value) && regexEmail.test(emailInput.value) && regexPass.test(passInput.value)) {

        // message.classList.add("d-none");
        return true;
    }
    //in valid data
    else {
        // message.classList.remove("d-none");
        return false;
    }
}

function isEmailExists() {
    for (var i = 0; i < users.length; i++) {
        if (users[i].email == emailInput.value) {
            messageExist.classList.remove("d-none");
            return true;
        }
    }
    return false;
}

function clearForm() {
    nameInput.value = "";
    emailInput.value = "";
    passInput.value = "";
}

//sign in 
var loginEmail = document.getElementById("loginEmail");
var loginPass = document.getElementById("loginPass");
var login = document.getElementById("login");
var loginMessage = document.getElementById("loginMessage");
var loginMessageincorrect = document.getElementById("loginMessageincorrect");

console.log(loginEmail,loginPass, login,loginMessage,loginMessageincorrect);
/*if (login != null){
    login.addEventListener("click",function(){
        location.href = "./home.html";
    })
}*/

if (login != null) {
    login.addEventListener("click", function () {
        // alert("hello");
        if (vaildationDate() == true) {
            var allusers = JSON.parse(localStorage.getItem("users"));
            for (var i = 0; i < allusers.length; i++) {
                if (allusers[i].email == loginEmail.value && allusers[i].pass == loginPass.value) {
                    // curentUser = allusers[i].name
                    localStorage.setItem("curentUser", allusers[i].name)

                    location.href = "../home.html";

                }
            }
           // loginMessageincorrect.classList.remove("d-none");
            loginMessage.classList.add("d-none");

        }
        else {
            loginMessage.classList.remove("d-none");
        }

    })
}


function vaildationDate() {
    let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let regexPass = /[A-Za-z1-9.]{6,15}/;
    if (regexEmail.test(loginEmail.value) && regexPass.test(loginPass.value)) {

        return true;
    }
    //in valid data
    else {

        return false;
    }
}
//welcome home
var username=document.getElementById("username");
var Logout=document.getElementById("Logout");
if(username != null){
    username.innerHTML=`Welcome ${localStorage.getItem("curentUser")}`;

    Logout.addEventListener("click",function(){
        localStorage.removeItem("curentUser");
    })
}





