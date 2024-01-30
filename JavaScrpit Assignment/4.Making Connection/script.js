function changeProfile() {
    /* which is better 
        document.getElementById('nameText').innerText = "Rand Farhoud";
        or using var as below?
    */
    var name = document.getElementById('nameText');                                  // Change name
    name.innerText = "Rand Farhoud";
    var image = document.getElementById("profileImage");                             // Change image
    image.src = "images/rand-f.jpg";
    document.querySelector(".card-header").style.backgroundColor="rgb(145 85 119)"; // Change background colors
    document.querySelector(".btn").style.backgroundColor="rgb(145 85 119)";
}

function DeleteRequest(icon) {
    var numbers = document.querySelectorAll(".badge");          // Get both number of request and number of connection by select all elements with badge class
    var numConection;                                           // Number of connections
    if(icon.classList.contains('true')){ 
        numbers[0].innerText -= 1;                              // Decrease number of request
        numConection = numbers[1].innerText.match(/\d+/)[0];    // Get the current number of connection in order to increase it
        numbers[1].innerText= parseInt(numConection) + 1 + "+"; // increase the number then add + to it (but first we need to convert it to intger)
        icon.parentNode.parentNode.remove();                    // Remove the first parent is a span cotains 2 icons so we need to remove the parent of this span which is the list item
    } else {                                                    // If false we don't need to increase the number of connection
        numbers[0].innerText -= 1;                              // Decrease number of request
        icon.parentNode.parentNode.remove();        
    }
}