function testClick(){
     console.log("testClick executed")
}


function changeName(username){
    const element = document.getElementById('username')
    element.innerText = username
}

// function removeBGColor(){
//     const element = document.getElementById("changeColor");
//     element.style.background="white"
// }

// function applyBGColor(){
//     const  element = document.getElementById("changeColor");
//     element.style.background="red"
// }

function removeApplyBGColor(color){
    const element = document.getElementById('changeColor');
    element.style.backgroundColor = color
}

function getData(){
    const element = document.getElementById("randomData");
    console.log("onkeyup",element.value)
    document.getElementById("show").innerText = element.value.toUpperCase();
}
function checkBoxClick(){
    const element = document.getElementById('hobbies');
    console.log(element.checked)
}
function showData(){
    console.log("onkeydown")
}