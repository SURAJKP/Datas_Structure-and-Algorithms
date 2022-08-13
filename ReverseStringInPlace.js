const str = "Hello World!"
const res = str.replace(/[a-z]+/gi, (s) => s.split('').reverse().join(''));
console.log(res);
