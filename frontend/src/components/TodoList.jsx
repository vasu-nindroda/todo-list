function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return <div className="empty-state">No tasks yet. Add one above!</div>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li 
          key={todo._id} 
          className={`todo-item ${todo.completed ? 'completed' : ''}`}
        >
          <div 
            className="todo-content"
            onClick={() => onToggle(todo._id, todo.completed)}
          >
            <div className="checkbox"></div>
            <span className="todo-text">{todo.title}</span>
          </div>
          <button 
            onClick={() => onDelete(todo._id)} 
            className="btn btn-danger"
            aria-label="Delete task"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18"></path>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
