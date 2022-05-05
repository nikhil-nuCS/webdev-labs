/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const handleThemeChange = (themeNumber) => {
   var bodyElement = document.body;
   bodyElement.className = ''
   themeName = "default"
   switch(themeNumber) {
      case 0:
         themeName = "default";
         break;
      case 1:
         themeName = "desert";
         break;
      case 2:
         themeName = "ocean";
         break;
      case 3:
         themeName = "high-contrast";
         break;
         
   
   }
   bodyElement.classList.add(themeName);
};

document.querySelector("#default").addEventListener('click', () => handleThemeChange(0));
document.querySelector("#desert").addEventListener('click', () => handleThemeChange(1));
document.querySelector("#ocean").addEventListener('click', () => handleThemeChange(2));
document.querySelector("#high-contrast").addEventListener('click', () => handleThemeChange(3));