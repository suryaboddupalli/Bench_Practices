import React, { useEffect, useState, useRef } from 'react';
import ReactToPdf from 'react-to-pdf'

function Format() {
    const [data, setData] = useState([])
    const ref = useRef()

    useEffect(() => {
        const storageData = JSON.parse(localStorage.getItem('data'))
        setData([storageData])
    }, [])
    console.log(data);
    return (
        <div ref={ref}>
            {data.map((data) => (
                <div>
                    <div className='text-center'>
                        <h3 className='text-uppercase'>{data.name}</h3>
                        <p>{data.address}<br />{data.phone}&nbsp;|&nbsp;{data.email}</p>
                    </div>
                    <div className='text-left m-4 '>
                        <h5 className='bg-secondary p-1 text-center' >Objective</h5>
                        <p>{data.objective}</p>
                    </div>
                    <div className='text-left m-4 ' >
                        <h5 className='bg-secondary p-1 text-center'>Education</h5>
                        <h6>{data.university}</h6>
                        <p>{data.course}&nbsp;|&nbsp;{data.score}&nbsp;|&nbsp;{data.year}</p>
                    </div>
                    <div className='text-left m-4 '>
                        <h5 className='bg-secondary p-1 text-center'>Skill</h5>
                        <li>{data.skill}</li>
                        <p>Level: {data.level}</p>
                    </div>
                    <div className='text-left m-4 '>
                        <h5 className='bg-secondary text-center'></h5>
                        <h6>{data.companyName}</h6>
                        <span>{data.jobRole}</span>
                        <p>{data.details}</p>
                    </div>
                    <div className='text-left m-4 '>
                        <h5 className='bg-secondary p-1 text-center'>Projects</h5>
                        <h6>{data.title}</h6>
                        <p>{data.description}</p>
                    </div>
                </div>

            ))}
            <ReactToPdf targetRef={ref} filename="download.pdf" >
                {({ toPdf }) => (
                    <button className='btn btn-primary' onClick={toPdf}>Download</button>
                )}
            </ReactToPdf>

        </div>
    )
}

export default Format;
