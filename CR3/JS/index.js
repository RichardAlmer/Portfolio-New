
// Starters
const bSoup = 4.9;     // Mexican Bean Soup
const cSoup = 4.9;     // Curry-Corn Soup
const oSoup = 4.8;     // Onionsoup
const cSalad = 6.4;    // Caesar-Salad Roastbeef

// Main Courses
const cBurger = 12.9;   // Hot Chili-Burger
const bBurger = 13.9;   // Cheese and Bacon-Burger
const pBurger = 13.9;   // Pulled Pork-Burger
const mBburger = 14.9;  // Milwaukee-Burger
const rSteak = 22.7;    // Rumpsteak 300g
const sNt = 34.6;       // Surf & Turf
const bSteak = 42.9;    // Bison-Steak 220g
const sDishes = 4.6;    // Side Dishes

// Desserts
const aPie = 4.2;       // American Apple Pie
const cBrownie = 3.9;   // Chocolate brownie
const pancakes = 5.3;   // Pancakes variations
const waffle = 5.4;     // Waffle variations

// Beverages
const sBeer = 3.5;     // 0.33l Beer
const beer = 5.6;      // 0.5l Beer
const sWine = 2.2;     // 1/8l Wine
const wine = 4.4;      // 1/4l Wine
const bWine = 18;       // Bottle Wine
const sSchnapps = 2.4; // 2cl Schnapps
const schnapps = 4.8;  // 4cl Schnapps
const sSoft = 2.7;     // 0.25l Softdrink
const soft = 5.4;      // 0.5l Softdrink



// Function calculateInvoice

function calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice) {

    return Math.round((starterPrice + maindishPrice + dessertPrice + beveragePrice) * 100) / 100    // auf 2 Nachkommastellen geundet wegen ungenauigkeit von 0,00000000000002

}

console.log(`\nCaesar-Salad Roastbeef:\t€ ${cSalad}\nMilwaukee-Burger:\t\t€ ${mBburger}\nWaffle variations:\t\t€ ${waffle}\n0.5l Beer:\t\t\t\t€ ${beer}`);
console.log("Total: \t\t\t\t\t€ " + calculateInvoice(cSalad, mBburger, waffle, beer));

console.log(`\nMexican Bean Soup:\t\t\t€ ${cSoup}\nCheese and Bacon-Burger:\t€ ${bBurger}\nChocolate brownie:\t\t\t€ ${cBrownie}\n1/4l Wine:\t\t\t\t\t€ ${wine}`);
console.log("Total: \t\t\t\t\t\t€ " + calculateInvoice(cSoup, bBurger, cBrownie, wine));

console.log(`\nOnionsoup:\t\t\t\t€ ${oSoup}\nPulled Pork-Burger:\t\t€ ${pBurger}\nPancakes variations:\t€ ${pancakes}\n0.5l Softdrink:\t\t\t€ ${soft}`);
console.log("Total: \t\t\t\t\t€ " + calculateInvoice(oSoup, pBurger, pancakes, soft));


// Function studentInvoice 

function studentInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice) {

    let tenPercent = (starterPrice + maindishPrice + dessertPrice) / 10 
    let total = Math.round((starterPrice + maindishPrice + dessertPrice + beveragePrice - tenPercent) * 100) / 100  // auf 2 Nachkommastellen geundet wegen ungenauigkeit von 0,00000000000002
    
    return [tenPercent, total]

}

console.log(`\nCurry-Corn Soup:\t\t€ ${bSoup}\nHot Chili-Burger:\t\t€ ${cBurger}\nAmerican Apple Pie:\t\t€ ${aPie}\n0.5l Beer:\t\t\t\t€ ${beer}\n10% Discount for Food:\t€-${studentInvoice(bSoup, cBurger, aPie, beer)[0]}`);
console.log("Total: \t\t\t\t\t€ " + studentInvoice(bSoup, cBurger, aPie, beer)[1]);

console.log(`\nMexican Bean Soup:\t\t\t€ ${cSoup}\nSurf & Turf:\t\t\t\t€ ${sNt}\nChocolate brownie:\t\t\t€ ${cBrownie}\n2cl Schnapps:\t\t\t\t€ ${sSchnapps}\n10% Discount for Food:\t\t€-${studentInvoice(cSoup, sNt, cBrownie, sSchnapps)[0]}`);
console.log("Total: \t\t\t\t\t\t€ " + studentInvoice(cSoup, sNt, cBrownie, sSchnapps)[1]);

console.log(`\nOnionsoup:\t\t\t\t€ ${oSoup}\nBison-Steak 220g:\t\t€ ${bSteak}\nPancakes variations:\t€ ${pancakes}\n0.5l Softdrink:\t\t\t€ ${soft}\n10% Discount for Food:\t€-${studentInvoice(oSoup, bSteak, pancakes, soft)[0]}`);
console.log("Total: \t\t\t\t\t€ " + studentInvoice(oSoup, bSteak, pancakes, soft)[1]);