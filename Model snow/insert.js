const imagesnow=document.querySelector('.imagessnow');
const body=document.querySelector('body');
const snoww=document.querySelector('.snoww');
const x=document.querySelector('.x');
imagesnow.addEventListener('click',function(){
body.style.backgroundColor='  rgba(0, 0, 0, 0.96)';
imagesnow.style.width='50%';
imagesnow.style.transform='translateY(-5rem)';
x.style.opacity='100%';
const html=`<div class="snoww"> Hills<div>`;
document.querySelector('.imagessnow').insertAdjacentHTML('afterend',html);
});
x.addEventListener('click',function(){
body.style.backgroundColor='rgba(0,0,0,0.1)';
imagesnow.style.width='30%';
imagesnow.style.transform='translateY(5rem)';
});