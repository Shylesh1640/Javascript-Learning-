const name = document.getElementsByClassName("a");

console.log(name);
name[0].style.color = "red";
name[1].style.background = "green";
name[2].style.fontSize = "30px";

const tag = document.getElementsByTagName("h2")[0];
tag.style.color = "blue";       
tag.style.textAlign = "center";
tag.style.textTransform = "uppercase";
console.log(tag);