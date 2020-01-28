import React from 'react'
import { DogCard } from './DogCard'

export const AdoptableDogs = ({ dogs }) => {
    const dogCards = dogs.map(dog => {
        return <DogCard key={dog.id} dog={dog} />
    })
    return (
        <div>
            <h1>AdoptableDogs</h1>
            {dogCards}
        </div>
    )
}