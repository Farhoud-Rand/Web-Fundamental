// This function is used to change the inner text for a button 
function changeText(button) { 
    if (button.innerText == "Logout")
        button.innerText = "Login";
    else 
        button.innerText = "Logout";
}
//--------------------------------------------------------------
// This function is remove a button 
function removeButton(button) {
    button.remove();
}
//---------------------------------------------------------------
// This function is give alert and change inner text for a button
var btn1_likes = 13; // Initial value of number of likes in button 1
var btn2_likes = 37; // Initial value of number of likes in button 2

function newLike(button) {
    if (button.id == "btn1") {
        alert ("Ninja was liked");
        btn1_likes++;
        button.innerText = btn1_likes + " likes";
    } else {
        alert ("Ninja was liked");
        btn2_likes++;
        button.innerText = btn2_likes + " likes";
    }
}