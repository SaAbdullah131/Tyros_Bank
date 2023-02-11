
// step-01:add click event handler with the submit button

const submitButton = document.getElementById("btn-submit");
submitButton.addEventListener("click",function(){
    // step:02-> Get the email address inside the email input field.
    // always remember to use .value to get text from the input field
    const inputEmail= document.getElementById("user-email");
    const email = inputEmail.value;
    // step:03-> Get Password
    // 3.a: set id on the html element
    // 3.b-> get the element
    // 3.c-. get the value from the element

    const inputPassword= document.getElementById("user-password");
    const password = inputPassword.value;
    // checking weather it gets or not
    //  console.log(inputEmailValue,inputPasswordValue);
    /**
     * ---------------
     *  DANGER: DO NOT VERIFY EMAIL PASSWORD ON THE CLIENT SIDE
     * -----------
     */
   // step:04 -> verify email and password and check weather valid user or not

   if(email==='tyrobee@newbie.com' && password ==="tyro@@1"){
     window.location.href='bank.html';
}else {
    alert("Email or Password doesn't match");
}

})