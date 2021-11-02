
const index = require('./index')

const edward = new index.Car('seat', 'Ibiza FR', 400, 'KS13MFE', 64000, 70, 'grey', 4000)

describe('a group of tests for the make, model, and car reg', () => {
    test('that the make of the car is a seat', () => {
        expect(edward.make).toBe('seat')
    })

    test('that the model of the car is Ibiza FR', () => {
        expect(edward.model).toBe('Ibiza FR')
    })

    test('that the registration of the car is KS13MFE ', () => {
        expect(edward.reg).toBe('KS13MFE')
    })
})

test('that price descreases by 1000 after accident method', () => {
    edward.price = 4000
    edward.accident()
    expect(edward.price).toBe(3000)
})

test('that speed increases by 10 when fuel method is called', () => {
    edward.speed = 70
    edward.fuel()
    expect(edward.speed).toBe(80)
})

test('that bhp increases by 100 after remap method is called', () => {
    edward.bhp = 400
    edward.remap()
    expect(edward.bhp).toBe(500)
})
