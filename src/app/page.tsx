import Image from "next/image";


import build1 from "./images/build1.jpg";
import build2 from "./images/build2.jpg";
import build3 from "./images/build3.jpg";
import build4 from "./images/build4.jpg";




export default function Home() {
  return (
    <div>
   

    <div className="flex max-w-4xl mx-auto bg-white  rounded-lg">
        <div className="flex-1 p-6 text-left ">
            <h1 className="text-2xl font-bold mb-9 pt-56">PROJECT</h1>
            <p className="text-gray-700">This is an example of adding an image on the right side of the page using Tailwind CSS.</p>
        </div>
        <div className="flex-shrink-0">
            <Image className="w-770 h-829 object-cover rounded-r-lg" src={build1} alt="building" />
        </div>
    </div>
      




      <section className="bg-gray my-24 w-1170 h-465">

    <div className="max-w-5xl mx-auto flex flex-col md:flex-row bg-gray-100 shadow-lg rounded-lg mt-10">
        
        <div className="flex-1 gap-4">
          
            <Image className="w-270 h-265 object-cover rounded-lg" src={build2} alt="Image 1"/>
            <Image className="w-270 h-140 object-cover rounded-lg pt-6" src={build3} alt="Image 2"/>
            


            
        </div>

        
        <div className="flex-1 p-6 text-left">
            <h1 className="text-3xl text-gray-400 font-bold mb-4">ABOUT</h1>
            <p className="text-gray-700 mb-2">Welcome to our company! We are dedicated to providing the best service possible.</p>
            <p className="text-gray-700 mb-2">Our team is composed of experienced professionals who are passionate about what they do.</p>
            <p className="text-gray-700">We believe in innovation, quality, and commitment to our clients. Thank you for visiting!</p>
        </div>
    </div>




    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-24">
            <div className="flex items-center lg:mb-0 mb-10">
                <div className="">
                    
                    <h2 className="text-gray-900 font-manrope text-4xl font-semibold leading-10 mb-9 lg:text-left text-center">Contact Us</h2>
                    <form action="">
                        <input type="text" className="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8" placeholder="Name"/>
                        <input type="email" className="w-full h-14 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8" placeholder="Email"/>
                        <textarea name="" id="text" className="w-full h-48 shadow-sm resize-none text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none px-4 py-4 mb-8" placeholder="Phone"></textarea>
                    <button className="w-full h-12 text-center text-white text-base font-semibold leading-6 rounded-full bg-gray-600 shadow transition-all duration-700 hover:bg-gray-800">Submit</button>
                    </form>
                </div>
            </div>
            
      </div>
    </div>
</section>
                                            
    
    
    
    </section>
</div>


    
  );
}
