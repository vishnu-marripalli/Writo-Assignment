import React from 'react'
import { useState,useEffect } from 'react';
;


function Header(){
  const [isFixed,setisFixed] =useState(false)

  useEffect(() => {
    const handleScroll = () =>{

          const scrollThreshold = 100;
          if (window.scrollY >scrollThreshold ) {
            setisFixed(true)
          }else{
            setisFixed(false)
          }
    }
    window.addEventListener("scroll",handleScroll)
    return () => {
      window.removeEventListener("scroll",handleScroll)
    }

  }, [])
  
    return(
        
      <>
       

        <div className={`w-full h-auto
              ${isFixed ? "fixed top-0 z-40 transition-all duration-500":""}`}>
            <div className='w-full h-auto bg-white flex justify-center items-center md:px-16 border-b-2 border-primary py-4 px-4'>
                <h1 className="font-bold text-3xl">Writo Assignment</h1>
            </div>
        </div>
      
      </>

    );
}

export default Header;