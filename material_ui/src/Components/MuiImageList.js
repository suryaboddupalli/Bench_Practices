import { ImageList, ImageListItem, Stack } from '@mui/material'
import React from 'react'

const imageData = [{
    "id": 1,
    "image": "http://dummyimage.com/248x100.png/5fa2dd/ffffff"
}, {
    "id": 2,
    "image": "http://dummyimage.com/112x100.png/cc0000/ffffff"
}, {
    "id": 3,
    "image": "http://dummyimage.com/145x100.png/dddddd/000000"
}, {
    "id": 4,
    "image": "http://dummyimage.com/119x100.png/5fa2dd/ffffff"
}, {
    "id": 5,
    "image": "http://dummyimage.com/116x100.png/dddddd/000000"
}, {
    "id": 6,
    "image": "http://dummyimage.com/180x100.png/dddddd/000000"
}, {
    "id": 7,
    "image": "http://dummyimage.com/200x100.png/ff4444/ffffff"
}, {
    "id": 8,
    "image": "http://dummyimage.com/186x100.png/dddddd/000000"
}, {
    "id": 9,
    "image": "http://dummyimage.com/146x100.png/5fa2dd/ffffff"
}, {
    "id": 10,
    "image": "http://dummyimage.com/156x100.png/5fa2dd/ffffff"
}, {
    "id": 11,
    "image": "http://dummyimage.com/132x100.png/ff4444/ffffff"
}, {
    "id": 12,
    "image": "http://dummyimage.com/214x100.png/cc0000/ffffff"
}, {
    "id": 13,
    "image": "http://dummyimage.com/118x100.png/ff4444/ffffff"
}, {
    "id": 14,
    "image": "http://dummyimage.com/151x100.png/cc0000/ffffff"
}, {
    "id": 15,
    "image": "http://dummyimage.com/226x100.png/ff4444/ffffff"
}, {
    "id": 16,
    "image": "http://dummyimage.com/134x100.png/dddddd/000000"
}, {
    "id": 17,
    "image": "http://dummyimage.com/152x100.png/cc0000/ffffff"
}, {
    "id": 18,
    "image": "http://dummyimage.com/232x100.png/cc0000/ffffff"
}, {
    "id": 19,
    "image": "http://dummyimage.com/142x100.png/5fa2dd/ffffff"
}, {
    "id": 20,
    "image": "http://dummyimage.com/242x100.png/ff4444/ffffff"
}, {
    "id": 21,
    "image": "http://dummyimage.com/190x100.png/cc0000/ffffff"
}, {
    "id": 22,
    "image": "http://dummyimage.com/193x100.png/dddddd/000000"
}, {
    "id": 23,
    "image": "http://dummyimage.com/166x100.png/dddddd/000000"
}, {
    "id": 24,
    "image": "http://dummyimage.com/243x100.png/dddddd/000000"
}, {
    "id": 25,
    "image": "http://dummyimage.com/125x100.png/cc0000/ffffff"
}, {
    "id": 26,
    "image": "http://dummyimage.com/186x100.png/cc0000/ffffff"
}, {
    "id": 27,
    "image": "http://dummyimage.com/230x100.png/ff4444/ffffff"
}, {
    "id": 28,
    "image": "http://dummyimage.com/112x100.png/dddddd/000000"
}, {
    "id": 29,
    "image": "http://dummyimage.com/118x100.png/dddddd/000000"
}, {
    "id": 30,
    "image": "http://dummyimage.com/196x100.png/cc0000/ffffff"
}, {
    "id": 31,
    "image": "http://dummyimage.com/186x100.png/dddddd/000000"
}, {
    "id": 32,
    "image": "http://dummyimage.com/237x100.png/5fa2dd/ffffff"
}, {
    "id": 33,
    "image": "http://dummyimage.com/217x100.png/ff4444/ffffff"
}, {
    "id": 34,
    "image": "http://dummyimage.com/244x100.png/5fa2dd/ffffff"
}, {
    "id": 35,
    "image": "http://dummyimage.com/192x100.png/cc0000/ffffff"
}, {
    "id": 36,
    "image": "http://dummyimage.com/179x100.png/ff4444/ffffff"
}, {
    "id": 37,
    "image": "http://dummyimage.com/102x100.png/ff4444/ffffff"
}, {
    "id": 38,
    "image": "http://dummyimage.com/158x100.png/dddddd/000000"
}, {
    "id": 39,
    "image": "http://dummyimage.com/125x100.png/dddddd/000000"
}, {
    "id": 40,
    "image": "http://dummyimage.com/153x100.png/ff4444/ffffff"
}, {
    "id": 41,
    "image": "http://dummyimage.com/201x100.png/cc0000/ffffff"
}, {
    "id": 42,
    "image": "http://dummyimage.com/224x100.png/dddddd/000000"
}, {
    "id": 43,
    "image": "http://dummyimage.com/183x100.png/cc0000/ffffff"
}, {
    "id": 44,
    "image": "http://dummyimage.com/174x100.png/dddddd/000000"
}, {
    "id": 45,
    "image": "http://dummyimage.com/101x100.png/dddddd/000000"
}, {
    "id": 46,
    "image": "http://dummyimage.com/117x100.png/dddddd/000000"
}, {
    "id": 47,
    "image": "http://dummyimage.com/187x100.png/dddddd/000000"
}, {
    "id": 48,
    "image": "http://dummyimage.com/130x100.png/5fa2dd/ffffff"
}, {
    "id": 49,
    "image": "http://dummyimage.com/193x100.png/cc0000/ffffff"
}, {
    "id": 50,
    "image": "http://dummyimage.com/221x100.png/ff4444/ffffff"
}]

function MuiImageList() {
    return (
        <Stack spacing={4}>
            <ImageList sx={{ width: 300, height: 400 }} cols={4}>
                {imageData.map((img => (
                    <ImageListItem key={img.id}>
                        <img src={img.image} alt='image' />
                    </ImageListItem>

                )))}

            </ImageList>
        </Stack>
    )
}

export default MuiImageList