import React from 'react'
import { DogCard } from './DogCard'
export const FavoriteDogs = ({ favoriteDogs, favDogAction }) => {
    const dogCards = favoriteDogs.map(dog => {
        return <DogCard key={dog.id} dog={dog} favDogAction={favDogAction}/>
    })
    return (

        <div>
            <h1>Favorite Dogs</h1>
            {dogCards}
        </div>
    )
}