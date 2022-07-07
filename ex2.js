
function checkSimpleNum(n) {
    if (n > 1000) {
        console.log("данные неверны");
    }
    else if (n > 1) {
        if (n % 1 === 0 && n % n === 0) {
            console.log(n);
        }
        else {
            console.log("это число не является простым");
        }
    }
};