import Image from "next/image";

import pic2 from "../images/pic2.jpg";
import pic1 from "../images/pic1.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";
import pic5 from "../images/pic5.jpg";
import pic6 from "../images/pic6.jpg";
import pic7 from "../images/pic7.jpg";
import pic8 from "../images/pic8.jpg";
import pic9 from "../images/pic9.jpg";
import pic10 from "../images/pic10.jpg";



export default function Gallery () {
    return (
           
        
        <section className="text-gray-600 body-font py-24">

     <div className="container px-5 py-24 mx-auto">

     <div>


     <h1 className="text-gray-300 text-4xl">PHOTO</h1>
     <p className="text-5xl font-bold">Gallery</p>

     </div>
     </div>
            
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap">
      <div className="block relative h-48 rounded overflow-hidden lg:w-1/4 md:w-1/2 p-4 w-full">
          <Image className="object-cover object-center w-52 h-64 block" src={pic2} alt="pic"/>
        
      </div>
      <div className="block relative h-48 rounded overflow-hidden lg:w-1/4 md:w-1/2 p-4 w-full">
          <Image className="object-cover object-center w-52 h-64 block" src={pic1} alt="pic"/>

        
      </div>
      <div className="block relative h-48 rounded overflow-hidden lg:w-1/4 md:w-1/2 p-4 w-full">
          <Image className="object-cover object-center w-52 h-64 block" src={pic3} alt="pic"/>

        
      </div>
      <div className="block relative h-48 rounded overflow-hidden lg:w-1/4 md:w-1/2 p-4 w-full">
          <Image className="object-cover object-center w-52 h-64 block" src={pic4} alt="pic"/>

        
      </div>
      <div className="block relative h-48 rounded overflow-hidden lg:w-1/4 md:w-1/2 p-4 w-full">
          <Image className="object-cover object-center w-52 h-64 block" src={pic5} alt="pic"/>

        
      </div>
      <div className="block relative h-48 rounded overflow-hidden lg:w-1/4 md:w-1/2 p-4 w-full">
          <Image className="object-cover object-center w-52 h-64 block" src={pic6} alt="pic"/>

        
      </div>
      <div className="block relative h-48 rounded overflow-hidden lg:w-1/4 md:w-1/2 p-4 w-full">
          <Image className="object-cover object-center w-52 h-64 block" src={pic7} alt="pic"/>

        
      </div>
      <div className="block relative h-48 rounded overflow-hidden lg:w-1/4 md:w-1/2 p-4 w-full">
        
          <Image className="object-cover object-center w-52 h-64 block" src={pic8} alt="pic"/>
        
      </div>

      <div className="block relative h-48 rounded overflow-hidden lg:w-1/4 md:w-1/2 p-4 w-full">
        
        <Image className="object-cover object-center w-52 h-64 block" src={pic9} alt="pic"/>
      
    </div>




    <div className="block relative h-48 rounded overflow-hidden lg:w-1/4 md:w-1/2 p-4 w-full">
        
        <Image className="object-cover object-center w-52 h-64 block" src={pic10} alt="pic"/>
      
    </div>





     

      
    </div>
  </div>



 
  
</section>
    )
}


