
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import ListGroup from './components/ListGroup'
import Form from './components/Form'
import Footer from './components/Footer'

const App = () => {

   const [theme, setTtheme] = useState(false)

 const ChangeTheme =() => {
  if(theme) {
   setTtheme(false)
  }else {
    setTtheme(true)
  }

 }

  const [todos, setTodos] = useState ([

   
 
  ])

     const [edit, setEdit] = useState({
     todo:{},
     isEdit: false
     })


  // Add Todo

const addTodo = (newTodo) => {
  setTodos([newTodo, ...todos])
    
}

//  remove Todo

const removeTodo = (recivedId) => {
setTodos (todos.filter(item => item.id !==recivedId))
  
}


// Edit Todo

  const editTodo = (oldTodo) => {
   setEdit({
    todo:oldTodo,
    isEdit:true
   })
    
  }

// update Todo

const uppdateTodo = (uppdateTodo) => {
  
  setTodos(todos.map(item => {
    if (item.id ===  uppdateTodo.id) {
      return uppdateTodo
    } else {
      return item
    }
  }))

  setEdit({
    todo: {},
    isEdit: false
  })


  
}


  return (
    <>
    <Navbar ChangeTheme={ChangeTheme} theme ={theme}/>
    <div className={theme ? "dark-container" : "container"}>

    <Form addTodo={addTodo} edit={edit} uppdateTodo={uppdateTodo} />
     <ListGroup todos={todos} editTodo={editTodo} removeTodo ={removeTodo}/>   
      <Footer/>  
    </div>
       
    </>
  
  )
}

export default App
