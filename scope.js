const favNumber = 25;  
function add(first, second){
    console.log(mood); //hoisting korbe 
    const result = first +second;
    if(result >9 ){
        var mood = 'happy';
        mood = 'cranky';
    }
    console.log(result);
    console.log(mood);
    return result;

    // var diye korle se r block scope hoina function er scope a cole jai . ajonne let or const use korte hobe  
    //function call korar por duita parameter second bracket er moddhe use koresi .ajonne output asbe baire use korle output asbe na .atake local scope bole 
}
const sum = add(34,54);
// console.log(first);
console.log(favNumber);// favnumber global scope .ajonne ata function er baire ba vitore use kora jabe


for (var i =0; i< 10; i++ ){

}
console.log(i); 
// value 10 dibe . cause ata var diye lekhar jonne global hoye gese  tai function er baire thekeo access korte parbo 
for (let i = 0; i< 10; i++ ){

}
console.log(i);// i is not defined dibe, cause block er baire console.log koresi. let, const block er vitorre {} er moddhe kaj korbe . var hole baire cole jabe 
/* let and const ke block scope bole most of the catch {} er part ta  , agula hoisting hobe na . var hoisting hoye jai impicitly */

