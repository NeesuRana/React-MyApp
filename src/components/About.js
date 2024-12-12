import React from 'react'
import { FAST_DELIVERY_LOGO, HUMAN, LOGO_URL } from '../utils/constants';

const About = () => {
  return (
   
      // <div className='bg-fixed background-image:src{LOGO_URL}'>
         <div className="bg-gray-50">         
         <div className="relative bg-sky-700 text-white py-20 container mx-auto px-6 text-center">     
              <h1 className="text-4xl md:text-6xl font-bold">About Our Shop</h1> 
             <p className="mt-4 text-lg md:text-xl"> 
               Your one-stop shop for quality products at unbeatable prices. 
             </p>  
            </div> 
            {/* </div> */}

         
    
    <section className=" bg-rose-200 container mx-auto px-6 py-16">
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className=" text-3xl font-bold text-orange-800 hover:text-blue-800">Who We Are?</h2>
        <p className="mt-4 text-slate-900 leading-relaxed">
          Here's Your Answer😉
          <br/>
          We are super online store passionate about bringing you the best products in the market. Our online store
          offers a wide range of items, from electronics to fashion, all carefully curated for
          quality and affordability.
        </p>
        <p className="mt-4 text-slate-950 leading-relaxed">
          With a commitment to excellent customer service, we aim to make your shopping
          experience seamless and enjoyable.
        </p>
      </div>
      <div>
        <img
          src={LOGO_URL}
          alt="Online Shop"
          className="rounded-full shadow-xl"
        />
      </div>
    </div>
  </section>


  <section className="bg-cyan-200 py-16">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-semibold text-gray-800">Our Services</h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Service Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-indigo-500 mb-4">
            <img
              className="w-15 h-12 mx-auto rounded-lg shadow-xl"
              src={FAST_DELIVERY_LOGO}
            >
            </img>
          </div>
          <h3 className="text-lg font-medium text-gray-800">Fast Delivery</h3>
          <p className="mt-2 text-gray-600">
            Get your orders delivered to your doorstep in record time.
          </p>
        </div>
        {/* Add more service cards here */}
      </div>
    </div>
  </section>

  
  <section className="container mx-auto px-6 py-16">
    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Meet Our Team</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {/* Team Member */}
      <div className="text-center">
        <img
          src={HUMAN}
          alt="Team Member"
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />
        <h3 className="text-lg font-medium text-gray-800">Tsukishima Kei</h3>
        <p className="text-sm text-gray-500">Founder</p>
      </div>
      {/* Add more team members here */}
    </div>
  </section>

 
  <section className="bg-indigo-400 text-white py-16">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold">Start Shopping with Us Today!</h2>
      <p className="mt-4 text-lg">Experience quality, convenience, and great deals.</p>
      <button className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100">
        Shop Now
      </button>
    </div>
  </section>

  </div>
                  // <div>About</div>
  )
}

export default About;