import React from 'react'

export default function Dream({title, content, id, deleteDream}){

const handleClick = (event)=> deleteDream(id)
    return(
        <li className="dream">
            <h2>{title}"</h2>
            <h3>{content}"</h3>
            <button onClick={handleClick} className="delete-button"> Erase this memory </button>
        </li>
    )
}