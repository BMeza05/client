import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router'

export default props => {
    const { removeFromDOm } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product' + productId)
        .then(res => {
            removeFromDOm(productId)
        })
    }
    
    return (
        <div>
            {props.product.map((product, idx)=>{
                return <p key={idx}>
                    <link to={"/" + product._id}>
                        {product.title}, {product.description}, {product.price}
                    </link>
                    <button onclick={(e) =>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                        </p>
            })}
        </div>
    )
}