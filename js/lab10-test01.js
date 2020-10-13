const stocks = [
  { symbol: "AMZN", name: "Amazon", price: 23.67, units: 59 },
  { symbol: "AMT", name: "American Tower", price: 11.22, units: 10 },
  { symbol: "CAT", name: "Caterpillar Inc", price: 9.00, units: 100 },
  { symbol: "APPL", name: "Apple", price: 234.00, units: 59 },
  { symbol: "AWK", name: "American Water", price: 100.00, units: 10 }
];

// your solutions here

// 1)

// for (let s of stocks) {
//   s.total = s.price * s.units;
// }

stocks.forEach(s => s.total = s.price * s.units);
console.log(stocks);

// 2)

// for (let s of stocks) {
//   if (s.symbol == "CAT") {
//     console.log(s)
//     break;
//   }
// }

console.log(stocks.find(s => s.symbol == "CAT"));

// 3)

// const low = [];
// for (let s of stocks) {
//   if (s.price > 0 && s.price < 20) {
//     low.push(s);
//   }
// }

const low2 = stocks.filter(s => s.price > 0 && s.price < 20);
console.log(low2);

// 4)
// const list = [];
// for (let s of stocks) {
//   list.push(`<li>${s.name}</li>`);
// }

const list2 = stocks.map(s => `<li>${s.name}</li>`);
console.log(list2);

// 5)
const sortedStocks = stocks.sort((a,b) => {return a.symbol.localeCompare(b.symbol)});
console.log(sortedStocks);