import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    // console.log(props);
    const { name, img, seller, price, ratings } = props.product
    const { handleAddToCart } = props
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price:${price}</p>
                <p><small>seller:{seller}</small></p>
                <p><small>Ratings:{ratings} stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;