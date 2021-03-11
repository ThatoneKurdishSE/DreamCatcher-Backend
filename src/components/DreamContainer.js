import React from 'react'
import Dream from './Dream'

export default function DreamContainer({dreams, deleteDream}){

    const displayDreams = () => {
        return dreams.map(dream => <Dream deleteDream={deleteDream} key={dream.id} {...dream}/>)
    }
    return(
        <ul className="dream-list">
            {displayDreams()}
        </ul>
    )
}