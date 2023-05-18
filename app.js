const tasks = ['Задача 1'];
function Add(task) {
    tasks.push(task);
}
 function Remove(task) {
    const index = tasks.indexOf(task);
    tasks.splice(index,1);
 }
function Priority(task) {
    const index = tasks.indexOf(task);
    const oldTask = tasks[index];
    tasks.splice(index,1);
    tasks.unshift(oldTask);
}
Add('Задача 2');
Add('Задача 3');
console.log(tasks);
Remove('Задача 2');
console.log(tasks);
Priority('Задача 3');
console.log(tasks)
