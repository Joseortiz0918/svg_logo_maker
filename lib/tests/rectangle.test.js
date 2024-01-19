const Rectangle = require('../rectangle')

describe('Rectangle',()=>{
    it('Should be defined', ()=>{
        const rectangle = new Rectangle
        expect(rectangle).toBeDefined()
    })
    it('Should return logo with user choice of shape color,text, and text color', ()=>{
        const rectangle = new Rectangle('black','joe','white')
        expect(rectangle.render()).toEqual(`
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect x=50 width="200" height="200" fill="black" />
        <text x="150" y="125" font-size="70" text-anchor="middle" fill="white">joe</text>
    </svg>
    `
        );
    });
});
