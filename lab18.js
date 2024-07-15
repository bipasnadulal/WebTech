function validateForm() {
    let fullName = document.forms["myForm"]["fname"].value
    if (fullName == "") {
        alert("Name must be filled out");
        return false;
    }
    let phoneNumber = document.forms["myForm"]["phoneNum"].value
    let pattern = /^\d{10}$/

    if (!pattern.test(phoneNumber)) {
        alert("Phone number must be 10-digit")
        return false
    }
    let email = document.forms["myForm"]["Email"].value
    let EmailPattern = /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+\\. [a-zA-Z]{2,}$/

    if (!EmailPattern.test(email)) {
        alert("Email must be valid.")
        return false
    }




}

