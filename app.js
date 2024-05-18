// Selectors

const form=document.getElementById("form");
const name=document.getElementById("name");
const email=document.getElementById("email");
const password=document.getElementById("password");
const eye=document.getElementById("eye");
const checkbox=document.getElementById("checkbox");

// Event listener
form.addEventListener("submit",function(e){
    e.preventDefault()
    console.log("Sign Up");
    checkInputs();
})

// Function eye

let state = false;
function showPassword(){
if (state) {
    document.getElementById("password").setAttribute("type","password");
    document.getElementById("eye").style.color = "#7d9096";
    state = false
}
else{
    document.getElementById("password").setAttribute("type","text");
    document.getElementById("eye").style.color="#67e49b";
    state = true;
}
}
/* Function: this fuction checks all inputs,
if they are all valid when it is submitted
*/
function checkInputs(){
    // value form of inputs
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue =password.value.trim(); 
}

if (nameValue === "") {
    name.setAttribute("placeholder","Please enter your Full name!");
    name.style.borderBottom=".1rem solid #F73331";
    console.error("Full name was not provided");
}
else{
    name.style.borderBottom=".1rem solid #03ef8e";
    console.log("Full name was Provided");
}

if (emailValue === "") {
    email.setAttribute("placeholder","Please enter your Full name!");
    email.style.borderBottom=".1rem solid #F73331";
    console.error("Email is invalid");
}
else{
    email.style.borderBottom=".1rem solid #03ef8e";
    console.log("Email is valid");
}

if (passwordValue.length < 8 || passwordValue === "") {
    password.setAttribute("placeholder","Please enter a strong Password!");
    password.style.borderBottom=".1rem solid #F73331";
    console.error("Password was not provided");
}
else{
    password.style.borderBottom=".1rem solid #03ef8e";
    console.log("Password was Provided");
}