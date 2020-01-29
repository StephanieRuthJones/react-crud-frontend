import React from 'react'
import { DogCard } from './DogCard'

export const FavoriteDogs = ({ favDogAction, favoriteDogs }) => {
    const dogCards = favoriteDogs.map(dog => {
        return <DogCard key={dog.id} favDogAction={favDogAction} dog={dog} />
    })
    return (
        <div>
            <h1>Favorite Dogs</h1>
            {dogCards}
        </div>
    )
}
