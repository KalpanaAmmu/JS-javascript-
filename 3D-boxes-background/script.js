// single box in 3D Box background
const boxcont=document.querySelector("#boxes");
const btn=document.querySelector("#btn")
const box=document.createElement('div')
btn.addEventListener('click',function(){
  boxcont.classList.toggle('big')
});
function create(){
 for(i=0;i<4;i++)
 for(j=0;j<4;j++){
   box.classList.add('box')
   box.style.backgroundPosition=`${-j*130}px ${-i*130}px`
   boxcont.append(box)
 }
}
create()
document.querySelector("body").style.backgroundColor="red";
box.style.backgroundColor="white"


// multi box in 3d boc backgorund


// let i,j;
// btn.addEventListener('click',()=>{
//   boxcont.classList.toggle('big')
// })
// function createBoxes(){
//   for (let i=0;i<4;i++){
//     for( let j=0;j<4;j++){
//       box.classList.add('box')
//       box.style.backgroundPosition=`${-j*125} px${-i*25}px`
// boxcont.append(box)
//     }
//   }
// }
// createBoxes()



// author
const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click', () =>
 boxesContainer.classList.toggle('big'))

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div')
      box.classList.add('box')
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
      boxesContainer.append(box)
    }
  }
}

createBoxes()
