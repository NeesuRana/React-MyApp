import React from 'react';
import ProductCard from './ProductCard';
import Card from './Card';

const Body = () => {
  return (
    <section className='flex flex-col gap-4 px-2 py-2 '>
      <div className='flex gap-3'>
        <input
          type='text'
          class='w-80 px-4 py-2 pr-10 text-sm text-gray-700 bg-white border border-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400'
          placeholder='Search...'
        />
        Search
      </div>
      <div className='flex flex-wrap justify-center gap-4 product-items'>
        <ProductCard 
            title="Clothing Bag"
            description="Your perfect looking bag with all the facilities you need within a bag."
            price="$102.88"
            image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        />
        <ProductCard
         title="Jeans"
         description="Slim-fitting style, contrast raglan long sleeve, three-button henley placket, 
         light weight & soft fabric for breathable and comfortable wearing."
         price= "$22.3"
         image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
        />

        <ProductCard
            title="Mens Cotton Jacket"
            description="Great outerwear jackets for Spring/Autumn/Winter
            , suitable for many occasions, such as working, hiking, camping."
            price= "$555.9"
            image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        />
        <ProductCard
          title="John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"
          description="From our Legends Collection, the Naga was inspired by the mythical water 
          dragon that protects the ocean's pearl.Wear facing inward to be bestowed with love and
           abundance, or outward for protection.."
          price= "$695"
          image="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
        />

        <ProductCard
          title="Solid Gold Petite Micropave"
          description="Satisfaction Guaranteed. Return or exchange any order within 30 days.
          Designed and sold by Hafeez Center in the United States."
          price= "$168"
          image="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
        />
        <Card
        title="Quinn Harley's Blue Diamond Ring"
        description="Shiny and colored gold rings that makes your finger look cool and elegent."
        price= "$50.77"
            image="https://imgs.search.brave.com/-LoG6WXMwDQFp5xnqVBD3IS9eVQGRbRWszqyq0hc0Yw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzM3LzU1LzQy/LzM2MF9GXzM3NTU0/MjI4XzFRUW5YVEs5/ZDRmVUhuS1IxalNO/TkwzMnF2YmM1SWl3/LmpwZw"
        />
        <Card
            title="Ancient Chinese HairClip"
            description="Clip that secure and adorn women’s hair, often featuring intricate designs, patterns, 
            and materials inspired by Chinese heritage."
            price= "$20"
            image="https://imgs.search.brave.com/BGTH8Q1GnHZivWibDgjreMijhoiip6E96MdmdWEXyFE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGlsbGFyb3NlLmNv/bS9jZG4vc2hvcC9m/aWxlcy9GWC00Njky/X1RfMV80MTZ4NjAw/LmpwZz92PTE3MDg4/MDU2OTA"
        />
        <Card
          title="Golden Maria ClawClip"
          description="Elevates your hairstyle game with this Claw Clip, designed for 
          effortless elegance and personalized flair. Gold plated clawclip,
          this statement piece adds a touch of sophistication to any look"
          price= "$445.99"
          image="https://imgs.search.brave.com/PKlxcZuL8dDiuNb42oh1eLg-pDF05NIbRLqP8UQxsMc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sZWxl/dG55LmNvbS9jZG4v/c2hvcC9maWxlcy9M/RUxTUzI0LTE4MDlf/OWU2NzdhNGItMDlj/NS00YzZlLWI0NTkt/NjFmODJkMjZhMDhl/XzgwMHguanBnP3Y9/MTcxMjk1MTc3OQ"
        />

        <Card
          title="Satin Scrunchies"
          description="Elevates your style and hair care routine with this luxurious satin scrunchies.
           Designed for both elegance and comfort, these scrunchies are perfect for all hair types and styles."
          price= "$10.12"
          image="https://imgs.search.brave.com/d-Z5sWmmlySBtcS0Jk8ljJjHAesIAR69NuQvcW86Fek/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/OTc3MzI3OS9waG90/by9tb29ubG91LXNj/cnVuY2hpZXMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUJn/aGNmU2l3bjhPbG5G/dDZHQjdtVS1TWUl4/amZpd1dyZUU3RG15/bndFQTA9"
        />

        <Card
          title="Hairband"
          description="Designed to keep your hair out of your face while adding a touch of style to your outfit.
          These airbands come in a variety of materials, including fabric and metal, ensuring 
          there’s a perfect match for your unique taste."
          price= "$10.11"
          image="https://imgs.search.brave.com/O1SlXyxF0QPsS4IxWE9W9QC1BerY8_ZdKPGggwt4eGE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE4ODMxODk4L3Iv/aWwvNDYxYmE1LzQ2/NTEwODA0NjEvaWxf/NjAweDYwMC40NjUx/MDgwNDYxX29ubjYu/anBn"
        />
     
      </div>
    </section>
  );
};

export default Body;