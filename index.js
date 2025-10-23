
let div = document.getElementById("container");
console.log(div);
let para = document.createElement("p");
para.textContent = "adding content using    textContent()"

let para2 = document.createElement("p");
div.appendChild(para);

console.log(para.textContent);
console.log(para.innerText);

let box = document.getElementById("box");
box.innerHTML="New content <br> Updated from old Content";

let list = document.getElementById("list");
let i=document.getElementById("remove");

// i.remove();

let li = document.querySelector("li");
list.removeChild(li);