import { capitalise, reverseString, add, subtract, multiply, divide, shiftWord, analyzeArray } from "./encryption";

test("returns first letter capitalised", () => {
    expect(capitalise("hello")).toBe("Hello")
})

test("reverse string", () => {
    expect(reverseString("hello")).toBe("olleh")
})

test("add", () => {
    expect(add(4, 5)).toBe(9);
})

test("subtract", () => {
    expect(subtract(9, 7)).toBe(2)
})

test("multiply" , () => {
    expect(multiply(4, 5)).toBe(20)
})

test("divide", () => {
    expect(divide(30, 6)).toBe(5)
})


test("ceasar", () => {
    expect(shiftWord('xyz', 3)).toBe('abc')
})

test("ceasar", () => {
    expect(shiftWord('HeLLo', 3)).toBe('KhOOr')
})

test("ceasar", () => {
    expect(shiftWord('Hello, World!', 3)).toBe("Khoor, Zruog!")
})

test("analyse", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        minimum: 1,
        max: 8,
        length: 6,
    })
})



