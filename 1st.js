let text=document.querySelector(".h");
let change=document.querySelector(".changecolor");
const userlist=document.querySelector(".list");
const listInput=document.querySelector(".list-input");
const addListBtn= document.querySelector(".addListBtn");


addListBtn.addEventListener("click",function(){
const newLi =document.createElement("li");
const liContent=document.createTextNode(listInput.value);
newLi.appendChild(liContent);
userlist.appendChild(newLi);
});


