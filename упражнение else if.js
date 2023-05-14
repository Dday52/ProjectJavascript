const deposit = 12000;
const rate = 0.07;
const depositLength = 24;

const res = deposit * (1 + rate / 12) ** 24;
const housePrice = 13500;

if (res > 13500) {
    console.log(`We can buy a house ${res - housePrice}`);
}
else {
    console.log("Fuck you")
}

