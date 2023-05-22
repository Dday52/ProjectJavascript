const transactionUsd = [10, -7, 50, -10, 100];

const transactionRub = [];
for (const transaction of transactionUsd) {
    transactionRub.push(transaction * 60);
}


const transactionRub2 = transactionUsd.map((transaction, i) =>{
    return transaction * 60;
});


console.log(transactionUsd);
console.log(transactionRub);


