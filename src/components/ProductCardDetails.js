import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShimmerCard from './ShimmerCard';

const ProductCardDetails = () => {
    const {id}=useParams();
    const [productDetails,setProductDetails]=useState(null);

    useEffect(()=>{
    async function fetchApiProduct(){
        const data= await fetch ('https://fakestoreapi.com/products/'+id);
        const productsData= await data.json();
        setProductDetails(productsData);
    }
    fetchApiProduct();
      },[id]);
console.log(productDetails);
if(!productDetails)
{
    return <ShimmerCard/>   
}

const {title, price, description, category, image, rating}=productDetails;
  return (
    <div>
    <div>
        <h1>ProductCardDetails</h1>
        <img 
        src={image} 
        alt={title}></img>
        <h2>{title}</h2>
        </div>

        <div>
        <h2>{description}</h2>
        </div>

        <div>
         <h2>{category}</h2>
         </div>

         {/* <div>
         <h2>{rating}</h2>
        </div> */}
       

       <div>
        <h2>{price}</h2>
        </div>
    </div> 
  )
}

export default ProductCardDetails;