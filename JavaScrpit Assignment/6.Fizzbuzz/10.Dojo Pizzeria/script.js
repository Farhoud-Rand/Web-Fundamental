// Function to create a pizza object
function pizzaOven(crust, sauce, cheeses, toppings) {
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
// Arrays have different values, we will use them in random selection
var pizzaCrust = ["deep dish","hand tossed","thin","thick"];
var pizzaSauce = ["traditional","marinara","pesto","BBQ","alfredo"];
var pizzaCheese = ["mozzarella","feta", "cheddar", "gorgonzola"];
var pizzaTopping = ["pepperoni","sausage","mushrooms","olives","onions","bell peppers","chicken"];

// Function to create random pizza ingredients 
function randomPizza(){
    var crust = pizzaCrust[getRandomNumber(0,pizzaCrust.length-1)];
    var sauce = pizzaSauce[getRandomNumber(0,pizzaSauce.length-1)];
    var cheese = [];
    var topping = [];
    var random;
    if(getRandomNumber(0,1) == 0){ // Get only one type
        cheese.push(pizzaCheese[getRandomNumber(0,pizzaCheese.length-1)]);
        topping.push(pizzaTopping[getRandomNumber(0,pizzaTopping.length-1)]);
    } else { // get more than one type 
        var count = getRandomNumber(0,pizzaCheese.length-1);
        for (var i =0; i< count ; i++){
            random = pizzaCheese[getRandomNumber(0,pizzaCheese.length-1)];
            if (!cheese.includes(random))
                cheese.push(random);
        }
        count = getRandomNumber(0,pizzaTopping.length-1);
        for (var i =0; i< count ; i++){
            random = pizzaTopping[getRandomNumber(0,pizzaTopping.length-1)];
            if (!topping.includes(random))
                topping.push(random);
        }
    }
    return pizzaOven(crust, sauce, cheese, topping);
}

// This function select a random number between range min - max
function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Test the above functions
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log("pizza #1:");
console.log(pizza1);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log("pizza #2:");
console.log(pizza2);
var pizza3 = pizzaOven("thin", "pesto", ["mozzarella", "cheddar"], ["mushrooms", "olives", "onions", "bell peppers"]);
console.log("pizza #3:");
console.log(pizza3);
var pizza4 = pizzaOven("thin", "BBQ", ["mozzarella", "cheddar"], ["chicken", "olives"]);
console.log("pizza #4:");
console.log(pizza4);
var pizza5 = randomPizza();
console.log("Random pizza #5:");
console.log(pizza5);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
Coding dojo examples: 
var taco1 = {
    "tortilla": "soft corn tortilla",
    "protein":  "tinga chicken",
    "cheese":   "cotija cheese",
    "toppings": ["lettuce", "pico de gallo", "guacamole"],
    "tacoInfo": function() {
        console.log("Tortilla: " + this.tortilla);
        console.log("Protein:  " + this.protein);
        console.log("Cheese:   " + this.cheese);
        console.log("Toppings: " + this.toppings);
    }
}
    
// we can now still get all the delicious taco facts by
taco1.tacoInfo(); // note tacoInfo still gets called like a function
/////////////////////////////////////////////////////////////////////
function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    return sandwich;
}
    
var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
console.log(s1);
*/