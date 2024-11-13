let item5=document.createElement("li");
item5.textContent="item 5";

let itemList=document.getElementById("itemList");
itemList.appendChild(item5);

let item6 = document.createElement("li");
item6.textContent = "item 6";
itemList.appendChild(item6);

let item7=document.createElement("li");
item7.textContent = "item 7";
itemList.appendChild(item7);

let newDiv=document.getElementById("newDiv")
let divNew = document.createElement("div");
divNew.innerHTML=`<p>New Paragraph</p>`;
divNew.className="new-div";

newDiv.appendChild(divNew);
let num = Math.random;
let body = document.getElementById("body");
let header = document.getElementById("header");
let button = document.getElementById("changeButton");
button.addEventListener("click", function(){
    if(header.textContent==="Dynamic Site"){
    header.textContent = "New Text";header.style.color = "red";header.style.backgroundColor = "grey"; header.style.textAlign="center";} else if(header.textContent === "New Text"){header.textContent = "Dynamic Site"; header.style.color = "blue"}else{header.textContent ="Dynamic Site"};
    itemList.innerHTML += "<li>item </li>";

});

