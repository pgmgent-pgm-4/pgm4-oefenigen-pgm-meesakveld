import React, { useState } from 'react'

export default function Todos({ TodosArr }) {
    const [todos, setTodos] = useState(TodosArr);

    const handleClickAddTodo = () => {
        const newTodo = {
            id: todos.length,
            title: 'New todo'
        }
        setTodos((prev) => [...prev, newTodo]);
    }
    const handleClickRemoveTodo = ({ id }) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }

    return (
        <div>
            <button onClick={ handleClickAddTodo }>Add todo</button>
            {todos.map((todo) => (
                <div key={ todo.id }>
                    <p>{ todo.title }</p>
                    <button onClick={() => handleClickRemoveTodo({ id: todo.id })}>Remove</button>
                </div>
            ))}
        </div>
    )
}
