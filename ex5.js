const x = 2;
const n = 4;

const stepen=(x, n)=> {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
console.log(stepen (x, n));