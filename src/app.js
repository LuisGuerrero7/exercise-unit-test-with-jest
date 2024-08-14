// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 146.26;
    return valueInYen
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 0.0056;
    return valueInPound
}

// const sum = (a,b) => {
//     return a + b
// }

// console.log(sum(7,3));

// let oneEuroIs = {
//     "JPY": 156.5, // japan yen
//     "USD": 1.07, // us dollar
//     "GBP": 0.87, // british pound
// }

module.exports = { fromEuroToDollar , fromDollarToYen , fromYenToPound};