import React from 'react'
import { DogCard } from './DogCard'

export const AdoptableDogs = ({ favDogAction, dogs }) => {
    const dogCards = dogs.map(dog => {
        return <DogCard key={dog.id} favDogAction={favDogAction} dog={dog} />
    })
    return (
        <div>
            <h1>AdoptableDogs</h1>
            {dogCards}
        </div>
    )
}