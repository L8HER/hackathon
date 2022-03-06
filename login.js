


function saveData(){
        var nameInput=document.getElementById("fullname").value;
        var usernameInput=document.getElementById("username").value;
        var emailInput=document.getElementById("email").value;
        var phoneInput=document.getElementById("phone").value;
        var passwordInput=document.getElementById("password").value;
        localStorage.setItem("fullname", nameInput);
        localStorage.setItem("username", usernameInput);
        localStorage.setItem("email", emailInput);
        localStorage.setItem("phone", phoneInput);
        localStorage.setItem("password", passwordInput);
        console.log("Worked");
}

function Login(){
        var usernameInput=document.getElementById("usernameLogin").value;
        var passwordInput=document.getElementById("passwordLogin").value; 
        alert("Login Sucessful");
        
}






