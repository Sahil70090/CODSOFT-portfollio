function number(num) {
    document.getElementById('show_input').innerHTML += num;
}

//operations
function operate(operator) {
    var input = document.getElementById('show_input').innerHTML;
    if (input) {
        document.getElementById('show_input').innerHTML = input + operator;
    }
}

//result
function equal() {
    console.log("Equal function called");
    var input = document.getElementById('show_input').innerHTML;
    console.log("Input:", input);
    if (input) {
        var result = eval(input);
        console.log("Result:", result);
        document.getElementById('show_input').innerHTML =  result;
        document.getElementById('show_input').innerHTML = result; // Display result in input field
    }
}


//clear display
function clearDisplay() {
    document.getElementById('show_input').innerHTML = '';
    document.getElementById('result').innerHTML = '';
}
