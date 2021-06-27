function validateForm() {
  let password = document.getElementById("password");
  let username = document.getElementById("username");
  let confirmPassword = document.getElementById("confirmPassword");
  let length = password.value.length;
  if (password.value === confirmPassword.value && length > 5 && characterCheck(username.value)) {
    return true;
  } else if (length <= 5) {
    $("form p.red-alert.hidden#short-pw").removeClass("hidden");
    return false;
  }
  else if(!characterCheck(username.value)){
    $("form p.red-alert.hidden#invalidUsername").removeClass("hidden");

  }
  else {
    $("form p.red-alert.hidden#dont-match").removeClass("hidden");
  }
  return false;
}



function characterCheck(string){
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if(format.test(string)){
      return false;
    } else {
      return true;
    }
    
}

