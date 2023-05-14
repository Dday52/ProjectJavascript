const res = prompt('Сколько будет 7 + или - 15?');
switch (true) {
    case res === 'Я не Робот':
    case Number(res) === 22:
    case Number(res) === - 8:
        console.log('Успех');
    break;
    default:
        console.log('Вы робот');
}    