 import React from 'react'
 import image from "../image/download.jpg"
 import image2 from "../image/images.jpg"
 export const Content = () => {
     return (
         <>
         <div className="menu-card">
           <img src={image} alt="egg" className="h-full rounded mb-20 shodow" />
           <div className="flex flex-col justify-center items-center">
               <h2 className="text-2xl mb-2"> Egg muffin</h2>
               <p className="mb-2" > Cripy delel</p>
               <span > $16</span>
               </div>  
         </div>

<div className="flex flex-col justify-center 
items-center bg-white h-screen font-mono py-40">
  <img src={image2} alt="egg" className="h-full rounded mb-20 shodow" />
  <div className="flex flex-col justify-center items-center">
      <h2 className="text-2xl mb-2"> Egg muffin</h2>
      <p className="mb-2" > Cripy delel</p>
      <span > $16</span>
      </div>  
</div>
</>

     )
 }
 