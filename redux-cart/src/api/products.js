import Products from "./products.json";

export function getAll(){
    return Promise.resolve(Products);
}
export function getProductById(id){
    const product = Products.find(item => item.id === id)
    return Promise.resolve(product);
}

export default {
    getAll,
    getProductById
}