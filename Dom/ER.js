


// window.onabort = function(){
// let doc = document.getElementById('number1');

// setTimeout9(() => {
//     doc.style.display = 'block';
// },6000);
// }





//? Практика getElementById 

// let doc = document.getElementById('number1');
// console.log(doc);
// alert(doc.innerHTML)


// let doc1 = document.getElementById('Erma1');
// console.log(doc1);

// alert(doc1.innerHTML)




// let doc2 = document.getElementById('Er1');
// console.log(doc2);

// alert(doc2.innerHTML)






// let doc3 = document.getElementById('Erma2')
// alert(doc3.innerHTML)







//! getElementById боюнча  түшүндүрмө

// Бул id менен га иштейт экен анан getElementById көбүнчө 
// HTML ден малымат алган га жардам берет мисалы код
 
//!   <p id="Er1">Ermek 13</p> //? Бул HTML деги код



//! let doc2 = document.getElementById('Er1');
//! console.log(doc2);

//! alert(doc2.innerHTML) 

//? Бул болсо Js деги код

// id дагы аты document.getElementById('Er1'); ичине жазабыз 
// Анан  alert(doc2.innerHTML) жазып туруп переменийдин атын
//  жазып туруп точка innerHTML жазып койуш керек если
//  браузер ге чыгаргым келсе


//? innerHTML буну биз көп колдонобуз анткени бунун
//?  жардамы менен даныйды браузер ге чыгарып берет




















//! querySelectorAll 


// let E1 = document.querySelectorAll('ul > li:last-child'); //querySelectorAll Бул Элеметерди чыгарыш үчүн керек
// //  мислаы div ul class img p button анан өзгортүп койсо да болот бардык даныйды анан бардык даныйдын
// //  светин да алмаштырса болот  css коллдонуп жава скрипке 


// for(let E2 of E1 ){
//     alert(E2.innerHTML);    // innerHTML  Бул даныйды чыгарыш учун керек бирок document терге эле иштейт 
// };



//? Практика  document.querySelectorAll 



let items = document.querySelectorAll("ul > li:first-child");

for (let item of items) {
    console.log(item.innerHTML);
 
}




// let items1 = document.querySelectorAll("ul > li");

// for (let item of items) {
//     console.log(item.innerHTML);
// }







































let E3 = document.querySelector(".ER1")
console.log(E3);



let E4 = document.querySelector("#Er1")
console.log(E4);


//! setTimeout Бул Бир эки секутка задершка  кылат мисалы бир жазуу 2с дан кийин чыгат 



























//! Тема    getElementsByClassName 

let E5 = document.getElementsByClassName("ER1") // Бул жерден querySelector(".ER1")
//  окшоп точка жок эле жазып койсо болот айырмасы ушул 
console.log("getElementsByClassName:",  E5); //? getElementsByClassName Менин түшүгүм боюнча Кластын атын эле чыгарып  берет экен




//! Тема    getElementsByTagName

let E6 = document.getElementsByTagName("li")
console.log("getElementsByTagNam li ден Канчо  бар HTML де ?", E6); 
//getElementsByTagName("li") Бул HTML ичинде канча li же ul бар экенин
//  текшерип чыгарып берет экен ("li") ушунун ичине жазам эмнени текшергим келсе 

let E7 = document.getElementsByTagName("ul")
console.log("getElementsByTagNam ul ден Канчо  бар HTML де ? ", E7);





let E8 = document.getElementsByTagName("p")
console.log("getElementsByTagNam p ден Канчо  бар HTML де ? ", E8);






let E9 = document.getElementsByName("Ar1")
console.log("getElementsByName:", E9);


 
