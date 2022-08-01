import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import {addToCart} from '../store/actions/actions';
function ViewProducts  (props){
    const [quantity, setQuantity] = useState([]);

    let handelQuantity = (event) =>{
        let value = event.target.value;
        if(value < 0)
            return;
        setQuantity(value)
    }
    let addToCart = (product) => {
        props.addToCart(product, quantity);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                <div>
                    <img src={props.product.image} />
                </div>
                </div>
                <div className="col-6">
                    <div>
                    Name: {props.product.name}
                    </div>
                    <div>
                        Price: {props.product.price}
                    </div>
                    <div>
                        Description: {props.product.description}
                    </div>
                    <div>
                        <input type="number" value={quantity} onChange={handelQuantity}/>
                    </div>
                    <div>
                        Total : {quantity * props.product.price}
                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={() => addToCart(props.product)}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapDispatchToProps = (dispacth) =>{
    return{
        addToCart: (productInfo,qunatity) => dispacth(addToCart(productInfo,qunatity)),
    }
}
export default connect(null,mapDispatchToProps)(ViewProducts);
            