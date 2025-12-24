// let user = new Object(); // 

// function User(name, age){
//     this.name = name;
//     this.age = age;
// }


// let user1 = new User("Ermek", 15 )
// console.log(user1);













// let user2 = {
//     name : "Ermek",
//     age : 15,
//     "Ermek 13": true


    

// //! бул код Литеральный 

// }

// console.log(typeof user2);
// console.log(user2.name);
// console.log(user2.age);
// console.log(user2["Ermek 13"]);









// let Сумка = {
//     Свет : "Кара",
//     Көлөмүү : "1кг",
//     Сумаа : "1000 сом",


// }

// console.log(typeof Сумка);
// console.log(Сумка.Свет + " " + Сумка.Сумаа + " " + Сумка.Көлөмүү);



// let Групаа  = {
//     name1 : "Ermek",
//     name2 : "Erbol",
//     name3 : "Эрмек",
//     name4 : "Abdunur",

// }
// console.log(typeof Групаа);
// console.log(Групаа.name1 + " " + Групаа.name2 + " " + Групаа.name3 + " " + Групаа.name4);





                                       //! Object using uf else 

// let user = {
//     username : " Ermek",
//     age : 14,
//     " Ermek 13" : true
// }

// let key = prompt( " Что вы хотите знать о user ?", );
// alert(user[key]);
// console.log(typeof user);
// console.log(user[" Ermek 13"]);









// //! Бул код текшерет экен 

// let user1 = {               // Бул user1 обьект

//     name2 : " Ermek",  // Бул обьектин ичндеги  даныйлар 
//     age2 : 14,                       
//     name3 : "Erbol",  
//     " Ermek 13" : true

//     // name2 age2 дегендер ключ деп айтса болот 

// }

// let key1 = prompt( " Что вы хотите знать о user ?", "name3", "age2"); // user1 обьектин
// //  name2 десе "Ermek" деп чыгарып берет age2 десе 14 деп чыгарат бул ошол обьектин ичинде ошондой
// //  даный бар болсо чыгарат жок болсо Андай малымат жок деп чыгат 


// if(user1[key1] === undefined){
//     alert("Андай малымат жок")  // Если обьекте андай даный жок болсо ушул чыгат 
// }
// else  {
//     alert(user1[key1]);

// }
// console.log(typeof user1);

// alert("name4" in user1) //  in деген текшерет user1 обьектин ичинде ошондой даный барбы деп 






//


// ! Бул код  бардык даныйды чыгарып берет 

// let E1 = {
//     name4 : "Ermek1",
//     age3 : 15,
//     name1 : "Er",
//     'Програсмист' : true
// }

// for(let ER1 in E1){
//     alert(ER1);
//     alert(E1[ER1])
// }






// let E2 = {
//     R1 : "E1",
//     R2 : 14,

// }
// for( let ER2 in E2){
//     alert(ER2);
//     alert(E2[ER1])
// }





// //! Object.assign копия жазайт   
// //? Мындай айтканда Е1 обьектеги деги даныйларды Е2 ге копироват кылат 

// let E1 = {   // Бул 1 Обьект
//     a : 14,
//     b : 10,
//     c : 5

// }
// let E2 = {}; // 2 Обьект

// Object.assign(E2,E1); // Бул жерден E1 обьекти E2 ге копироват кылып жатам малыматарын   
// // (E2,E1) бул жерден кайсыга малымат киргизгиң келсе ошону 1 жазасың 

// console.log(typeof E1);

// console.log(E1.a + " " + E1.b + " " + E1.c);

// console.log(typeof E2);
// console.log(E2.a + " " + E2.b + " " + E2.c);











// //! Бул код дагы 3 обьекти копироват кылып жатат 
// //? Мындай айтканда 3 обьектин даныйларын барын бир кылып жатат 

// let ER1 = {
//     nameER1 : " Ermek",

// }
// let ER2 = {
//     nameER2 : " Erbol"
// }

// let ER3 = {
//     nameER3 : " Abdunur"
// }
// Object.assign(ER1,ER2,ER3)
// Object.assign(ER2,ER1,ER3)        
// Object.assign(ER3,ER2,ER1)



//  console.log(ER1);
//  console.log(ER2);  
//  console.log(ER3);
 
 
//  // Бул жерде биз даныйды өзгөртүп жатабыз
 
// Object.assign(ER3, {nameER3 : " ERMA"})























// let name = "Erme"
// console.log(name);


//! Конструктор

let user1 = new Object();

let user2 = new User('Ermek',15,5,);  // Бул обьектер 
let user3 = new User('Эрмек',15,6);  // ('Ermek',15,5); булар даныйлар 
let user4 = new User('Эрма',15,7);
let user5 = new User('Эрбол',15,8);

function User(name,age,id){  // Булар параметирлер мисалы name бул Ermek деген age деген 15 
    this.name = name;
    this.age = age; // this жардамы менен окшош атарды жазып койсо болот параметирдин 
    this.id = id;

}

console.log(user2);
console.log(user3);  // бул чыгарат 
console.log(user4);
console.log(user5);


 




// let E1 = new E("Эрмек деген бала","Болгон ал 15 жашта")

// function E(name,Er){
 
//     this.Er = Er 
//    this.name = name 
// }

// console.log(E1);






// let ER1 = new E1("Ermek");

// function E1(name){
//     this.name = name;
// }

// console.log(ER1);











// //! new деген жок 

let E1 = E("Ermek")
    function E(name,){
        if(!new.target){
            return new E (name);
        }
        this.name = name;
    }
      
console.log(E1);




// //! Биз return колдонуп даныйды өзгөртүп койсок болот 

let u = new User();

function User(name,Erm1){
    this.name = "Ermek"
    this.Erm1 = 'Erma'

    return{
        name : "Erbol"
        
    }
}
console.log(u);
























var ER1 = new Map();

ER1.set('Ermek', 15)
ER1.set("Erbol", 14)



const ER2 = new Map([
    ['Abdunur',15],
    ['Erma', 20]
]);


console.log(ER1);
console.log(ER2);

