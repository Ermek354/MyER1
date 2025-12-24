


// //! 1 Тапшырма 

// //  Set түзүү

// let students = new Set(["Anna", "Bob", "John", "Anna", "Kate"]);   

// // 2. Mike деген аты коштум
// students.add("Mike");

// // 3. Bob атын өчүрүп салдым
// students.delete("Bob");

// // 4. John барбы же жокпу экенин текшердим
// console.log("John барбы?", students.has("John"));

// console.log("Студенттердин саны:", students.size);

// console.log("Бардык студенттер:");
// for (let student of students) {
//     console.log(student);
// }





// 1. Map түзүү
let countries = new Map([
    ["USA", "Washington DC"],
    ["France", "Paris"],
    ["Japan", "Tokyo"]
]);
countries.set("Kyrgyzstan", "Bishkek");

countries.set("USA", "New York");

countries.delete("Japan");

for (let [ER1, ER2] of countries) {
    console.log(`The capital of ${ER1} is ${ER2}`);
}