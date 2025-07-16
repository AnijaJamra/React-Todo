import React, { useEffect, useState } from 'react'

const Form = ({addTodo, edit, uppdateTodo}) => {
  console.log(edit);
  

  const [text, setText] = useState("")

  const handalSubmit = (e) => {
    e.preventDefault()
    if(edit.isEdit) {
      uppdateTodo({ id: edit.todo.id, text:text})
    } else {
          addTodo({id:crypto.randomUUID(),text:text})

    }

    setText("")
  }


  useEffect(()=>{
    setText(edit.todo.text)
  },[edit])

  return (
     <div className="form-card">
      <form onSubmit={(e) =>handalSubmit(e)}>
        <input value={text} onChange={e => setText(e.target.value)} type="text" placeholder='Enter text here'required/>
        <button className="submit-btn">submit</button>
      </form>
      </div>
  )
}

export default Form
