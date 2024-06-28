function calculate(operation){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;
    if(isNaN(num1) || isNaN(num2)){
        result = 'porfavor, Ingrese solo numeros validos';
    }else{
        switch(operation){
            case 'add':
                result = num1 + num2;
                break;
            case 'substrac':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                result = num1 / num2;
                break;
            default:
                result = "operacion no seleccionada";
                break;
        }
    }
    document.getElementById('result').textContent = result;
}