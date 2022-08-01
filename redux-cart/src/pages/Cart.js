import { Component } from "react";
import CartItem from "../components/CartItem";
import ProductsApi from "../api/products";
import {connect} from 'react-redux';
import { clearCart } from "../store/actions/actions";
class Cart extends Component{
    placeOrder = () =>{
        // Send Request To The Server
        // Clear Cart
        this.props.clearCart();
        alert('We recieved your order, and we are working on it.')
    }
    render(){
        return(
            <div>
                <div className="container">
                    <h1>Cart</h1>
                    <div className="row">
                        {this.props.cartItme.map((item, index) => 
                            <div className="col-3" key ={index}>
                            <CartItem item = {item} index = {index}/>
                        </div>
                        )}
                    </div>
                    <h3>Total: {this.props.total} $</h3>
                    <button className="btn btn-primary col-12" onClick={this.placeOrder}>Place Order</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cartItme : state.cart,
        total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
    };
}
const mapDispatchToProps = (dispacth) =>{
    return{
        clearCart: () => dispacth(clearCart()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);