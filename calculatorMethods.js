const addition = (...arrayNo) => {
let sum = 0;
arrayNo.forEach((element) => {
    sum += element;
});
return sum;
}

const subtraction = (a, b) =>  a - b;

const multiplication = (...arrayNo) => {
    const mult = arrayNo.reduce((a, b) => a * b
    );
    return mult;
}

const division = (a, b) => a/b;

module.exports = { addition, subtraction, multiplication, division };