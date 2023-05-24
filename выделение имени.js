const userName = 'Вася aka Terminator Perdinator Пупкин';

const userVasea = userName.slice(0, userName.indexOf(' '));;
console.log(userVasea);
const userSurname = userName.slice(userName.lastIndexOf(' ') + 1);
console.log(userSurname);