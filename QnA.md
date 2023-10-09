1. Write the correct answer from the following options and give an explanation (2-5 lines).
   let greeting;
   greetign = {};
   console.log(greetign);
   A: {}
   B: ReferenceError: greetign is not defined
   C: undefined
   Answer: B: ReferenceError: greetign is not defined

   Explanation: There's a typo in the passed argument. "greetign" is not defined anywhere, so it will throw a ReferenceError. The correct variable name should be "greeting".

2. Write the correct answer from the following options and give an explanation (2-5 lines).
   function sum(a, b) {
   return a + b;
   }
   sum(1, "2");
   A: NaN
   B: TypeError
   C: "12"
   D: 3
   Answer: D: 3

   Explanation: JS is dynamically typed, which means it performs type coercion when performing operations. In this case, when you try to add a number (1) to a string ("2"), JavaScript will convert the number to a string and concatenate them, resulting in "12". Therefore, the correct answer is 3.

3. Write the correct answer from the following options and give an explanation (2-5 lines).
   const food = ["🍕", "🍫", "🥑", "🍔"];
   const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError
Answer: A: ['🍕', '🍫', '🥑', '🍔']

Explanation: In the provided code, food is an array and info.favoriteFood is a reference to the first element of the array (food[0]). When info.favoriteFood = "🍝"; is executed, it changes the value of info.favoriteFood to "🍝", but it doesn't affect the original food array. So, the food array remains ['🍕', '🍫', '🥑', '🍔'].

4. Write the correct answer from the following options and give an explanation (2-5 lines).
   function sayHi(name) {
   return `Hi there, ${name}`;
   }

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError
Answer: B: Hi there, undefined

Explanation: The sayHi function expects a name parameter, but it's called without any arguments. In this case, name is undefined, so the result comes in "Hi there, undefined".

5. Write the correct answer from the following options and give an explanation (2-5 lines).
   let count = 0;
   const nums = [0, 1, 2, 3];

nums.forEach((num) => {
if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4
Answer: B: 2

Explanation: The forEach loop iterates through the nums array. In JS, 0 is considered falsy, so it's not counted in the count. The other elements (1, 2, 3) are truthy, so they increment the count. The final value of count is 2.
