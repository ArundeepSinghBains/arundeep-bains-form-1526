let submit = document.getElementById("submit");
let email = document.getElementById("email");
let fullname = document.getElementById("fname");
let message = document.getElementById("message");

let ex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


function handleEvent(event) {
    event.preventDefault();
    let data = {};
    let error = [];

    
    if (
        email.value !== ""
    ) {
        if (
            ex.test(email.value)
        ) 
        {
            data['email'] = email.value;
        } 
        else 
        {
            error.push
            (
                {
                email: "mail invalid"
            }
            );
        }
    } 
    else 
    {
        error.push
        (
            {
            email: "mail missing"
        }
        );
    }
    if 
        (
        fullname.value !== ""
    ) 
    {
        data['fullname'] = fullname.value;
    } else 
    {
        error.push(
            {
            fullname: "Fullname missing."
        }
        );
    }
    
    if 
        (
        error.length > 0
    ) 
    {
        console.log('ERRORS', error);
    } 
    else 
    {
        console.log('COLLECTED DATA', data);
    }
    if 
        (
        message.value !== ""
    ) 
    {
        data['message'] = message.value;
    } 
    else 
    {
        error.push(
            {
            message: "message missing"
        }
                  );
    }
}

submit.addEventListener("click", handleEvent);