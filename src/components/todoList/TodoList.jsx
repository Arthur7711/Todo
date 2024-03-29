import React from 'react'
import Todo from '../todo/Todo'


export default function TodoList({todos}) {
    
    return (        
            todos.map(todo=>{
                return <Todo todo={todo} key={todo.id} />
            })        
    )
}
