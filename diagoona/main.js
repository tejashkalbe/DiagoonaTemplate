let btn1 = document.getElementById('btn1');
console.log(btn1)
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

btn1.addEventListener('click',()=>{
  document.getElementById('contain2').setAttribute("style","background-image:linear-gradient(0deg,transparent,rgba(16, 79, 150, 0.2) 100%),linear-gradient(112deg,transparent 50%,rgba(15, 15, 15, 0.767) 50%),url(bg1.jpg);");

})
btn2.addEventListener('click',()=>{
  document.getElementById('contain2').setAttribute("style","background-image:linear-gradient(0deg,transparent,rgba(16, 79, 150, 0.2) 100%),linear-gradient(112deg,transparent 50%,rgba(15, 15, 15, 0.767) 50%),url(bg2.jpg);");


})
btn3.addEventListener('click',()=>{
  document.getElementById('contain2').setAttribute("style","background-image:linear-gradient(0deg,transparent,rgba(16, 79, 150, 0.2) 100%),linear-gradient(112deg,transparent 50%,rgba(15, 15, 15, 0.767) 50%),url(bg3.jpg);");
})