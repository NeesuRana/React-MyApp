import React, {useState,useEffect} from 'react';
import ProductCard from './ProductCard';
import { ProductItems } from '../utils/mockData';
import Categories from './Categories';
import ShimmerCard from './ShimmerCard';
import { Link } from 'react-router-dom';
// import Card from './Card';

const Body = () => {
const [filteredItems,setfilteredItems] = useState([]);
const [allProducts,setAllProducts] = useState([]);
const [searchText,setSearchText]=useState('');

useEffect(()=>{
  fetchApiProduct();
},[]);

async function fetchApiProduct(){
  const data= await fetch ('https://fakestoreapi.com/products');
  const productsData= await data.json();
  setfilteredItems(productsData);
  setAllProducts(productsData);
}

function handleRatingFilter(minRate,maxRate){
  setfilteredItems(
   allProducts.filter((product)=>
      product.rating.rate>=minRate && product.rating.rate<maxRate));
}

function fetchAllProducts(){
  setfilteredItems(allProducts);
}

function handleSearchFilter()
{
  const searchedProducts=allProducts.filter((product)=>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );
  setfilteredItems(searchedProducts);
}

if(filteredItems.length===0){
  return (
    <div className='flex flex-wrap justify-center gap-4 p-4'>
      {Array(8)
      .fill()
      .map((_, index)=>(
        <ShimmerCard key={index} />
      ))
      }
    </div>
  );
}

  return (
    <section className='flex flex-col gap-4 px-2 py-2 '>
      <div className='flex gap-3'>
        <input
          type='text'
          className='w-80 px-4 py-2 pr-10 text-sm text-gray-700 bg-white border border-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400'
          placeholder='Search the products...'
          value={searchText}
          onChange={(e)=>
            setSearchText(e.target.value)
          }
        />
        <button onClick={handleSearchFilter}>Search</button>
      </div>
      <div className='flex flex-wrap gap-2'>
        <button
          className='px-4 py-2 font semibold text-white transition-colors duration-200 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg'
          onClick={fetchAllProducts}
        >
          All Products
        </button>

        <button
          className='px-4 py-2 font semibold text-white transition-colors duration-200 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg'
          onClick={()=>{
            handleRatingFilter(1,2);
          }}
        >
          Rating 1-2 ⭐
        </button>

        <button
          className='px-4 py-2 font semibold text-white transition-colors duration-200 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg'
          onClick={()=>{
            handleRatingFilter(2,3);
          }}
        >
          Rating 2-3 ⭐
        </button>

        <button
          className='px-4 py-2 font semibold text-white transition-colors duration-200 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg'
          onClick={()=>{
            handleRatingFilter(3,4);
          }}
        >
          Rating 3-4 ⭐
        </button>

        <button
          className='px-4 py-2 font semibold text-white transition-colors duration-200 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg'
          onClick={()=>{
            handleRatingFilter(4,5);
          }}
        >
          Rating 4-5 ⭐
        </button>
      </div>

      {/* <button className='px-4 py-2 font-semibold text-white transition-colors
        duration-200 bg-blue-600 rounded-lg shadow-md w-60 hover:bg-blue-700 hover:shadow-lg'
         onClick={handleTopRatedProducts}>
        Top Rated Products
        </button> */}
        <Categories />


      <div className='flex flex-wrap justify-center gap-4 product-items'>
        <h2 className='w-full text-xl font-semibold text-gray-800 text-center mb-4'>
          Total Items:{filteredItems.length}
        </h2>
          {
            filteredItems.map((product)=>(
              <Link to={'/product/' + product.id}>
              <ProductCard productItem={product} key={product.id}/>
              </Link>
            ))
            // ProductItems.map((product)=> <ProductCard productItem={product} />)
          }
      </div>
    </section>
  );
};

export default Body;