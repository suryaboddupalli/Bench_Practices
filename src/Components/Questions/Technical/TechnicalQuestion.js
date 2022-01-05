import React from 'react'

function AptitudeQuestion({ data }) {

    return (
        <div class="row">
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{data.title}</h5>
                    </div>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="card">
                    <div class="card-body">
                        <textarea class="form-control" rows="6"></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AptitudeQuestion