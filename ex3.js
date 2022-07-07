function FirstFunction(firstNum) {
    function SecondFunction(secondNum) {
        return firstNum + secondNum;
    }
    return SecondFunction(5);
}
let result = FirstFunction(6);
console.log(result);