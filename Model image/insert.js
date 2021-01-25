const images=document.querySelector('.img');
const model=document.querySelector('.model');
const x=document.querySelector('.x');
const img=document.querySelector('.img');
const randomnum=(max,min)=>
Math.floor(Math.random()*(max-min+1)+min);
const rancolor=()=>
    `rgb(${randomnum(0,255)}, ${randomnum(0,255)},${randomnum(0,255)})`;
console.log(rancolor(0,255));
images.addEventListener('click',function(){
     model.style.display='none';
    document.querySelector('body').style.backgroundColor=rancolor();
    images.style.margin="8rem";
img.style.width="40rem";


x.style.display="block";
});
x.addEventListener('click',function(e){
    model.style.display='block';
    document.querySelector('body').style.backgroundColor='wheat';
    images.style.margin="0rem";
x.style.display="none";


});