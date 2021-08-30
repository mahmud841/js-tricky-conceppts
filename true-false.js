/* 
Falsy 
false dile false
0 dile falsy value dibe 
empty string falsy 
undefind hole false 
null falsy 
NaN falsy 
--------------------------------------------------

Truthy 
true dile true , any number positive or negative true
any string dile truthy including single whitespace ' ' 

[] array truthy 
{} object truthy
anything else that is not falsy will be truthy 
*/

// const x = true;
 const x = 'salman';
if (x) {
    console.log('variable is true');
} 
else{
    console.log('variable is false ');
}
 

let  x =null ;
console.log('value of x' ,x);
if (x) {
    console.log('truthy');
} 
else{
    console.log('variable is false ');
}