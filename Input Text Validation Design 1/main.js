document.getElementById("username").addEventListener(
    "input", function(){
        const username = this;
        const errorMessage = document.getElementById("error-message");

        if(username.value.length <= 3){
            username.classList.add("invalid");
            username.classList.remove("valid");
            errorMessage.textContent = "Username must be more than 3 characters!";
        }
        else{
            username.classList.add("valid");
            username.classList.remove("invalid");
            errorMessage.textContent = ";"
        }
    }
);