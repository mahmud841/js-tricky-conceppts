function welcomeMessage(name, greetHandler){
    // console.log(greetHandler);
    greetHandler(name);
}
// const name = 'Tom ';
// const name = ['Tom' , 'bandy', 'sandy'];
// const object = {name: "tom ", age: 23};
function greetMorning(name){
    console.log('Good Morning', name);
}
function greetAfternoon(name){
    console.log('Good Afternoon', name);
}
function greetEvening(name){
    console.log('Good Evening', name);
}
// welcomeMessage(object);
welcomeMessage('Tom tom ' ,greetMorning);
welcomeMessage('Sakib Tom ' ,greetAfternoon);
welcomeMessage('Mahmud Khan ' ,greetEvening);

// parameter hisebe number, string, array, object pathano jabe .interesting matter hosse parameter hisebe ami akta function keo patha te pari .jodi function ke parameter hisebe pathai then function er vitore giye call korle seta callback funbction bole 
//kono akta function er parameter hisebe jodi kono akta function pathano hoi and vitor theke call kora hoi oitai callback function