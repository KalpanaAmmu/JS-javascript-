'use strict';
const quotes=[{
    quote:'Knowledge is power'
},{
    quote:'love is life'

},{
    quote:'life is like a box of chocolates'

},{
    quote:' Self love is the best love'

},{
    quote:'keep your friends close,but our enemies closer'

}]

document.querySelector(".btn").addEventListener('click',function(){
let random=Math.floor(Math.random()*quotes.length)
document.querySelector(".h2").innerHTML=quotes[random].quote;
});
