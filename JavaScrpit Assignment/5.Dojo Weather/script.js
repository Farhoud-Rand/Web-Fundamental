// This function to print alert 
function printAlert(){
    alert('Loading weather report...');
}

// This function is used to hide the cookie message 
function hideCookie(){
    var cookieDiv = document.querySelector('.cookie');
    cookieDiv.remove();
}

// Since it will be the same process (doing a for loop) I will make it in different function and give it the needed values
function changeTempValues (selection) {
    var unit = selection.value; 
    if (unit == 'F') {
        changeVlauesTo('F');
    } else 
        changeVlauesTo('C');
}

// Here I will do a for in order to select each tempreture value
// But first I will select the parent section that contains all articales (with days ID)
// And then I will go to all articales inside it by using attribute childeren.length 
// In each loop I will select the artical then I will call paragraph that contains tempreture values (red, blue classes) 
// from the artical name like this: day.querySelector('.red');
// Then change the value 
function changeVlauesTo(unit) {
    var allDays = document.getElementById('days'); // Parent section 
    var day;                                       // Child artical
    var redValue;                                  // Element that contains the high tempreture 
    var blueValue;                                 // Element that contains the low tempreture 
    for (var dayNum=0; dayNum<allDays.children.length; dayNum++) {
        day = allDays.children[dayNum];
        redValue = day.querySelector('.red');
        blueValue = day.querySelector('.blue');
        if (unit == 'C') {
            redValue.innerText = Math.round((parseInt(redValue.innerText) - 32) / 1.8)+ '°';
            blueValue.innerText =  Math.round((parseInt(blueValue.innerText) - 32) / 1.8) + '°';
        } else {
            redValue.innerText = Math.round((parseInt(redValue.innerText) * 1.8) + 32) + '°';
            blueValue.innerText = Math.round((parseInt(blueValue.innerText) * 1.8) + 32) +'°';
        }
    }
}