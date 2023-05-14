const balance = 100;
const bonusBalance = 900;
const isBanned = false;
const isExist = false;
const isSelling = true;

const canBuy = (balance > 1000 || bonusBalance > 100) &&
!isBanned   
&& !isExist
&& isSelling;
console.log(`I can buy: ${canBuy ? 'yes' : 'no'}`);
