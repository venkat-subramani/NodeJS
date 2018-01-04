var should=require('chai').should();
var util=require('../scripts/util');

describe('tests', function() {

  it('factorial',function(){
       var result=util.factorial(5);
       result.should.equal(121);
  });

});
