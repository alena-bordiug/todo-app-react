import {useState} from 'react';

function ToDo() {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;

    const newTask = {
      id: task.length,
      text: inputValue,
      completed: false,
    };

    setTask([...task, newTask]);
    setInputValue('');
  };

  const toggleTask = (id) => {
    const updatedTask = task.map((todo) =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo,
    );
    setTask(updatedTask);
  };

  return (
    <div>
      <ol>
        {task.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTask(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#929292' : '#fff',
              cursor: 'pointer',
            }}
          >
            {todo.text}
          </li>
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='Enter new task'
          className='todop-input'
        />
        <div>
          <button type='submit'>Add Task</button>
        </div>
      </form>
    </div>
  );
}

export default ToDo;
