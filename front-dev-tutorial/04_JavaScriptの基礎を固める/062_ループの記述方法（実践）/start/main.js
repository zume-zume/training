const todos = [
  {
    id: 1,
    title: 'Go to school',
    conpleted: true
  },

  {
    id: 2,
    title: 'Go to museum',
    conpleted: true
  },

  {
    id: 3,
    title: 'Go shopping',
    conpleted: false
  }
]

for(let todo of todos) {
  console.log(todo);
  if(todo.completed === true) {
    console.log(todo.title);
  }
}