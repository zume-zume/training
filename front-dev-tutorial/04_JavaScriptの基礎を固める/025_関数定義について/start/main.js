const hello = function(name, age) {
  // let name = 'しゃなぱん'
  console.log('hello ' + name + age);
  return name + age;
}

// function hello(name, age) {
//   // let name = 'しゃなぱん'
//   console.log('hello ' + name + age);
//   return name + age;
// }

hello('しゃなぱん', 10);
const returnVal = hello('しゃなぱん顔洗いなさい', 20);
console.log(returnVal);