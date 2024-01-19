import { useState, useEffect } from 'react';
import { phone_image_url, isLoggedIn } from '../utils/constant';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../utils/constant';

const Products = () => {
    const [productDetails, setProductDetails] = useState([])

    async function getProducts(){
        const response = await fetch("http://localhost:3000/products")
        const data = await response.json();
        setProductDetails(data?.data)
    }

    useEffect(()=>{ getProducts() }, [])

    return(
       <>
       {productDetails.map((product)=>
       <div class="flex flex-row my-6">
        <div class="basis-1/4">
          <img src={phone_image_url} alt={product?.attributes?.product_name + " image"} width="200px" class="mx-6 my-3"/>
        </div>

        <div class="basis-1/2 my-3">
            <p class="font-bold text-2xl">{product?.attributes?.product_name}</p>
            <p class="text-sm">Rating - <span class="bg-green-600 border-green-600 rounded-md px-0.5 py-0.5 text-white">{product?.attributes?.stars}*</span>  Stars</p>
            <p class="text-slate-500">{product?.attributes?.description}</p>
            <p>Color - {product?.attributes?.color}</p>
        </div>

        <div class="basis-1/3 my-6 mx-6">
            <p class="text-2xl text-green-600">₹{product?.attributes?.price} </p>
            <p><span class="text-base line-through text-slate-500"> ₹{product?.attributes?.original_price}</span> <span class="text-base text-green-600"> {product?.attributes?.discount_percentage}% OFF</span></p>

            <span>
                <button class="mt-2 rounded-lg px-3 py-2 font-medium bg-green-600 text-white hover:text-slate-900">ADD TO CART</button>
                <Link to={isLoggedIn ? '/login': '/signup'} class="mt-2 mx-2 rounded-lg px-3 py-2 font-medium bg-green-600 text-white hover:text-slate-900">BUY NOW</Link>
            </span>
        </div>
       </div>
       )}
       </>

    );
}

export default Products;