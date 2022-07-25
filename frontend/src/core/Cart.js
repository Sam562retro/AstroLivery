import React, {useState, useEffect} from 'react'
import Base from './Base'
import { loadCart } from './helper/cartHelper'
import Card from './Card'

function Cart() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(loadCart())
    }, [])

    const loadAllProducts =() => {
         return(
             <div>
                {products.map((product, index) => (
                    <Card key={index} product={product} addToCart={false} removeFromCart={true} />
                ))}
             </div>
             )       
    }

    const getTotal = () => {
        var total = 0;
        for(var i = 0; i <= (products.length - 1); i++){
            total += products[i].price;     
        }

        return total
    }

    const loadCheckOut = () => {
        return(
            <div className="card bg-success text-white">
                <div className="card-body">
                    <p className="btn btn-success rounded btn-sm px-4 d-flex">Items   : {products.length}</p>
                    <p className="btn btn-success rounded  btn-sm px-4 d-flex">Payment : ${getTotal()}</p>
                    <button className="btn btn-warning rounded  btn-sm px-4 text-center w-100" disabled>Buy All</button>
                </div>
            </div>
        )
    }

    return (
        <Base title="Your Cart" description="See what you want and what you don't want order and give a bulk order." >
            <div className="row text-center">
                <div className="col-md-8">
                    {loadAllProducts()}
                </div>
                <div className="col-md-4">
                    {loadCheckOut()}
                </div>
            </div>
        </Base>
    )
}

export default Cart
