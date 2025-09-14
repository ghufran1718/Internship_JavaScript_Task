let price = 1000;
let category = "electronics";

let discount = 0;

if (category == "electronics"){
    discount = 0.10;
}
else if (category == "clothes"){
    discount = 0.20;
}
else if(category == "food"){
    discount = 0.05;
}
else{
    discount = 0;
}

let finalprice = price - (price * discount);

console.log("original price: "+ price);
console.log("category: " + category);
console.log("Discount Applied: " + (discount * 100) + "%");
console.log("Final Price: " + finalprice);