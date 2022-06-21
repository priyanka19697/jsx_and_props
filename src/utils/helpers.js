

export const validateData = (values) => {
    const { email, password, repassword } = values
    let errors = []
    const { isEmailValid, emailError } = validateEmail(email)
    const { isPasswordValid, passwordError } = validatePassword(password, repassword)

    if (!isEmailValid) {
        errors.push(emailError)
    }
    if (!isPasswordValid) {
        errors.push(passwordError)
    }

    return errors
}

function validateEmail(email) {
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


    if (email.match(emailRegex)) {
        return {
            isEmailValid: true, 
            emailError: null
        };
    } else {
        return {
            isEmailValid: false,
            emailError: "Email error invalid"
        };

    }
}

function validatePassword(password, repassword) {
    if(password === repassword){
        return {
            isPasswordValid: true, 
            emailError: null};
    }
    else{
        return{
            isPasswordValid: false,
            passwordError: "Password mismatch"
        }
    }
}