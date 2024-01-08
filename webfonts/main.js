let emailInput=document.getElementById('emailInput');
let passInput=document.getElementById('passInput');
let login=document.getElementById('login');
let message=document.getElementById('message');
var currentUser="";
let messageincorrect=document.getElementById('messageincorrect');
console.log(emailInput,passInput,login,message,messageincorrect);

// login.addEventListener("click",function(){
//     alert("hello");

// })

if(login != null)
{
    login.addEventListener("click",function(){

        if(emailInput.value !="" && passInput.value != ""){
       
           var allusers = JSON.parse(localStorage.getItem("users"));
           for (var i=0; i< allusers.length ; i++)
           {
               if(allusers[i].emailUser == emailInput.value && allusers[i].passUser == passInput.value)
               {
                   //currentUser=allusers[i].nameUser;
                   localStorage.setItem("currentUser",allusers[i].nameUser)
                   clearForm();
                  window.location.href="../home.html";
               }  
           }
           message.classList.add("d-none");
             messageincorrect.classList.add("d-none");
        
        }
        else{
           message.classList.remove("d-none");
        }
       })
}
if(login != null)
{
    login.addEventListener("click",function(){
        // alert("welcom");
        window.location.href="../home.html";
    })
}
/*login.addEventListener("click",function(){

 if(emailInput.value !="" && passInput.value != ""){

    var allusers = JSON.parse(localStorage.getItem("user"));
    for (var i=0; i< allusers.length ; i++)
    {
        if(allusers[i].emailUser == emailInput.value && allusers[i].passUser == passInput.value)
        {
            //currentUser=allusers[i].nameUser;
            localStorage.setItem("currentUser",allusers[i].nameUser)
            clearForm();
           window.location.href="../home.html";
            

           

        }
       
    }
    
    message.classList.add("d-none");
    messageincorrect.classList.add("d-none");
 

 }

 else{
    message.classList.remove("d-none");
   
 }

})*/

function clearForm() {
    nameInput.value = "";
    emailInput.value = "";
    passInput.value = "";
}

