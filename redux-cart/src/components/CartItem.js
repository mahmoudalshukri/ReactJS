import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
import { removeFromCart } from "../store/actions/actions";
function CartItem (props){
    const {item, index} = props;
    const {product} = item;
    return(
        <div className="container">
            <div className="card">
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Price {product.price} $</p>
                    <p className="card-text">Quantity : {item.quantity}</p>
                    <p className="card-text">Total : {product.price * item.quantity}</p>
                    <button className="btn btn-danger" onClick={() => props.removeFromCart(index)}>
                    <FontAwesomeIcon icon={faTrash} className="icon"/> Delete
                    </button>
                </div>
            </div>

        </div>
    )
}
export default connect(null, {removeFromCart})(CartItem);