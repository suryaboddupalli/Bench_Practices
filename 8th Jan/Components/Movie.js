import React from 'react'
import Download from './Download'

function Movie({ movie }) {
    return (
        <div>
            <div class="card" style="width: 18rem;">
                <img src={movie.poster} class="card-img-top" alt="img" />
                <div class="card-body">
                    <h5 class="card-title">{movie.Title}</h5>
                    <p class="card-text">{movie.Year}</p>
                    <Download poster={movie.poster}/>
                </div>
            </div>
        </div>
    )
}

export default Movie