function toggleResetPswd(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle() // display:block or none
    $('#logreg-forms .form-reset').toggle() // display:block or none
}

function toggleSignUp(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle(); // display:block or none
    $('#logreg-forms .form-signup').toggle(); // display:block or none
}



$(()=>{
    // Login Register Form
    $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
    $('#logreg-forms #cancel_reset').click(toggleResetPswd);
    $('#logreg-forms #btn-signup').click(toggleSignUp);
    $('#logreg-forms #cancel_signup').click(toggleSignUp);
    // https://developer.mozilla.org/en-US/docs/Web/API/Location/reload
    $('#logreg-forms .form-signin').submit(function(e){
        e.preventDefault();
        window.location.replace('applications.html');
    });
    $('#logreg-forms .form-signup').submit(function(e){
        e.preventDefault();
        confirm("Your Request has been sent!");
        window.location.replace('index.html');
    });
})
