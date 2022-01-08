import React from 'react'

function Download({poster}) {

    const download = (url) => {
        fetch(url).then(res=>{
            res.arrayBuffer().then(function(buffer){
                const url =window.URL.createObjectURL(new Blob([buffer]));
                const link = document.createElement('a');
                link.href=url;
                link.setAttribute("download","image.jpg");
                document.body.appendChild(link)
                link.click();
            })
        }).catch((err)=>{
            console.log(err)
        })

    }
    return (
        <button onClick={()=>download(poster)} class="btn btn-primary">Download</button>
    )
}

export default Download