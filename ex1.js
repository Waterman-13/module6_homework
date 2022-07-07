const arr = [0, 1, 2, 4, 5, 7, 6, 8, "sbgsd"];
function outArrElements() {
    let evenNum = 0;
    let oddNum = 0;
    let zero = 0;
    for (let i = 0; i < arr.length; i++) {
        let checkNaN = isNaN(arr[i]);
        if (typeof arr[i] !== "number") {
            console.log(`это не число:${arr[i]}`);
        }
        else if (checkNaN === true) {
            console.log(`это не число:${arr[i]}`);
        }
        else if (typeof arr[i] === "number") {
            if (arr[i] % 2 === 0) {
                evenNum = evenNum + 1;
            }
            else if (arr[i] % 2 !== 0) {
                oddNum = oddNum + 1;
            }
            else if (arr[i] === 0) {
                zero = zero + 1;
            }
            console.log(`Количество чётных чисел-${evenNum}`);
            console.log(`Количество нечётных чисел-${oddNum}`);
            console.log(`Количество нулевых элементов-${zero}`);
        }
    }
}

function outArrElements();