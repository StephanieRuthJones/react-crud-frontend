import React from 'react'

const DogSpec = ({ dog, addFavoriteDog, goBackToDogs }) => {
    const addDog = () => {
        addFavoriteDog(dog)
    }

    const goBack = () => {
        goBackToDogs()
    }
    return (
        <div className='dog-card'>
            <img src={dog.image} alt={dog.name} />
            <div className='dog-specs'>
                <h4>{dog.name}</h4>
                <p>{dog.breed}</p>
                <p>{dog.age}</p>
            </div>
            <button onClick={addDog}>Add To Favorites</button>
            <button onClick={goBack}>Go Back</button>
        </div>
    )
}
export default DogSpec