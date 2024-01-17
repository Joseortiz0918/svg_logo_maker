// each class should be tested for a render() method 
//should return a string  for the corresponding svg file with the given shape color 
const Shape = require('./shape')

describe('shape',() => {
    it('should be defined',() => {
        const shape = new Shape()

        expect(shape).toBeDefined
    })
})
