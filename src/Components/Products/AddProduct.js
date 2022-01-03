import React,{useState} from 'react' 
import axios from 'axios'

function AddProduct(){
    const [product, setProduct] = useState({
        Id: '',
        Title: '',
        Image: '',
        Price: '',
        Description: '',
        color: '',
        Memory: '',
        Processor: '',
        RearCamera: '',
        FrontCamera: '',
        Display: '',
        Battery: ''
    })

    const changeHandler= (e)=>{
        setProduct({ ...product, [e.target.name]: e.target.value })
    }


    const handleSubmit=(e)=>{
        axios.post('http:localhost:8000/products/add',product)
        .then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        <form onSubmit={handleSubmit}>
        <h3>Products Data</h3>
        <label>Id</label>
        <input type=' text' name='Id'  onChange={changeHandler} />
        <label>Title</label>
        <input type='text' name='Title' onChange={changeHandler} />
        <label>Price</label>
        <input type='text' name='Price' onChange={changeHandler} />
        <label>Description</label>
        <input type='text' name='Description' onChange={changeHandler} />
        <label>Image</label>
        <input type='text' name='Image' onChange={changeHandler} />
        <label>color</label>
        <input type='text' name='color' onChange={changeHandler} />
        <label>Memory</label>
        <input type='text' name='Memory' onChange={changeHandler} />
        <label>Processor</label>
        <input type='text' name='Processor' onChange={changeHandler} />
        <label>RearCamera</label>
        <input type='text' name='RearCamera' onChange={changeHandler} />
        <label>FrontCamera</label>
        <input type='text' name='FrontCamera' onChange={changeHandler} />
        <label>Display</label>
        <input type='text' name='Display' onChange={changeHandler} />
        <label>Battery</label>
        <input type='text' name='Battery' onChange={changeHandler} />
        <button>Add</button>
        </form>
    )
}

export default AddProduct