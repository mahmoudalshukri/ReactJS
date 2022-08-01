import { Component } from "react";
import ProductItem from "../components/ProductItem";
import ProductsApi from "../api/products"
class Products extends Component{
    state = {
        products: []
    }
    componentDidMount(){
        ProductsApi.getAll().then(
            data =>{
                this.setState({
                    products : data
                })
            }
        )
    }
    render(){
        return(
            <div>
                <div className="container">
                    <h1>Products Page</h1>
                    <div className="row">
                        {this.state.products.map(product => 
                            <div className="col-3" key ={product.id}>
                            <ProductItem product = {product} />
                        </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
export default Products;