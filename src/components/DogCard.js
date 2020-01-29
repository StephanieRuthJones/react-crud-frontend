import React from 'react'

const DogCard = (props) => {
    const { dog } = props

    const handleClick = () => {
        props.dogAction(dog)
    }

    const deleteDog = () => {
        props.deleteDog(dog)
    }

    return (
        <div className="dog-card"
            onClick={handleClick}
        >
            <img src={dog.image} alt={dog.name} />
            <div className="dog-specs">
                <h4><b>{dog.name}</b></h4>
                <p>Breed: {dog.breed}</p>
                <p>Age: {dog.age}</p>
                <button onClick={deleteDog}>DELETE</button>
            </div>
        </div>

    )
}

export default DogCard