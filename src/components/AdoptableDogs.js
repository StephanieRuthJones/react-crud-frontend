import React from 'react'
import { DogCard } from './DogCard'

export const AdoptableDogs = ({ dogs, favDogAction }) => {
    const dogCards = dogs.map(dog => {
        return <DogCard key={dog.id} dog={dog} favDogAction={favDogAction} />
    })
    return (
        <div>
            <h1>Adoptable Dogs</h1>
            {dogCards}
        </div>
    )
}