const expect = require('chai').expect;

function Q(){
  this._memory = [];
  this.enq = function(value){
    this._memory.push(value);
  }
  this.deq = function(){
    return this._memory.shift();
  }
}
describe('Q', ()=> {
  it('exists', ()=> {
    expect(Q).to.be.ok;
  });
  it('can enq and deq', ()=> {
    const q = new Q();
    q.enq('moe');
    q.enq('larry');
    expect(q.deq()).to.equal('moe');
    expect(q.deq()).to.equal('larry');
  });
});
