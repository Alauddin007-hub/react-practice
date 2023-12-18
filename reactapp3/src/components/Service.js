import React, { useContext } from 'react'
import { ServiceContext } from './ServiceContext';



const Service = (props) => {
    const {id, product, price, sku, model} = props.data;

    const {cartItems, addToCart,} = useContext(ServiceContext);
    const cartItemCount = cartItems[id];

    // console.log(props.data);
  return (
    <>
   
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                        <div className="bg-light rounded p-5 services-item">
                            <div className="d-flex" style={{alignItems: "center", justifyContent: "center"}}>
                                <div className="mb-4 rounded-circle services-inner-icon">
                                    <i className="fa fa-spider fa-3x text-primary"></i>
                                </div>
                            </div>
                            <h4>{product}</h4>
                            <p className='fs-5'>
                                Price : {price} <br />
                                SKU : {sku} <br />
                                Model : {model} <br />
                            </p>
                            <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisc elit sed.</p>
                            <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3">Learn More</button>
                            <button type="button" className="btn btn-info border-0 rounded-pill px-4 py-3" onClick={() => addToCart(id)}>Add to Cart ({cartItemCount})</button>
                        </div>
                    </div>
               
    </>
  )
}

export default Service