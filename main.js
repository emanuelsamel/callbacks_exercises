var transactions = [
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'CJ Cherryh',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XS Doodad', price: -0.50 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Basic Gadget', price: -2.00 },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Frederik Pohl',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Clarke Computing',
    items: [
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Neal Stephenson',
    items: [
      { name: 'kilobyte', price: 1024.00 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
    ]
  }
];


// --------------------------------------------------
// EXAMPLE QUESTION
// --------------------------------------------------
/*
  Calculate the total number of transactions.
*/
var totalTransactions = transactions.length;

console.log( 'The total number of transactions is:', totalTransactions );


// --------------------------------------------------
// QUESTION 01
// --------------------------------------------------
/*
  Calculate the total number of 'sales'.

  HINT(S):
  - Not all transactions are 'sales'.
*/
 function salesTransactions(transaction){
   return transaction.type === "sale";
 }

 var numSales = transactions.filter(salesTransactions).length;

/*
  Hey, welcome to the first question!

  Here's a breakdown of the question, and some pointers on how to get started!
    - A variable has been declared a few lines above (`numSales`).
    - Just below, the contents of the `numSales` variable are logged to the console.
    - Your job is to assign the variable to the correct value (in this case: the total number of sales) *BEFORE* it is logged out.
    - You can do this by:
      - Adding an `=` sign (we are *assigning* something after all)
      - Starting with the `transactions` variable (see the example question);
      - Adding one or more methods to transform/extract the value we're looking for.
      - If your solution is correct, `numSales` should be equal to 5.

  You can solve the remaining questions in the same way!

  P.S.
  The breakdown above takes up a lot of space, feel free to move it to the top or bottom of the file!
*/

console.log( 'The total number of sales is:', numSales);

// how to sepcify sales and then cash? can only figure out ALL cash
// --------------------------------------------------
// QUESTION 02
// --------------------------------------------------
/*
  Calculate the total number of 'purchases'.
*/
function purchaseTransaction(transaction){
  return transaction.type === "purchase"
}
var numPurchases = transactions.filter(purchaseTransaction).length

console.log( 'The total number of purchases is:', numPurchases );


// --------------------------------------------------
// QUESTION 03
// --------------------------------------------------
/*
  Calculate the total number of 'cash' 'sales'.

  HINT(S):
  - Don't forget that 'purchases' can also be made in 'cash'!
*/
function cashSaleTransaction(transaction) {
  return transaction.type === 'sale' && transaction.paymentMethod === 'cash'

}
var numCashSales = transactions.filter(cashSaleTransaction).length;


console.log( 'The total number of cash sales is:', numCashSales );


// --------------------------------------------------
// QUESTION 04
// --------------------------------------------------
/*
  Calculate the total number of 'credit' 'purchases'.

  HINT(S):
  - Make sure to exclude any 'sales' made by 'credit'!
*/
function creditPurchaseTransaction(transaction){
  return transaction.type === 'purchase' && transaction.paymentMethod === 'credit'
}
var numCreditPurchases = transactions.filter(creditPurchaseTransaction).length

console.log( 'The total number of credit purchases is:', numCreditPurchases );


// --------------------------------------------------
// QUESTION 05
// --------------------------------------------------
/*
  Create an array that includes all of vendors which appear in the transactions data set.
  eg. `[ 'vendor one', 'vendor two', ... ]

  HINT(S):
  - Not all transactions have a 'vendor'!
  - The assembled array should be made up of strings, not full `transaction` objects.
  - This array is allowed to contain duplicate values.
*/

var uniqueVendors = [];

function allVendor(transaction) {
  if (transaction.vendor != undefined) {
    uniqueVendors.push(transaction.vendor);
  }
}

transactions.filter(allVendor);

console.log( 'The vendors are:', uniqueVendors );


// --------------------------------------------------
// QUESTION 06
// --------------------------------------------------
/*
  Create an array that includes all of *unique* customers which appear in the transactions data set.
  eg. `[ 'customer one', 'customer two', ... ]

  HINT(S):
  - Not all transactions have a 'customer'!
  - The assembled array should be made up of strings, not full `transaction` objects.
  - Make sure that the resulting array *does not* include any duplicates.
*/

var uniqueCustomers = [];

function allCustomers(transaction){
  if( transaction.vendor != undefined){

  uniqueCustomers.push(transaction.vendor);
  }
}

transactions.filter(allCustomers  ).length
console.log( 'The unique customers are:', uniqueCustomers );


// --------------------------------------------------
// QUESTION 07
// --------------------------------------------------
/*
  Create an array of information about the 'sale' transactions which include 5 or more items.

  The array should resemble the following:
  [ { name: 'Customer Name', numItems: 5 }, ... ]

  HINT(S):
  - There may be more than 1 'sale' that includes 5 or more items.
  - Individual transactions do not have either `name` or `numItems` properties, we'll have to add them to the output.
*/
var bigSpenders = [];
custID = 0;


function allBigSpender(transaction) {
  if (transaction.items.length >= 5) {
    custID++;
    numItems = transaction.items.length + ' items';
    custName = 'Big Spender' + custID;
    bigSpenders.push(custName, numItems);
  }
}

transactions.filter(allBigSpender);
console.log( 'The "big spenders" are:', bigSpenders );


// --------------------------------------------------
// QUESTION 08
// --------------------------------------------------
/*
  Calculate the sum of the *first* 'sale' transaction.

  HINT(S):
  - Transactions don't have 'prices', but their 'items' do!
*/
var allSales = transactions.filter(isSale);
var items = allSales[0]['items'];

var sumSales = items.reduce(function(sum, item) {
  return sum + item['price'];
}, 0);

function isSale(transaction) {
  if (transaction.type === 'sale') {
    return true;
  }
}


console.log( 'The sum of all sales is:', sumSales );


// --------------------------------------------------
// QUESTION 09
// --------------------------------------------------
/*
  Calculate the sum of *all* 'purchase' transactions.

  HINT(S):
  - Your solution to 'QUESTION 08' is a good starting point!
  - Make sure to include 'price' information from *all* purchases.
*/

var sumPurchases = isPurchase(transactions).reduce(function(sum, value) {
  return sum + value;
}, 0);

function isPurchase(transactions) {
  var purchases = [];
  for (var b = 0; b < transactions.length; b++) {
  if (transactions[b].type === 'purchase') {
    for (var i = 0; i < transactions[b].items.length; i++) {
      purchases.push(transactions[b].items[i].price);
    }
  }
}
  return purchases;
}

console.log( 'The sum of all purhcases is:', sumPurchases );


// --------------------------------------------------
// QUESTION 10
// --------------------------------------------------
/*
  Calculate the company's net profit.

  This number will be positive if the sum of the sales is greater than the amount spent on purchases.

  Otherwise, this number will be negative.

  HINT(S):
  - Unlike 'QUESTION 08' and 'QUESTION 09', here we're interested in both 'sale' and 'purchase' transactions.
*/
var totalPurchases = isAPurchase(transactions).reduce(function(sum, value) {
  return sum + value;
}, 0);

function isAPurchase(transactions) {
  var purchases = [];
  for (var b = 0; b < transactions.length; b++) {
  if (transactions[b].type === 'purchase') {
    for (var i = 0; i < transactions[b].items.length; i++) {
      purchases.push(transactions[b].items[i].price);
    }
  }
}
  return purchases;
}

var totalSales = isASale(transactions).reduce(function(sum, value) {
  return sum + value;
}, 0);

function isASale(transactions) {
  var sales = [];
  for (var b = 0; b < transactions.length; b++) {
  if (transactions[b].type === 'sale') {
    for (var i = 0; i < transactions[b].items.length; i++) {
      sales.push(transactions[b].items[i].price);
    }
  }
}
  return sales;
}

var netProfit = totalSales + totalPurchases;




console.log( 'The net profit is:', netProfit );


// --------------------------------------------------
// QUESTION 11
// --------------------------------------------------
/*
  Calculate the most items sold as part of single transaction.

  HINTS:
  - The result of this calculation should be a number (not an array, object, or other data type).
*/
function doStuff(highest, transaction) {
  var numItems = transaction['items'].length;
  if (numItems > highest) {
    return numItems;
  } else {
    return highest;
  }
}

var mostItems = transactions.reduce(doStuff, 0);

console.log( 'The most items sold in a single transaction is:', mostItems );


// --------------------------------------------------
// QUESTION 12
// --------------------------------------------------
/*
  Calculate the sum of the 'purchase' with the fewest items.
*/
function leastItems(array) {
  var leastCount = 0;
  for (var index = 0; index < array.length; index++) {
    if (leastCount === 0) {
      leastCount = array[index];
    } else if (leastCount >= array[index].length) {
      leastCount = array[index];
    }
  }
  return leastCount;
}

var sumOfSmallestPurchase = transactions.filter(filterPurchases).map(mapTransactionsItems);

console.log( 'The sum of the smallest purchase is:', sumOfSmallestPurchase );
