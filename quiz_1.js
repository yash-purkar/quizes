// 1️⃣ Guess the output
let y = 0;
y = y++;
console.log(y);
//OUTPUT 0
// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.


// 2️⃣Write the code snippet which will give desired outuput
const numbers = [[1, 2], [[3], 4]];
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

//Answer
const [[a, b], [[c], d]] = numbers;


//3️⃣Write the code snippet which will give desired outuput
const book = {
  title: 'JavaScript: The Definitive Guide',
  authors: [
    { name: 'David Flangan', age: 49 },
    { name: 'Yukihro Matsumoto', age: 57 },
  ],
  publisher: { name: "O'Reilly Media", location: 'CA' }
};

//Answer
const { authors: [{ name: author1 }, { name: author2 }] } = book;

console.log(author1) // David Flangan
console.log(author2) // Yukihiro Matsumoto


//4️⃣Write the code snippet which will give desired outuput
const voters = [
  { name: "Gojo", age: 30, voted: true },
  { name: "Netro", age: 32, voted: true },
  { name: "Megumi", age: 25, voted: false },
  { name: "Yuji", age: 20, voted: false },
  { name: "Nobara", age: 21, voted: true },
]
//OUTPUT 3
//ANSWER
voters.reduce((acc, { voted }) => (voted ? acc + 1 : acc), 0);

// 5️⃣Guess the output
const nestedArray = [['1', '2'], [3, 4]];

nestedArray.reduce((acc, curr) => [...acc, ...curr], [])
//OUTPUT ["1", "2", 3, 4]


// 6️⃣ Guess the output
const numbers1 = [1, 2, 3, 6, 9, 10, 12, 35, 44, 50];
numbers1.filter((num) => num % 2 && num < 15);
// OUTPUT [1,3,9];


// 7️⃣ What would be the output for the following code?
const add = (a, b) => {
  return a + b;
}

const multiply = (a, b) => {
  return a * b;
}
const calculate = (a, b) => {
  const result1 = add(a, b);
  const result2 = multiply(a, b);
  return result1 + result2;
}
calculate(2, 3);
// OUTPUT 11


// 8️⃣Guess the output
const first = () => {
  for (let i = 0; i <= 3; i++) {
    setTimeout(() => {
      var j = i++;
      console.log(j);
    }, 1000)
  }
}
first();
// OUTPUT 0 1 2 3


// 9️⃣ Guess the output
function bar() {
  foo()
}
function foo() {
  bar()
}
foo()
// OUTPUT  Uncaught RangeError: Maximum call stack size exceeded