
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/
document.querySelector("#Blue").addEventListener("click", () => {changeColor("blue")});
document.querySelector("#Red").addEventListener("click", () => {changeColor("red")});
document.querySelector("#Green").addEventListener("click", () => {changeColor("green")});

function changeColor(color){
  document.getElementById("Square").style.backgroundColor = color;
}