function performOperation() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;

    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 == 0) {
                result = "Division by zero is not allowed";
            }
            else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Invalid input. Please enter two numbers and a valid operator (+, -, *, /).";
    }

    document.getElementById("result").innerHTML = "Your result is: " + result;
}

