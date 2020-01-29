import React from 'react'
import DogCard from './DogCard'

const FavoriteDogs = (props) => {

    const favoriteDogs = props.favoriteDogs.map(dog => {
        return <DogCard
            dogAction={props.dogAction}
            key={dog.id}
            dog={dog}
            deleteDog={props.deleteDog}
        />
    })

    return (
        <div className="dogs">
            <h1 className="header">FavoriteDogs</h1>
            <div className="adoptable-dogs">
                {favoriteDogs}
            </div>
        </div>
    )
}

export default FavoriteDogs


