// Write your tests here!

const expect = require("chai").expect;
const caesar = require("../src/caesar").caesar;

describe("My Caesar Test", () => {

    describe("Shift", () => {

        it("Should return false if shift is 0", () => {
            const shift = 0;
            const input = "Something";
            const expected = false;
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        })

        it("Should return false if shift is greater than 25", () => {
            const shift = 100;
            const input = "Something";
            const expected = false;
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        })

        it("Should return false if shift is less than -25", () => {
            const shift = -100;
            const input = "Something";
            const expected = false;
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
            expect("This").to.equal("This");
        })

        it ("Should handle shift that goes beyond alphabet length", () => {
            const shift = 20;
            const input = "something";
            const expected = "migynbcha"
            const actual = caesar(input, shift);
            expect (actual).to.equal(expected);
        })
    });

    describe ("Input", () => {

        it ("Should ignore capital numbers", () => {
            const shift = 17;
            const input = "RoLlEr CoAsTeR";
            const expected = "ifccvi tfrjkvi"
            const actual = caesar(input, shift);
            expect (actual).to.equal(expected);
        });

        it ("Should maintain spaces and symbols", () => {
            const shift = 3;
            const input = "Hello There!";
            const expected = "khoor wkhuh!";
            const actual = caesar (input, shift);
            expect (actual).to.equal(expected);
        })
    })

})