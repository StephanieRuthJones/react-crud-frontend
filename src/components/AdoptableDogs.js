import React from 'react'
import DogCard from './DogCard'

const AdoptableDogs = (props) => {

    const adoptableDogs = props.adoptableDogs.map(dog => {
        return <DogCard
            dogAction={props.dogAction}
            deleteDog={props.deleteDog}
            key={dog.id}
            dog={dog}
        />
    })

    return (
        <div className="dogs">
            <h1 className="header">Adoptable Dogs</h1>
            <div className="adoptable-dogs">
                {adoptableDogs}
            </div>
        </div>
    )
}

export default AdoptableDogs

