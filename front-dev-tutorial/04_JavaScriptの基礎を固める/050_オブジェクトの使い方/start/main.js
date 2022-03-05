const person = { 
  name: ['しゃな', 'ぱん'],
  age: 5,
  gender: '？',
  interests: {
    music: 'さだまさし'
  },
  getFullName: function() {
    console.log(this.name[0] + this.name[1])
  }
};

person.age = 12;
console.log(person)
person.getFullName();