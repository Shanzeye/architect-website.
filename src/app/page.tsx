import Image from "next/image";


import build1 from "./images/build1.jpg";
import build2 from "./images/build2.jpg";
import build3 from "./images/build3.jpg";
import build4 from "./images/build4.jpg";

import pro1 from "./images/pro1.jpg";
import pro2 from "./images/pro2.jpg";
import pro3 from "./images/pro3.jpg";
import pro4 from "./images/pro4.jpg";
import pro5 from "./images/pro5.jpg";

import contact from "./images/contact.jpg";





export default function Home() {
  return (
    <div>
   

    
    <div className="flex flex-col lg:flex-row max-w-5xl mx-auto bg-white mb-24 rounded-lg">
    
    <div className="flex-1 p-6 text-left">
        <h1 className="text-2xl font-bold mb-9 pt-12 lg:pt-56">PROJECT</h1>
        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    
    <div className="flex-shrink-0 mt-6 lg:mt-0">
        <Image 
            className="w-full lg:w-770 h-auto lg:h-829 object-cover rounded-lg lg:rounded-r-lg" 
            src={build1} 
            alt="building" 
        />
    </div>
</div>




    
      




      




    <section className="bg-gray mb-24 w-1170 h-465 ">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row bg-gray-100 shadow-lg rounded-lg mt-10">
    
    <div className="flex-1 gap-4">
      <Image className="w-270 h-265 object-cover rounded-lg" src={build2} alt="Image 1"/>
      <Image className="w-270 h-140 object-cover rounded-lg pt-6" src={build3} alt="Image 2"/>
    </div>
    
    <div className="flex-1">
      <Image className="w-full h-265 object-cover rounded-lg" src={build4} alt="Image 3" />
    </div>

    <div className="flex-1 p-6 text-left">
      <h1 className="text-3xl text-gray-400 font-bold mb-4">ABOUT</h1>
      <p className="text-gray-700 mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam natus illo in, commodi voluptatum alias optio quos ex suscipit excepturi perspiciatis neque labore fugiat voluptas saepe, obcaecati at esse quidem.</p>
    </div>
  </div>
</section>

    
  

  
    


        <div className="flex-1 p-6 w-1170 h-765 bg-gray-100 max-w-7xl mx-auto flex flex-col">
        <h1 className="text-3xl text-gray-400 pb-6">Our Projects</h1>

        <div className="flex overflow-x-auto space-x-4  justify-center">

        <Image className="w-1/2 h-48" src={pro1} alt="project1"/>
        <Image className="w-1/2 h-48" src={pro2} alt="project2"/>

        
        </div>
        
          

        


          


    <div className="flex overflow-x-auto space-x-4  justify-center mt-4">
        <Image className="w-48 h-36" src={pro3} alt="project3"/>
        <Image className="w-1/2 h-36" src={pro4} alt="project4"/>
        <Image className="w-96 h-36" src={pro5} alt="project5"/>
    </div>


</div>






    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-2">
            <div className="flex items-center lg:mb-0 mb-10">
                <div className="">
                    
                    <h2 className="text-gray-900 font-manrope text-4xl font-semibold leading-10 mb-9 lg:text-left text-center">Contact Us</h2>
                    <form action="">
                        <input type="text" className="w-3/4 h-14 bg-gray-100 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 border border-gray-200 focus:outline-none py-2 px-4 mb-4" placeholder="Name"/>
                        <input type="tel" className="w-3/4 h-14 bg-gray-100 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 border border-gray-200 focus:outline-none py-2 px-4 mb-4" placeholder="Phone Number"/>
                        <input type="email" className="w-3/4 h-14 bg-gray-100 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 border border-gray-200 focus:outline-none py-2 px-4 mb-4" placeholder="E-mail"/>
                        <input type="text" className="w-3/4 h-14 bg-gray-100 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 border border-gray-200 focus:outline-none py-2 px-4 mb-4" placeholder="Interested In"/>
                        
                        <textarea name="" id="text" className="w-3/4 h-48 bg-gray-100 shadow-sm resize-none text-gray-600 placeholder-text-400 text-lg font-normal leading-7 border border-gray-200 focus:outline-none px-4 py-4 mb-4" placeholder="Message"></textarea>
                    <button className="inline-flex py-3 justify-center w-48 h-12 text-center text-white text-base font-semibold leading-6 bg-gray-600 shadow transition-all duration-700 hover:bg-gray-800">SEND EMAIL
                        <img className="ml-4" src="https://img.icons8.com/?size=24&id=elWUEip0B5QT&format=png" alt="arrow"/>
                        


                    </button>
                   
                    </form>
                </div>
            </div>
            
            <div className="flex items-center justify-center">
        <Image className="w-full h-96 mr-60 object-cover rounded-lg shadow-lg" src={contact} alt="pic" width={600} 
          height={400} />
          
      </div>
      </div>
    </div>



    
</section>
                                            
    
    
    
</div>


    
  );
}
