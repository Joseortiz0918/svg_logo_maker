const Triangle = require('../triangle')

describe('Triangle',()=>{
    it('Should be defined', ()=>{
        const triangle = new Triangle
        expect(triangle).toBeDefined()
    })
    it('Should return logo with user choice of shape color,text, and text color', ()=>{
        const triangle = new Triangle('black','joe','white')
        expect(triangle.render()).toEqual(`
        <svg version="1.1" 
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="black"/>
        <text x="100" y="150" font-size="70" text-anchor="middle" fill="white">joe</text>
    </svg>
    `
        );
    });
});