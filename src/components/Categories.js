import React,{useState} from "react";
import { CategoryItems } from "../utils/mockData";

const Categories = () => {
  return (
    <section>
    <div className="text-l font-medium text-black drop-shadow-md rounded-md" >
     
    {
      CategoryItems.map((category)=>(
        <button key={category}> {category} </button>
      ))
    }
    </div>
    </section>
  )
}

export default Categories;

