import { Button, Typography } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import ReactToPdf from 'react-to-pdf'

function Template() {
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
                    <div style={{ "textAlign": "center" }}>
                        <Typography variant='h3' className='text-uppercase'>{data.name}</Typography>
                        <Typography paragraph >{data.address}<br />{data.phone}&nbsp;|&nbsp;{data.email}</Typography>
                    </div>
                    <div style={{ "textAlign": "left", "margin": "20px" }} className='text-left m-4 '>
                        <Typography varient='h5' style={{ "background": "blue", "textAlign": "center" }}  >Objective</Typography>
                        <Typography paragraph >{data.objective}</Typography>
                    </div>
                    <div style={{ "textAlign": "left", "margin": "20px" }} className='text-left m-4 ' >
                        <Typography varient='h5' style={{ "background": "blue", "textAlign": "center" }} >Education</Typography>
                        <Typography varient="h6">{data.university}</Typography>
                        <Typography paragraph >{data.course}&nbsp;|&nbsp;{data.score}&nbsp;|&nbsp;{data.year}</Typography>
                    </div>
                    <div style={{ "textAlign": "left", "margin": "20px" }} className='text-left m-4 '>
                        <Typography varient='h5' style={{ "background": "blue", "textAlign": "center" }} >Skill</Typography>
                        <Typography varient="h6">{data.skill}</Typography>
                        <Typography paragraph >Level: {data.level}</Typography>
                    </div>
                    <div style={{ "textAlign": "left", "margin": "20px" }} className='text-left m-4 '>
                        <Typography style={{ "background": "blue", "textAlign": "center" }} ></Typography>
                        <Typography varient="h6">{data.companyName}</Typography>
                        <Typography>{data.jobRole}</Typography>
                        <Typography paragraph >{data.details}</Typography>
                    </div>
                    <div style={{ "textAlign": "left", "margin": "20px" }} className='text-left m-4 '>
                        <Typography varient='h5' style={{ "background": "blue", "textAlign": "center" }} >Projects</Typography>
                        <Typography>{data.title}</Typography>
                        <Typography paragraph >{data.description}</Typography>
                    </div>
                </div>

            ))}
            <ReactToPdf targetRef={ref} filename="download.pdf" >
                {({ toPdf }) => (
                    <Button onClick={toPdf}>Download</Button>
                )}
            </ReactToPdf>

        </div>
    )
}

export default Template;
