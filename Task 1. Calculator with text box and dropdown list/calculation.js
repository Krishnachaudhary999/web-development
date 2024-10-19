function calculate() {
    const operand1 = parseFloat(document.querySelector('input[name="operand1"]').value);
    const operand2 = parseFloat(document.querySelector('input[name="operand2"]').value);
    const operator = document.querySelector('select[name="operator"]').value;
    let result;

    if (isNaN(operand1) || isNaN(operand2)) {
        alert('Please enter valid numbers for operands.');
        return;
    }

    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        default:
            alert('Invalid operator.');
            return;
    }

    document.querySelector('input[name="result"]').value = result;
}
