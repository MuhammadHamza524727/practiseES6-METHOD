// Task 1: map() Method
// Problem Statement: Ek array [10, 20, 30, 40, 50] diya gaya hai. Is array ke har element ko 5 se multiply karke ek naya array banao.
// Output: [50, 100, 150, 200, 250]
// Task 2: filter() Method
// Problem Statement: Ek array [15, 26, 33, 40, 18, 29] diya gaya hai. Sirf even numbers ko filter karke ek naya array banao.
// Output: [26, 40, 18]
// Task 3: reduce() Method
// Problem Statement: Ek array [5, 10, 15, 20] diya gaya hai. Is array ke sare elements ka sum calculate karo.
// Output: 50
// Task 4: find() Method
// Problem Statement: Ek array [7, 14, 21, 28, 35] diya gaya hai. Is array me pehla number find karo jo 20 se bada ho.
// Output: 21
// Task 5: findIndex() Method
// Problem Statement: Ek array [3, 5, 7, 9, 11] diya gaya hai. Us element ka index find karo jo 7 ke barabar ho.
// Output: 2 

// Task 6: includes() Method
// Problem Statement: Ek array [12, 24, 36, 48, 60] diya gaya hai. Check karo ki 36 is array me hai ya nahi.
// Output: true
// Task 7: indexOf() Method
// Problem Statement: Ek array [1, 2, 3, 4, 2, 5] diya gaya hai. Array me 2 ka index find karo.
// Output: 1
// Task 8: lastIndexOf() Method
// Problem Statement: Ek array [1, 2, 3, 4, 2, 5] diya gaya hai. Array me 2 ka last index find karo.
// Output: 4

// Task 1: map() Method
// Problem Statement: Ek array [10, 20, 30, 40, 50] diya gaya hai. Is array ke har element ko 5 se multiply karke ek naya array banao.
// Output: [50, 100, 150, 200, 250]

// const arr =   [10, 20, 30, 40, 50]
// const num = 5
//  let a =  arr.map(arr => arr* num)
//  console.log(a);

//  Task 2: filter() Method
// Problem Statement: Ek array [15, 26, 33, 40, 18, 29] diya gaya hai. Sirf even numbers ko filter karke ek naya array banao.
// Output: [26, 40, 18]

//  const arr2 = [15, 26, 33, 40, 18, 29]

// const evenNumber = arr2.filter( number => number % 2 === 0

// )

// console.log(evenNumber);


// const arr3= [10,12,13,20,60,120] ;

// const evenNum = arr3.filter( numbers =>  numbers % 2 === 0 )

// console.log(evenNum);


//start with

// const names =  [
//     "Alice", "Bob", "Charlie", "David", "Eva",
//     "Frank", "Grace", "Hannah", "Ian", "Jack",
//     "Karen", "Liam", "Mia", "Nathan", "Olivia",
//     "Paul", "Quincy", "Rachel", "Sophia", "Tom",
//     "Uma", "Victor", "Wendy", "Xander", "Yara",
//     "Zack", "Amy", "Brian", "Catherine", "Daniel",
//     "Elena", "Felix", "Gina", "Henry", "Ivy",
//     "Jason", "Katie", "Leo", "Molly", "Noah",
//     "Oscar", "Penelope", "Quinn", "Rebecca", "Steve",
//     "Tina", "Ursula", "Vincent", "Will", "Xena",
//     "Yvonne", "Zane", "Anna", "Blake", "Cora",
//     "Derek", "Emma", "Finn", "Gabby", "Hector",
//     "Isla", "Julian", "Kim", "Lucas", "Maya",
//     "Neil", "Ophelia", "Peter", "Quiana", "Ron",
//     "Scarlett", "Tyler", "Una", "Victor", "Walter",
//     "Ximena", "Yusuf", "Zoey", "Amber", "Brad",
//     "Chloe", "Dean", "Evelyn", "Finn", "Georgia",
//     "Harvey", "Isaac", "Jasmine", "Kyle", "Lila"
//   ];




// const search =  names.filter(firstName => firstName.startsWith('H'));

// console.log(search);



// ------------reduce() method
//  ek array ko ek single value mein convert karne ke liye use hota hai.
//  Jaise aap ek list of numbers ka sum nikaalna chaahte hain, ya kisi aur tarah se array
//  ke elements ko combine karna chaahte hain.

// -----Task 3: reduce() Method
// Problem Statement: Ek array [5, 10, 15, 20] diya gaya hai. Is array ke sare elements ka sum calculate karo.
// Output: 50

// const arr = [5, 10, 15, 20]

// const sum = arr.reduce((acc,index) => acc + index,0)

// console.log(sum);

// const product = [2,5,7,8,9,10];

// const sum = product.reduce((acc,index)=> acc+index,0 )

// console.log(sum);

// find() method JavaScript mein array ke elements ko search karne ke liye use hota hai.
//  Iska kaam hai array ke elements ko iterate karna aur pehla element jo diye gaye 
// condition ko match kare, usse return karna.
// Task 4: find() Method
// // Problem Statement: Ek array [7, 14, 21, 28, 35] diya gaya hai. Is array me pehla number find karo jo 20 se bada ho.
// // Output: 21


// const arr = [7, 14, 21, 28, 35];
// const greaterNum = 20
// const find = arr.find((currentValue ) => currentValue > 20 )

// console.log(find);

// const fruitsNames = ["Banana","Apple","Mango","Orange"];
// const findFruit = fruitsNames.find( (currentValue) => currentValue === "Apple"

// )
// console.log(findFruit);



// findIndex()
//  method JavaScript mein array ke elements ko search karne ke liye use hota hai,
// lekin yeh element ko return karne ki bajaye, us element ka index return karta hai jo 
// condition ko match kare.

// Agar koi element condition ko match nahi karta, toh -1 return hota hai.

// Task 5: findIndex() Method
// Problem Statement: Ek array [3, 5, 7, 9, 11] diya gaya hai. Us element ka index find karo jo 7 ke barabar ho.
// Output: 2


// const arr = [3, 5, 7, 9, 11]
// const num = 7


// const findIndex= arr.findIndex( acc => acc === num )

// console.log(findIndex);

// includes() method JavaScript mein kisi array ke andar ek specific
//  element ke hone ya na hone ko check karta hai. Agar element array 
// mein ho, toh yeh true return karta hai, warna false return karta hai.

// Task 6: includes() Method
// Problem Statement: Ek array [12, 24, 36, 48, 60] diya gaya hai. Check karo ki 36 is array me hai ya nahi.
// Output: true


// const arr = [12, 24, 36, 48, 60]
// const checkNum = 36;

// const check= arr.includes( checkNum )
// console.log(check);

// indexOf()
// Aapka code bilkul sahi hai! indexOf() method array ke andar kisi specific value 
// ka index dhoondhne ke liye use hota hai. Agar value milti hai, toh uska index
//  return hota hai, agar value nahi milti toh -1 return hota hai.
// Task 7: indexOf() Method
// Problem Statement: Ek array [1, 2, 3, 4, 2, 5] diya gaya hai. Array me 2 ka index find karo.
// Output: 1

// const arr = [1, 3, 4, 2, 5];
// const findNum = 6;

// const findnumber = arr.indexOf(findNum)


// console.log(findnumber);



// Agar aapko simple value dhoondhna hai, toh indexOf() use karein.
// Agar aapko complex condition ke base par index dhoondhna hai, toh findIndex() use karein.


// Task 8: lastIndexOf() Method
// Problem Statement: Ek array [1, 2, 3, 4, 2, 5] diya gaya hai. Array me 2 ka last index find karo.
// Output: 4

const arr =  [1, 2, 3, 4, 2, 5];
const num =  2


const lastIndexFind = arr.lastIndexOf(num);
console.log(lastIndexFind);


















