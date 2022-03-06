const hello = function(name, age) {
  // let name = '山田'
  console.log('hello ' + name + age);
  return name + age;
}

// function hello(name, age) {
//   // let name = '山田'
//   console.log('hello ' + name + age);
//   return name + age;
// }

hello('山田', 10);
const returnVal = hello('山田顔洗いなさい', 20);
console.log(returnVal);