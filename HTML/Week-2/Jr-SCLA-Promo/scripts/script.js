// function to get the value in input box 'username' and set 'display-user'
class User {
    constructor(fName, lName, email, pass) {
        this.firstName = fName;
        this.lastName = lName;
        this.userEmail = email;
        this.userPass = pass;
    }
}
document.getElementById('submitButton').addEventListener('click', confirmInfo);
let users = [];

function confirmInfo() {
    let userFirstName = document.getElementById('fName').value;
    let userLastName = document.getElementById('lName').value;
    let userEmail = document.getElementById('userEmail').value;
    let userPassword = document.getElementById('userPass').value;
    alert("Thank you " + userFirstName + " " + userLastName + " for signing up!\nYou entered the following email: " +
        userEmail + "\nYou entered the following password: " + userPassword);
    let newUser = new User(userFirstName, userLastName, userEmail, userPassword);
    users.push(newUser);
    clearForm();
    for (let i = 0; i < users.length; i++) {
        console.log(users[i]);
    }
}

function clearForm() {
    document.getElementById('fName').value = '';
    document.getElementById('lName').value = '';
    document.getElementById('userEmail').value = '';
    document.getElementById('userPass').value = '';
    console.log("cleared form")
}