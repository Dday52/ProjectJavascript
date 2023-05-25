const wallet = {
    balance: 0,
    operations:[],
    increase: function(sum, reason){
        this.balance += sum;
        this.operations.push({
            reason: reason,
            sum: sum
        })
        return true;
    },
    decrease: function(sum, reason){
        if(this.balance < sum){
            console.log("Not enough balance");
            return false;
        }
        this.balance -= sum;
        this.operations.push({
            reason: reason,
            sum: - sum
        
})
return true;
    },
getOperationLength: function(){
    return this.operations.length;
}
};
console.log(wallet.increase(1000, 'Salary'));
console.log(wallet.getOperationLength());
console.log(wallet.decrease(-2000, 'Salary'));
console.log(wallet.getOperationLength());
console.log(wallet.decrease(500, 'Salary'));
console.log(wallet.balance);


