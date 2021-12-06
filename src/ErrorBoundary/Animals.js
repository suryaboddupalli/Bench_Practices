import React from 'react'

function Animals() {
    if (animalName === Apple) {
        throw new Error('not an animal ')
    }
    return (
        <div>
            {animalName}
        </div>
    )
}

export default Animals