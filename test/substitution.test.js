// Write your tests here!
const expect = require ("chai").expect;
const substitution = require ("../src/substitution").substitution;

describe ("My substitution tests", () => {

    it ("Should return false if alphabet isn't 26 characters", () => {
        const alphabet = "abcdefghijkl";
        const input = "Roller Coaster!";
        const actual = substitution(input, alphabet);
        expect (actual).to.equal (false);
    })

    it ("Should correctly translate phrase", () => {
        const alphabet = "zaqwsxcderfvbgtyhnmjuiklop";
        const input = "Roller Coaster!";
        const actual = substitution (input, alphabet);
        const expected = "ntvvsn qtzmjsn!"
        expect (actual).to.equal (expected);
    })

    it ("Should return false if alphabet has duplicates", () => {
        const alphabet = "keladjekehekjaoskkdsawerta";
        const input = "Hello World";
        const actual = substitution (input, alphabet);
        expect (actual).to.equal (false);
    })

    it ("Maintains spaces in the message", () => {
        const input = "Hello World";
        const alphabet = "zaqwsxcderfvbgtyhnmjuiklop"
        const expected = "dsvvt ktnvw"
        const actual = substitution (input, alphabet);
        expect (actual).to.equal(expected);
    })

    it ("Should ignore capital letters", () => {
        const input = "HeLlO wOrLd";
        const alphabet = "zaqwsxcderfvbgtyhnmjuiklop"
        const expected = "dsvvt ktnvw"
        const actual = substitution (input, alphabet);
        expect (actual).to.equal(expected);
    })
})