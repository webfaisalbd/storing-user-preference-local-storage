const selectFontSizeChange= document.getElementById('fontSize');
const selectColorChange= document.getElementById('bgColor');
const resetButton= document.getElementById('resetButton');
const mainSection= document.getElementById('mainSection');


// function 
function fontSizeChangeFunction(e){
    const selectFont=e.target.value;
   mainSection.style.fontSize=selectFont;
   localStorage.setItem('fontSize',selectFont)

}

function colorChangeFunction(e){
    const selectBgColor=e.target.value;
    mainSection.style.backgroundColor= selectBgColor;
    localStorage.setItem('bgColor',selectBgColor)
}



// add event liseners

selectFontSizeChange.addEventListener('change',fontSizeChangeFunction);
selectColorChange.addEventListener('change',colorChangeFunction);