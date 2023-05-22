const operations = [100, -20, 7, -20, 50];


const positiveOperations = operations.filter(operation => operation > 0);
console.log(positiveOperations)

const negativeOperations = operations.filter(operation => operation > 0).map(operation => operation * 60)
console.log(negativeOperations)