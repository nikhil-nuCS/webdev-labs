const makeBigger = () => {
   var element = document.getElementsByClassName("content")[0];
   var currFont = window.getComputedStyle(element,null).getPropertyValue('font-size');
   var fontSize = parseFloat(currFont); 
   element.style.fontSize = (fontSize + 2) + "px";
};

const makeSmaller = () => {
   var element = document.getElementsByClassName("content")[0];
   var currFont = window.getComputedStyle(element,null).getPropertyValue('font-size');
   var fontSize = parseFloat(currFont); 
   element.style.fontSize = (fontSize - 2) + "px";
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

