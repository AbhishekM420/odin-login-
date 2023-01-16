const form = document.querySelector("form");
const mail = document.getElementById("#email");
const mailerror =document.querySelector("email + span.error");
mail.addEventListener("input" ,(Event) => {
    if(mail.validity.valid){
        mailerror.textContent = "";
        mailerror.className = "error";
    }
    else{
        showError();
        Event.preventDefault();
    }
}
    ,function showError()
{
    if(mail.validity.valueMissing){
        mailerror.textContent ="You need to enter an email adress";
    }
    else if(mail.validity.typeMismatch){
        mailerror.textContent =" Entered value needs to be an email adress";
    }
    mailerror.className = "error active";
}