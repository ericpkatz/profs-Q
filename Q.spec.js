const expect = require('chai').expect;
const Q = require('./Q');

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
