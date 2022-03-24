function registration(event) {
    event.preventDefault(); 

    var username = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var rePassword = document.getElementById('rePassword').value;
   
    
    valiateEmail(email);

    validatePassword(password, rePassword);
    
    vaidateUsername(username);
    event.currentTarget.submit();

}
document.getElementById('name').addEventListener('blur', (event) => {
    console.log('focus out');
    var namePattern = /^[a-zA-Z]{3,20}$/;
    var username = document.getElementById('name').value;

    if( namePattern.test(username)){
       
       return true;
   }else{
       window.alert("username has to have charaters only");

       return false;
   }

})

document.getElementById('email').addEventListener('change', (event) =>{
    console.log('focus out');
    var email = document.getElementById('email').value;

    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
   
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        alert("Not a valid e-mail address");
        return false;
    }
})

document.getElementById('password').addEventListener('change', (event) => {
    console.log('focus out');
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    var password = document.getElementById('password').value;
     if(passwordPattern.test(password)){
        return false;
    }else{
        alert("please enter a new pasword");
        return true;
    }
    
   

})

document.getElementById('rePassword').addEventListener('change', (event) => {
    var password = document.getElementById('password').value;
    var rePassword = document.getElementById('rePassword').value;
    if(password !=  rePassword ){
        window.alert(" the password does not macth.");
        return false;
    } 
})

function vaidateUsername( name ){
    var namePattern = /^[a-zA-Z]{3,20}$/;

     if( namePattern.test(name)){
        
        return true;
    }else{
        window.alert("username has to have charaters only");

        return false;
    }
}

function validatePassword(password, rePassword){
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
   
     if(passwordPattern.test(password)){
        return true;
    }else{
        alert("please enter a pasword");
        return false
    }
    
    if(password !=  rePassword ){
        window.alert(" the password does not macth.");
        return false;
    } 
}

function valiateEmail(email){
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        alert("Not a valid e-mail address");
        return false;
    }

}
document.getElementById('registration').addEventListener("submit", registration);
