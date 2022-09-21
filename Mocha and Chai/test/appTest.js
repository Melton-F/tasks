const assert = require('chai').assert  //test using assertion chai
const app = require('../index')


//to create a test
describe('App', function(){
    it("this file should return nazi's hello", function(){
        assert.equal(app.greet(), 'hellllooow musicians kottandama') // it must be equal to the function here writtened
    })

    it('should return a string', function(){
        assert.typeOf(app.greet(), 'string')
    })

    it('should return a value above 10', function(){
        assert.isAbove(app.calculation(12,9), 10)
    })

    it('should return true', function(){
        assert.isBoolean(app.some(2,2), true)
    })

    it('it should return the value of 1', function(){
        assert.equal(app.arr([1,2,3]), 1)
    })
})

// describe('Array', function(){
//     it('it should return the value of 1', function(){
//         assert.equal([1,2,3].indexOf(4), 1), 
//     })
// })