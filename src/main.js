function createCount (init) {
  this.increment = () => {
    return init++;
  };
  this.reset = () => {
    return init;
  };
  this.decrement = () => {
    return init--;
  };
};

const t = new createCount()
t.increment()