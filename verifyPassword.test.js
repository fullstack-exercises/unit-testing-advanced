const {
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached,
    verifyPassword

} = require("./verifyPassword");

describe("Password verifier utility functions", () => {
    test("Password has right length, 9 characters", function() {
        expect(hasRightLength('123456789')).toBe(false);
    });
    test("Password has right length, 8 characters", function() {
        expect(hasRightLength('12345678')).toBe(true);
    });
    test("Password has right length, empty", function() {
        expect(hasRightLength('')).toBe(true);
    });
    test("Password has right length, null", function() {
        expect(hasRightLength(null)).toBe(false);
    });
    test("Password is not null", function() {
        expect(isNotNull(null)).toBe(false);
    });
    test("Password is not null, true", function() {
        expect(isNotNull('Xjei')).toBe(true);
    });

    test("Has upper case character", () => {
        expect(hasUpperCaseCharacter('a')).toBe(false);
    });

    test("Has upper case character, true", () => {
        expect(hasUpperCaseCharacter('A')).toBe(true);
    });

    test("Has upper case character, again true", () => {
        expect(hasUpperCaseCharacter('Ab')).toBe(true);
    });

    test("Has upper case character, numbers", () => {
        expect(hasUpperCaseCharacter('12')).toBe(false);
    });

    test("Has lower case character, one character", () => {
        expect(hasLowerCaseCharacter('a')).toBe(true);
    });

    test("Has lower case character, two characters", () => {
        expect(hasLowerCaseCharacter('Ae')).toBe(true);
    });

    test("Has lower case character, numbers", () => {
        expect(hasLowerCaseCharacter('123')).toBe(false);
    });

    test("Has digits", () => {
        expect(hasDigit('123')).toBe(true);
    });

    test("Has digits letters", () => {
        expect(hasDigit('abhjd')).toBe(false);
    });
});

describe("Check password combinations", () => {
    test('All conditions false', () => {
        const conditions = [false, false, false, false, false]
        expect(minimumConditionsReached(conditions)).toBe(false);
    });

    test('3 conditions false', () => {
        const conditions = [true, true, false, false, false]
        expect(minimumConditionsReached(conditions)).toBe(false);
    });

    test('3 conditions true', () => {
        const conditions = [true, true, true, false, false]
        expect(minimumConditionsReached(conditions)).toBe(true);
    });

    test('4 conditions true', () => {
        const conditions = [true, true, true, true, false]
        expect(minimumConditionsReached(conditions)).toBe(true);
    });
});

describe("Verify Password", () => {
    test('Verify correct password', () => {
        expect(verifyPassword('aB12')).toBe(true);
    });

    test('Verify password, null', () => {
        expect(verifyPassword(null)).toBe(false);
    });

    test('Verify password, caps', () => {
        expect(verifyPassword('ABC')).toBe(false);
    });

    test('Verify password, only lowercase', () => {
        expect(verifyPassword('acb')).toBe(true);
    });

    test('Verify password, only numbers', () => {
        expect(verifyPassword('123')).toBe(false);
    });
});