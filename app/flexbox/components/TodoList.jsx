// "use client";

// import { useState } from 'react';

// export default function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [task, setTask] = useState('');

//   const addTodo = () => {
//     if (task.trim() === '') return;
//     setTodos([...todos, task]);
//     setTask('');
//   };

//   const deleteTodo = (index) => {
//     setTodos(todos.filter((_, i) => i !== index));
//   };

//   return (
//     <div>
//       <input
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         placeholder="Enter task"
//       />
//       <button onClick={addTodo}>Add</button>

//       <ul>
//         {todos.map((todo, i) => (
//           <li key={i}>
//             {todo} <button onClick={() => deleteTodo(i)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


'use client';
import { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const addTodo = () => {
    if (task.trim() === '') return;

    if (editingIndex !== null) {
      const updated = [...todos];
      updated[editingIndex] = task;
      setTodos(updated);
      setEditingIndex(null);
    } else {
      setTodos([...todos, task]);
    }

    setTask('');
  };

  const deleteTodo = (index) => {
    const filtered = todos.filter((_, i) => i !== index);
    setTodos(filtered);
    setEditingIndex(null);
    setTask('');
  };

  const editTodo = (index) => {
    setTask(todos[index]);
    setEditingIndex(index);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center">Todo List</h2>
      <div className="flex gap-2">
        <input
          className="flex-1 border border-gray-300 rounded px-3 py-2"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={addTodo}
        >
          {editingIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center border p-2 rounded">
            <span>{todo}</span>
            <div className="flex gap-2">
              <button
                onClick={() => editTodo(index)}
                className="text-yellow-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(index)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
