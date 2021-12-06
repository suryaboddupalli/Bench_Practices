import React from 'react'
import Fragments from 'react'

function Column() {
    // return(
    //     <React.fragments>
    //         <h1>name</h1>
    //         <p>Apple</p>
    //     </React.fragments>
    // )

    // return(
    //     <>
    //     <h1>name</h1>
    //     <p>apple</p>
    //     </>
    // )

    return (
        <Fragments>
            <h1>name</h1>
            <p>Apple</p>
        </Fragments>
    )

}


export default Column