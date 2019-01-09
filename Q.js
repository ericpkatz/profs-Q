function Q(){
  this._memory = [];
  this.enq = function(value){
    this._memory.push(value);
  }
  this.deq = function(){
    return this._memory.shift();
  }
}

module.exports = Q;
