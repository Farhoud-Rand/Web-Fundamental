var button;        // The button number, this number will help us to find the correct text that we need to change it
var likeText;      // The text that we need to change
var numberOfLikes; // The cuurent number of likes in the text

function like(btn){
    // First get the button number
    button = btn.id.match(/\d+/); 
    // Match function use /\d+/ to match one or more digits 
    // Match will retrun array like: ['1', index: 10, input: 'likeButton1', groups: undefined]
    // So we need only the number in the first index 
    // Now find the text we need to change according to the button number 
    likeText = document.querySelector("#numberOfLikes"+button[0]);
    numberOfLikes = likeText.innerText; // Get the current number of likes
    numberOfLikes++; // Increase it 
    likeText.innerText = numberOfLikes; // Change it
}