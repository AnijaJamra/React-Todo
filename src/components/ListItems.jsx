import React from 'react'


const ListItems = ({todo, editTodo ,removeTodo}) => {
  return (
    <li className="listgroup-items">
         <p>id :{todo.id} </p>
         <h2>{todo.text}</h2>
         <span>
          <div className="edit-btn" onClick={() => editTodo(todo)}>Edit</div>
          <div className="delete-btn" onClick={ () => removeTodo(todo.id)}>delete</div>
         </span>
        </li>
  )
}

export default ListItems
