

//! createElement,   prepend,   append 





//! 1 код

// let div = document.createElement('div');
// div.innerHTML = '<h1> Ermek </h1> ';
// div.className = 'div';
// document.body.prepend(div);
// document.body.prepend('Er')





//! 2 код

let Er1 = document.createElement('h1');  // Бул жерге тег же div жазат HTML де теглер ар го ошолорду
// Er1.textContent = " Салам Эрмек";
Er1.innerHTML = "Салам Эрмек"; // Бул даный 
Er1.className = 'div1' // Бул жерге h1 дин кластын атын  жазам 
document.body.append(Er1) // Бул переменыйдын  аты 
document.body.append('Ermek') // Бул жөн эле 





//! 3 код

let Er2 = document.createElement('div');
Er2.innerHTML = " Кандайсың Азико ";
Er2.className = "div1";
document.body.prepend(Er2)