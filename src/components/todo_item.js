// TodoItem.js
import React from 'react';

export default function TodoItem(props) {
  const { name, id, onDelete, onToggle, isCompleted } = props;

  const handleCheckboxChange = () => {
    onToggle(id); // Notify parent component to toggle completion
  };

  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <button className="btn btn-sm btn-light" onClick={handleCheckboxChange}>
            {isCompleted ? (
              <i className="bi bi-check-square text-success"></i>
            ) : (
              <i className="bi bi-square"></i>
            )}
          </button>
          <span className={isCompleted ? 'ms-2 text-decoration-line-through' : 'ms-2'}>{name}</span>
        </div>
        <div>
          <button className="btn btn-sm btn-danger" onClick={() => onDelete(id)}>
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </li>
    </ul>
  );
}
