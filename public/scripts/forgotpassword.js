function resetPassword(){
    const email = document.getElementsByClassName('Email')[0];

    if(validateEmail(email.value)){
        try {
            auth.sendPasswordResetEmail(email.value).then(e => {
                console.log(e);
                window.location.href = '/';
                alert("ti abbiamo inviato una email per resettare la password");
            })
        } catch (e) {
            const userlbl = document.getElementById("namelbl");
            userlbl.classList.add('omrs-input-danger');
            console.error(e);
        }
    }
    else{
        const userlbl = document.getElementById("namelbl");
        userlbl.classList.add('omrs-input-danger');
        console.error("email non valida");
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}