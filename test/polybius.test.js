// Write your tests here!
const expect = require ("chai").expect;
const polybius = require ("../src/polybius").polybius;

describe ("My Polybius Tests", () => {

    it ("When encoding, should translate i & j to 42", () => {
        const input = "jagged";
        const expected = "421122225141";
        const actual = polybius (input);
        expect (actual).to.equal (expected);
    })

    it ("When decoding, should translate 42 to i/j", () => {
        const input = "421122225141";
        const expected = "i/jagged";
        const encode = false;
        const actual = polybius (input, encode);
        expect (actual).to.equal (expected);
    })

    it ("Should ignore capital letters", () => {
        const input = "JaGgEd";
        const expected = "421122225141";
        const actual = polybius (input);
        expect (actual).to.equal (expected);
    })

    it ("Should maintain spaces in the message", () => {
        const input = "Roller Coaster";
        const expected = "244313135124 31431134445124";
        const actual = polybius (input);
        expect (actual).to.equal(expected);
    })
})