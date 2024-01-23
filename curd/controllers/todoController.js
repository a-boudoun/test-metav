
let todos = [
    { id: 1, title: 'first task', completed: false },
    { id: 2, title: 'second task', completed: true },
    { id: 3, title: 'third task', completed: true },
  ];
  

  exports.getTodos = (req, res) => {
    res.json(todos);
  };
  

  exports.getTodoById = (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find((t) => t.id === id);
  
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  };
  

  exports.createTodo = (req, res) => {
    if (!req.body.title)
    {
        return (res.status(400).json({message: 'bade request, title required'}));

    }
    const newTodo = {
      id: todos.length + 1,
      title: req.body.title,
      completed: req.body.completed || false,
    };
  
    todos.push(newTodo);
    res.status(201).json(newTodo);
  };
  
  exports.updateTodo = (req, res) => {
    const id = parseInt(req.params.id);
    const todoIndex = todos.findIndex((t) => t.id === id);
  
    if (todoIndex !== -1) {
      todos[todoIndex] = {
        id,
        title: req.body.title || todos[todoIndex].title,
        completed: req.body.completed || todos[todoIndex].completed,
      };
      res.json(todos[todoIndex]);
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  };
  
  exports.deleteTodo = (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter((t) => t.id !== id);
    res.json({ message: 'Todo deleted successfully' });
  };
  