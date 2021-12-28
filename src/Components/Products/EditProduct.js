import React, { useState,useEffect } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'

function Products() {
    const [data, setData] = useState([])
    const [showModel, setShowModel] = useState(false)

    useEffect(() => {
        axios.get('http:localhost:8000/products/details')
            .then((res) => {
                setData(res.data)
            }).catch((err) => {
                console.log(err)
            })
    })

    const handleClick = () => {
        setShowModel({ showModel: !showModel })
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>color</th>
                    <th>Memory</th>
                    <th>Processor</th>
                    <th>FrontCamera</th>
                    <th>RearCamera</th>
                    <th>Display</th>
                    <th>Battery</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((product) => console.log(product) &&
                    <tr key={product.Id}>
                        <td>{product.Title}</td>
                        <td>{product.Price}</td>
                        <td>{product.Image}</td>
                        <td>{product.Description}</td>
                        <td>{product.color}</td>
                        <td>{product.Memory}</td>
                        <td>{product.Processor}</td>
                        <td>{product.FrontCamera}</td>
                        <td>{product.RarCamera}</td>
                        <td>{product.Display}</td>
                        <td>{product.Battery}</td>
                        <td><button onClick={handleClick}>Edit</button></td>
                        <Model open={showModel} close={handleClick}>
                            <EditProduct product={product} />
                        </Model>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

function EditProduct(props) {
    return (
        <form >
            <h3>Products Data</h3>
            <label>Id</label>
            <input type=' text' name='Id' value={props.product.Id} />
            <label>Title</label>
            <input type='text' name='Title' value={props.product.Title} />
            <label>Price</label>
            <input type='text' name='Price' value={props.product.Price} />
            <label>Description</label>
            <input type='text' name='Description' value={props.product.Description} />
            <label>Image</label>
            <input type='text' name='Image' value={props.product.Image} />
            <label>color</label>
            <input type='text' name='color' value={props.product.color} />
            <label>Memory</label>
            <input type='text' name='Memory' value={props.product.Memory} />
            <label>Processor</label>
            <input type='text' name='Processor' value={props.product.Processor} />
            <label>RearCamera</label>
            <input type='text' name='RearCamera' value={props.product.RearCamera} />
            <label>FrontCamera</label>
            <input type='text' name='FrontCamera' value={props.product.FrontCamera} />
            <label>Display</label>
            <input type='text' name='Display' value={props.product.Display} />
            <label>Battery</label>
            <input type='text' name='Battery' value={props.product.Battery} />
            <button>Save</button>
        </form>

    )
}

function Model(props) {

    return (
        props.open ? ReactDOM.createPortal(
            <div>
                {props.children}
            </div>, document.body) : null)
}

export default Products