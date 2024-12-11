import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName,setBtnName]=useState(false);
  
            return (
              <header className='flex items-center justify-between px-3 text-2xl'>
                <div>
                  <img
                    src={LOGO_URL}
                    alt=''
                    className='w-20 h-20'
                  />
                </div>
                <div className='flex justify-between list-none w-96'>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                  <Link to="/about">About</Link>
                  </li>
                  <li>
                  <Link to="/about">Contact</Link>
                  </li>
                </div>
                <div>Cart</div>
                <button className="border-box hover:box-content border-2 border-slate-700 px-3 py-3"
                onClick={()=>{
                  setBtnName(!btnName);
                }}>
                 {btnName ? 'Logout' : 'Login'}
                </button>
              </header>
            );
          };
          export default Header;

