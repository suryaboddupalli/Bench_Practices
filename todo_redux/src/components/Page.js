import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'


function Page() {
    return (
        <div>
            <h2>Todo Application</h2>
            <TodoInput />
            <TodoList />
        </div>
    )
}

export default Page
