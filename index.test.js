
const index = require('./index')
//const amira = index.amira 
const amira = new index.Person('amira', 22, 'tester', 75, 80, 2)

test('that the person amira is named amira', () => {
    expect(amira.name).toBe('amira')
})

describe('a group of tests for the sleep method', () => {
    test('that tiredness decreases by 10', () => {
        amira.tiredness = 75
        amira.sleep()
        expect(amira.tiredness).toBe(65)
    })

    test('that strength increases by 10', () => {
        amira.strength = 80
        amira.sleep()
        expect(amira.strength).toBe(90)

    })
})

test('that the birthday method increases the age by one', () => {
    amira.age = 22
    amira.birthday()
    expect(amira.age).toBe(23)
})

describe('a group of tests for the exercise method', () => {
    test('that tiredness increases by 10', () => {
        amira.tiredness = 75
        amira.exercise()
        expect(amira.tiredness).toBe(85)
    })

    test('that strength decreases by 10', () => {
        amira.strength = 80
        amira.exercise()
        expect(amira.strength).toBe(70)
    })
})