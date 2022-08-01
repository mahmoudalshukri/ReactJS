import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";
import "./CartIcon.css"
import {NavLink} from 'react-router-dom';
function CartIcon (props){
    return(
    <div  id="cartIcon">
        <NavLink to="/cart">
            <FontAwesomeIcon icon={faCartArrowDown} className="icon"/>
            <span className="badge bg-danger">{props.totalQuantity}</span>
        </NavLink>
    </div>
    )
}
const mapStateToProps = (state) => {
    return {
        totalQuantity: state.cart.reduce((total, item) => total + parseInt(item.quantity), 0),
    };
}
export default connect(mapStateToProps)(CartIcon);


