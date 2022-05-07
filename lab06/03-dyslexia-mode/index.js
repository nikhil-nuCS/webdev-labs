/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const changeDyslexiaMode = () => {
  var bodyElement = document.body
  var currentClass = bodyElement.className
  if (currentClass == "dyslexia-mode") {
    bodyElement.className = ""
  } else {
    bodyElement.className = "dyslexia-mode"
  }
};

document.querySelector("#dyslexia-toggle").addEventListener('click', changeDyslexiaMode);