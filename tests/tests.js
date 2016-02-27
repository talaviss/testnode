/**
 * Created by tal on 27/02/2016.
 * description: some redicolus tests  - to the data
 */


var should = require('should');
var assert = require('assert');

var threeSeconds = require('seconds');


describe('Test framework', function(){
    it('should have mocha installed and running', function(){
        assert.equal(true,true);
    })
    it('should have the should library installed and running for fluent testing',function()
    {
        true.should.eql(true);
    })

})

describe('Array', function() {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        });
    });
});

