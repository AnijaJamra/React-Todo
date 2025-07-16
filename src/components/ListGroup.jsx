import React from 'react'
import ListItems from './ListItems'

const ListGroup = ({todos, editTodo, removeTodo}) => {
  return (
     <ul className="list-group">
       {
        todos.map((todo) => {
            return  <ListItems editTodo={editTodo} removeTodo={removeTodo} key={todo.id} todo={todo}/>
        })
       }
       

      </ul>
  )
}

export default ListGroup
