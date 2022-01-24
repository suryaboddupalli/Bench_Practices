import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';

function Compress() {
    const [originalImg, setOriginalImg] = useState()
    const [originalImgFile, setOriginalImgFile] = useState()
    const [fileName, setFileName] = useState()
    const [compressedImg, setCompressedImg] = useState()

    const handleChange = (e) => {
        const image = e.target.files[0]
        setOriginalImg(image)
        setOriginalImgFile(URL.createObjectURL(image))
        setFileName(image.name)
    }

    const handleCompress = (e) => {
        e.preventDefault()

        const option = {
            maxSizeMB: 1,
            maxWidthOrHeigth: 500,
        }

        if (option.maxSizeMB >= originalImg / 1024) {
            alert('image is too small')
        }
        let output;
        imageCompression(originalImg, option).then((x) => {
            output = x;

            const downloadLink = URL.createObjectURL(output);
            setCompressedImg(downloadLink)
        })

    }

    return (
        <div>
            <h3 className='text-center text-uppercase mt-5 color-blue'>Image Compression</h3>
            <div className='row mt-5 '>
                <div className='col-4'>
                    {originalImgFile ? <img src={originalImgFile} width={350} height={300} /> : <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTelVna9__Qwt9GifGdE0R4FmsiTmZjoSE1vnC4LXdgozvqbjiOGufuXrladHL7nXowTt4&usqp=CAU' alt='empty Image'></img>}

                </div>
                <div className='col-4'>
                    <input className='form-control form-control-sm ms-2' type='file' onChange={handleChange} accept='image/*' /><br /><br />
                    {originalImg && <button className='btn btn-primary ms-5' onClick={handleCompress}>Compress</button>}
                    <br /><br />
                    {compressedImg && <button className='btn btn-primary ms-5'>
                        <a className='text-white text-decoration-none' href={compressedImg} download={fileName}>{''} Download</a>
                       </button>}
                </div>
                <div className='col-4 '>
                    {compressedImg ? <img src={compressedImg}  width={350} height={300} /> : <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTelVna9__Qwt9GifGdE0R4FmsiTmZjoSE1vnC4LXdgozvqbjiOGufuXrladHL7nXowTt4&usqp=CAU' alt='empty Image'></img>}
                </div>
            </div>
        </div>
    )
}

export default Compress;
