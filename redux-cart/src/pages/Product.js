import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {getProductById} from '../api/products'
import ViewProducts from '../components/ViewProducts';
function Product(){
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() =>{
        getProductById(parseInt(id)).then(product => {
            setProduct(product)
        })
    })
    return(
        <div>
            <ViewProducts product = {product} />
        </div>
    )
}
export default Product;