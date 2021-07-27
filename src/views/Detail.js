import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const [product, setproduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/:id" + props.id)
            .then(res => setproduct(res.data))
    }, [])
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
        </div>
    )
}

