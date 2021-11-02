
const index = require('./index')

const simba = new index.Cat('simba', 3, 82, 'grey', 34, 1000 )

describe('a group of tests to test the name and color of the cat', () => {
    test('that the name of the cat is simba', () => {
        expect(simba.name).toBe('simba')
    })

    test('that the color of the cat is grey', () => {
        expect(simba.color).toBe('grey')
    })
})

test('that the train method increases hunger by 10', () => {
    simba.hunger = 82
    simba.train()
    expect(simba.hunger).toBe(92)
    simba.hunger = 82
})

test('that exhaustion reduces by 10 using the sleep method', () => {
    simba.exhaustion = 34
    simba.sleep()
    expect(simba.exhaustion).toBe(24)
})

test('that hunger reduces by 5 using eat method', () => {
    simba.hunger = 80
    simba.eat()
    expect(simba.hunger).toBe(75)
})

test('that happiness increases by 1 when using play method', () => {
    simba.happiness = 1000
    simba.play()
    expect(simba.happiness).toBe(1001)
})