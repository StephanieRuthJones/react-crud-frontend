import React from 'react'
import { DogCard } from './DogCard'

export const FavoriteDogs = ({ favoriteDogs }) => {
    const dogCards = favoriteDogs.map(dog => {
        return <DogCard key={dog.id} dog={dog} />
    })
    return (
        <div>
            <h1>Favorite Dogs</h1>
            {dogCards}
        </div>
    )
}
