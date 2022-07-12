const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const getTotalRevenue = transaction => {

let total = transaction.reduce((res, i) => res + i.amount, 0);
return total;
}

const result = getTotalRevenue(dayTransactions); // ==> 310


console.log(result);
