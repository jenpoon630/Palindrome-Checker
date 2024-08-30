function reverse_string(string) {
    return string.split('').reverse().join('');
}

function check(){
    let user_input = document.querySelector('.js-input');
    let user_value = user_input.value;
    
    if (user_value === reverse_string(user_value)){
        document.querySelector(".result").innerHTML = "yes";
    } else {
        document.querySelector(".result").innerHTML = "no";
    }

    // Clear the input field
    user_input.value = "";
}

