function add(num){
    return function (num1) {
        return num + num1;

    }
}
const addNum = add(3);
console.log(addNum(5));
console.log(addNum(10));
console.log(add(5)(4));