let adminUser="hoddocs", adminPassword="admin";
let UserV,PasswordV;
let stuUser="student",stuPassowed="student"

function log_in(event) {
    event.preventDefault();
    UserV = document.getElementById("email").value;
    PasswordV = document.getElementById("password").value;

    if (
        adminUser == UserV &&
        adminPassword == PasswordV
    ) {
        alert("Login Successful");
        window.location.href = "../index.html";
    }
    else if ( stuUser == UserV &&
              stuPassowed == PasswordV) {
        alert("Login Successful");
        window.location.href = "../index.html";
    } else {
        alert("Invalid Credentials");
    }
}
