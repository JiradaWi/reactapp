import React from 'react'

export default function Todo({todo}) {
    return (
        <div>
            <label> {todo.id } {todo.name }</label>
            <input type="checkbox" checked="{todo.complete}"></input>
          
        </div>
    )
}
