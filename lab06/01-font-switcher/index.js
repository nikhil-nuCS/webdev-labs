const makeBigger = () => {
   var element = document.getElementsByClassName("content")[0];
   var header = document.querySelector("header");

   var currFont = window.getComputedStyle(element,null).getPropertyValue('font-size');
   console.log(header)
   var headerFont = window.getComputedStyle(header,null).getPropertyValue('font-size');

   var fontSize = parseFloat(currFont); 
   var headerSize = parseFloat(headerFont); 
   element.style.fontSize = (fontSize + 2) + "px";
   header.style.fontSize = (headerSize + 2) + "px";
};

const makeSmaller = () => {
   var element = document.getElementsByClassName("content")[0];
   var header = document.querySelector("header");

   var currFont = window.getComputedStyle(element,null).getPropertyValue('font-size');
   var headerFont = window.getComputedStyle(header,null).getPropertyValue('font-size');

   var fontSize = parseFloat(currFont); 
   var headerSize = parseFloat(headerFont); 

   element.style.fontSize = (fontSize - 2) + "px";
   header.style.fontSize = (headerSize - 2) + "px";

};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

