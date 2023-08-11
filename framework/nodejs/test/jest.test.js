//npm i --save jest
//yarn add jest

//npm run test

//https://github.com/sh-navid/SoftwarePrinciples/blob/main/Tools/jest.test.js

test('Test with JEST', () => {
    expect(1 + 1).toEqual(2);
    expect(1 === 1).toBe(true);

    let tmp;
    expect(tmp).toBeUndefined();

    expect(4).toBe(4);
    expect(4).not.toBe(5);
    expect(4).toBeDefined();
    expect(4).toBeCloseTo(4.001);
    expect(4).toBeGreaterThan(0);
    expect(4).toBeGreaterThanOrEqual(0);
    expect(4).toBeLessThan(10);
    expect(4).toBeLessThanOrEqual(10);

    expect(.2 + .1).not.toBe(0.3);
    expect(.2 + .1).toBeCloseTo(0.3);
    expect(5).toBeCloseTo(5.005);

    expect(null).toBeNull();
    expect({ x: 12, y: 13 }).toEqual({ x: 12, y: 13 });

    expect(true).toBeTruthy();
    expect(false).toBeFalsy();

    expect("hello world").toMatch("hello");
    expect(["A", "B", "C"]).toContain("B");

    expect("ABC").toHaveLength(3);
});