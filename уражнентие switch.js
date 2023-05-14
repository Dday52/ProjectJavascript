/*const role = 'manager';
if (role === 'manager') {
    console.log('Manager');}

else if (role === 'admin') {
    console.log('Admin');}
else if (role === 'ceo'){ 
    console.log('CEO');}
else {
    console.log('We dont know you');}
*/
const role = 'admin';    
switch(role) {
    case 'manager':
        console.log('Manager');
        break;
    case 'admin':
        console.log('Admin');
        break;
    case 'ceo':
        console.log('CEO');
        break;
default:
    console.log('We dont know you');
}                


const num = 1;
switch(true) {
    case num > 0:
        console.log('Polozitelnii');
        break;
    case num < 0:
        console.log('Otritatelnii');
        break;
default:
    console.log('Zero');
}       