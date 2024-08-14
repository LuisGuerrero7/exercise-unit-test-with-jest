test("One euro should be 1.07 dollars", () => {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test('One dollar should be 146.26 yen', () => {
        const {fromDollarToYen} = require('./app.js');
        const yen = fromDollarToYen(5);

        const expected = 5 * 146.26;

        expect(fromDollarToYen(5)).toBe(731.3);
    }
)

test('One yen should be 0.0056 pounds', () => {
        const {fromYenToPound} = require('./app.js');
        const pound = fromYenToPound(1000);

        const expected = 1000 * 0.0056;

        expect(fromYenToPound(1000)).toBe(5.6)
    }
)

// const { sum } = require('./app.js');

// test('adds 14 + 9 to equal 23', () => {
//             let total = sum(14,9);
//             expect(total).toBe(23)
//         }
//     )