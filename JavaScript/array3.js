let prices = [250, 645, 300 , 900, 50];
let totalItem = 5;
let newPrice= [];
for(let i = 0; i<prices.length; i++){
    let offer  = prices[i] /10;
    newPrice[i] = prices[i] - offer;

}
console.log(newPrice);