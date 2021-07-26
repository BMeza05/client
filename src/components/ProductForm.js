import React, {useState} from 'react'
import axios from 'axios';
export default () => {
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [ price, setPrice] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            description,
            price
        })
        .then(res =>console.log(res))
        .catch(err =>console.log(err))
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>title</label><br/>
                <input type="text" onChange={(e)=>settitle(e.target.value)} value=
                {title}/>
            </p>
            <p>
                <label>description</label><br/>
                <input type="text" onChange={(e)=>setdescription(e.target.value)} value=
                {description}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value=
                {price}/>
            </p>
            <input type="submit"/>
        </form>
    )
}