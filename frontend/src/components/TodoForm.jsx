import { useState } from 'react';

function TodoForm({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await onAdd(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo..."
        className="todo-input"
      />
      <button type="submit" className="add-button">Add..</button>
    </form>
  );
}

export default TodoForm;
