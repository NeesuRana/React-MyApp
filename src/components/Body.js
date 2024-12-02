import React from 'react';
import ProductCard from './ProductCard';
import Card from './Card';

const Body = () => {
  const ProductItems=[{
"id": 1,
"title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
"price": 109.95,
"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
"category": "men's clothing",
"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
"rating": {
"rate": 3.9,
"count": 120
}
},
{
"id": 2,
"title": "Mens Casual Premium Slim Fit T-Shirts ",
"price": 22.3,
"description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
"category": "men's clothing",
"image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
"rating": {
"rate": 4.1,
"count": 259
}
},
{
"id": 4,
"title": "Mens Cotton Jacket",
"price": 55.99,
"description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
"category": "men's clothing",
"image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
"rating": {
"rate": 4.7,
"count": 500
}
  }]

  const CardItems=[{
    "id":0,
    "title":"Quinn Harley's Blue Diamond Ring",
    "description" :"Shiny and colored gold rings that makes your finger look cool and elegent.",
    "price": "$50.77",
    "image":"https://imgs.search.brave.com/-LoG6WXMwDQFp5xnqVBD3IS9eVQGRbRWszqyq0hc0Yw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzM3LzU1LzQy/LzM2MF9GXzM3NTU0/MjI4XzFRUW5YVEs5/ZDRmVUhuS1IxalNO/TkwzMnF2YmM1SWl3/LmpwZw"
  }]

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
        {/* <ProductCard productItem={ProductItems[0]}/>
        <ProductCard productItem={ProductItems[1]}/>
        <ProductCard productItem={ProductItems[2]}/> */}

          {
            // ProductItems.map((product)=>(
            //   <ProductCard productItem={product}/>
            // ))

            ProductItems.map((product)=> <ProductCard productItem={product}/>)
          }

        <Card cardItem={CardItems[0]}
        />
        {/* <Card
            title="Ancient Chinese HairClip"
            description="Clip that secure and adorn women’s hair, often featuring intricate designs, patterns, 
            and materials inspired by Chinese heritage."
            price= "$20"
            image="https://imgs.search.brave.com/Uh7zZ12mb6HneXy24cqvjXPSPftBtHcBK4cM9HEPFec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFZZXhIcFlJaUwu/anBn"
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
          title="Satin Scrunchie"
          description="Elevates your style and hair care routine with this luxurious satin scrunchie.
           Designed for both elegance and comfort, these scrunchies are perfect for all hair types and styles."
          price= "$10.12"
          image="https://imgs.search.brave.com/WEgDUs9Az_3QXk2a4iZ6y6rN9oTtx0BGe0bc9KmY0Ck/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bXlraXRzY2guY29t/L2Nkbi9zaG9wL2Zp/bGVzLzY2MDYyLU1p/Y2tleU1pbm5pZXhL/aXRzY2gtUmVjeWNs/ZWRGYWJyaWNSaGlu/ZXN0b25lU2NydW5j/aGllLTFwYy1DcmVh/bS1wa2ctMTI4MHgx/MjgwcHguanBnP3Y9/MTcyMTg2MTQxNCZ3/aWR0aD03MDA
          "
        />

        <Card
          title="Hairband"
          description="Designed to keep your hair out of your face while adding a touch of style to your outfit.
          These airbands come in a variety of materials, including fabric and metal, ensuring 
          there’s a perfect match for your unique taste."
          price= "$10.11"
          image="https://imgs.search.brave.com/Y8hlQ5ZXFP2835D83-_qmJwoa6HSONkQyNwcxJuAgO8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/anVua2JyYW5kcy5j/b20vY2RuL3Nob3Av/cHJvZHVjdHMvUEVP/TllQQVJUWV9CQkwt/UzIuanBnP3Y9MTU3/MTc3NDA2NyZ3aWR0/aD0xMjgw"
        />
      */}
      </div>
    </section>
  );
};

export default Body;