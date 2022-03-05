const obj = {
  first_name: 'sya',
  last_name: 'napan',
  printFullName: function() {
    console.log('hello');
  }
}

class MyObj {
  constructor() {
    this.first_name = 'sya';
    this.last_name = 'napan';
  }
  printFullName() {
    console.log('hello');
  }
}

const obj2 = new MyObj();

obj.printFullName();
obj2.printFullName();