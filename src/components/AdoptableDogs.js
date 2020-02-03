import React from 'react'
import DogCard from './DogCard'

export const AdoptableDogs = ({ dogs, favDogAction, deleteAdoptableDog, handleSubmit }) => {
    const dogCards = dogs.map(dog => {
        return <DogCard
            key={dog.id}
            dog={dog}
            favDogAction={favDogAction}
            deleteAdoptableDog={deleteAdoptableDog}
            handleSubmit={handleSubmit}
        />
    })
    return (
        <div>
            <h1>Adoptable Dogs</h1>
            {dogCards}
        </div>
    )
}