class studentDetails {
    constructor(fname, lname, fatherName, motherName, dob, email, mobile, marks10, marks12, username, password) {
        this.fname = fname;
        this.lname = lname;
        this.fatherName = fatherName;
        this.motherName = motherName;
        this.dob = dob;
        this.email = email;
        this.mobile = mobile;
        this.marks10 = marks10;
        this.marks12 = marks12;
        this.username = username;
        this.password = password;        
    }
}   

var student1 = new studentDetails("Arun", "Kumar", "Krishna Kumar", "Parvathi", "14/12/2004", "arun@gmail.com", "9876458751", "89", "95", "student1", "Stdpass1@");
var student2 = new studentDetails("Kumar", "Varun", "Puneeth Krishna", "Jyothi", "13/02/2004", "kumar@gmail.com", "967558751", "94", "98", "student2", "Stdpass2#");
var student3 = new studentDetails("Ajith", "Varma", "Chandra Kumar", "Shanthi", "24/10/2004", "ajith@gmail.com", "987453751", "76", "90", "student3", "Stdpass3$");

var studentDetailsArray = [student1, student2, student3]
var userNameArray = ["student1", "student2", "student3"];
var passWordArray = ["Stdpass1@", "Stdpass2#", "Stdpass3$"];

var adminUserNameArray = ["admin1", "admin2", "admin3"];
var adminPassWordArray = ["admpass1", "admpass2", "admpass3"];

const table = document.createElement("table");

function processStudentLogin() {
    
    var form = document.getElementById("login");
    var formData = new FormData(form);

    var userName = formData.get("username");
    var passWord = formData.get("password");

    for (var i = 0; i<userNameArray.length; i++) {
        if (userNameArray[i]==userName && passWordArray[i]==passWord) {
            window.alert("Login Validated");
            window.alert("Hello " + studentDetailsArray[i].fname + " " + studentDetailsArray[i].lname);
            window.alert("You were born on: " + studentDetailsArray[i].dob);
        }
    }    
}

function studentRegisterProcess() {
    
    var form = document.getElementById("studentRegistration");
    var formData = new FormData(form);
    var passInput = formData.get("password");
    var pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$])/;
    var passMatch = pattern.test(passInput);
    if (passMatch == null) {
        window.alert("Password not meeting required pattern")
    } else {
        window.alert(passMatch);
    }
    window.alert(passInput);
    for (var i = 0; i < userNameArray.length; i++) {
        if (userNameArray[i] == formData.get("userName")) {
            window.alert("The username is already in use. Choose another!");
            break;
        } else if (formData.get("password")!=formData.get("confirmpassWord")) {
            window.alert("Passwords are not matching! Please check again.");
            break;
        } else {
            var student1 = new studentDetails(
                formData.get("fname"), 
                formData.get("lname"), 
                formData.get("fatherName"), 
                formData.get("motherName"), 
                formData.get("birthDate"), 
                formData.get("email"), 
                formData.get("mobile"),
                formData.get("10percentage"), 
                formData.get("12percentage"), 
                formData.get("userName"), 
                formData.get("password")
            );
            userNameArray.push(student1.username);
            passWordArray.push(student1.password);
            break;
        }
    }
}

function departmentDisplay() {
    const formResponse = document.getElementById("departmentSelect");
    const userChoice = formResponse.value;
    if (userChoice == "cse") {
        window.location.href = "./sub_pages/cse.html"
    } else if (userChoice == "ise") {
        window.location.href = "./sub_pages/ise.html"
    } else if (userChoice == "aids") {
        window.location.href = "./sub_pages/aids.html"
    } else if (userChoice == "mech") {
        window.location.href = "./sub_pages/mech.html"
    } else if (userChoice == "ece") {
        window.location.href = "./sub_pages/ece.html"
    } else {
        window.location.href = "./academics.html"
    }
}

function processAdminLogin() {
    var form = document.getElementById("adminLogin");
    var formData = new FormData(form);

    var userName = formData.get("username");
    var passWord = formData.get("password");

    for (var i = 0; i<adminUserNameArray.length; i++) {
        if (adminUserNameArray[i]==userName && adminPassWordArray[i]==passWord) {
            window.alert("Login Validated");
            window.location.href = "./sub_pages/adminDashboard.html";
            break;
        }
    }
}

function updateStudent() {
    var selectStudent = document.getElementById("studentChoice");
    var stdchoice = selectStudent.value;
    var selectField = document.getElementById("fieldChoice");
    var choice = selectField.value;
    if (stdchoice=='student1') {
        if (choice=='fname') {
            var updateValue = prompt("Enter new value: ");
            student1.fname = updateValue;
        } else if (choice=='lname') {
            var updateValue = prompt("Enter new value: ");
            student1.lname = updateValue;
        }
        else if (choice=='fatherName') {
            var updateValue = prompt("Enter new value: ");
            student1.fathername = updateValue;
        } else if (choice=='motherName') {
            var updateValue = prompt("Enter new value: ");
            student1.mothername = updateValue;
        } else if (choice=='dob') {
            var updateValue = prompt("Enter new value: ");
            student1.dob = updateValue;
        } else if (choice=='email') {
            var updateValue = prompt("Enter new value: ");
            student1.email = updateValue;
        } else if (choice=='mobile'){
            var updateValue = prompt("Enter new value: ");
            student1.mobile = updateValue;
        } else if (choice=='marks10') {
            var updateValue = prompt("Enter new value: ");
            student1.marks10 = updateValue;
        } else if (choice='marks12') {
            var updateValue = prompt("Enter new value: ");
            student1.marks12 = updateValue;
        }
    } else if (stdchoice=='student2') {
        if (choice=='fname') {
            var updateValue = prompt("Enter new value: ");
            student2.fname = updateValue;
        } else if (choice=='lname') {
            var updateValue = prompt("Enter new value: ");
            student2.lname = updateValue;
        } else if (choice=='fatherName') {
            var updateValue = prompt("Enter new value: ");
            student2.fathername = updateValue;
        } else if (choice=='motherName') {
            var updateValue = prompt("Enter new value: ");
            student2.mothername = updateValue;
        } else if (choice=='dob') {
            var updateValue = prompt("Enter new value: ");
            student2.dob = updateValue;
        } else if (choice=='email') {
            var updateValue = prompt("Enter new value: ");
            student2.email = updateValue;
        } else if (choice=='mobile'){
            var updateValue = prompt("Enter new value: ");
            student2.mobile = updateValue;
        } else if (choice=='marks10') {
            var updateValue = prompt("Enter new value: ");
            student2.marks10 = updateValue;
        } else if (choice='marks12') {
            var updateValue = prompt("Enter new value: ");
            student2.marks12 = updateValue;
        }
    } else if (stdchoice=='student3') {
        if (choice=='fname') {
            var updateValue = prompt("Enter new value: ");
            student3.fname = updateValue;
        } else if (choice=='lname') {
            var updateValue = prompt("Enter new value: ");
            student3.lname = updateValue;
        } else if (choice=='fatherName') {
            var updateValue = prompt("Enter new value: ");
            student3.fathername = updateValue;
        } else if (choice=='motherName') {
            var updateValue = prompt("Enter new value: ");
            student3.mothername = updateValue;
        } else if (choice=='dob') {
            var updateValue = prompt("Enter new value: ");
            student3.dob = updateValue;
        } else if (choice=='email') {
            var updateValue = prompt("Enter new value: ");
            student3.email = updateValue;
        } else if (choice=='mobile'){
            var updateValue = prompt("Enter new value: ");
            student3.mobile = updateValue;
        } else if (choice=='marks10') {
            var updateValue = prompt("Enter new value: ");
            student3.marks10 = updateValue;
        } else if (choice='marks12') {
            var updateValue = prompt("Enter new value: ");
            student3.marks12 = updateValue;
        }
    } else {
        window.location.href = "./sub_pages/adminDashboard.html";
    }
    window.alert(choice + " of " + stdchoice + " is " + updateValue); 
}