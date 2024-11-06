import Image from "next/image";


import sam1 from "../images/sam1.jpg";
import sam2 from "../images/sam2.jpg";
import sam3 from "../images/sam3.jpg";




export default function Projects () {
    return (
      


        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">

<div>


<h1 className="text-gray-300 text-4xl">OUR</h1>
<p className="text-5xl font-bold">Projects</p>

</div>
</div>
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap bg-gray-100">
      <Image className="lg:w-1/2 w-full lg:h-auto  object-cover object-center rounded" src={sam1} alt="project"/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-gray-600 text-3xl title-font font-medium mb-1 bg-gray-100 pt-4">Sample Project</h1>
        
        <p className="leading-relaxed bg-gray-100 py-24">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          
          
            
          
        </div>
        <div className="flex">

        <button className="inline-flex py-3 justify-center w-48 h-12 text-center text-white text-base font-semibold leading-6 bg-gray-600 shadow transition-all duration-700 hover:bg-gray-800">SEND EMAIL
                        <img className="ml-4" src="https://img.icons8.com/?size=24&id=elWUEip0B5QT&format=png" alt="arrow"/>
        </button>
          
        </div>
      </div>
    </div>
  </div>





  <div className="container px-5 mx-auto">
    
    <div className="lg:w-4/5 mx-auto flex flex-wrap bg-gray-100">
      <Image className="lg:w-1/2 w-full lg:h-auto  object-cover object-center rounded" src={sam2} alt="project"/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-gray-600 text-3xl title-font font-medium mb-1 bg-gray-100 pt-4">Sample Projec 2</h1>
        
        <p className="leading-relaxed bg-gray-100 py-24">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          
          
            
          
        </div>
        <div className="flex">

        <button className="inline-flex py-3 justify-center w-48 h-12 text-center text-white text-base font-semibold leading-6 bg-gray-600 shadow transition-all duration-700 hover:bg-gray-800">SEND EMAIL
                        <img className="ml-4" src="https://img.icons8.com/?size=24&id=elWUEip0B5QT&format=png" alt="arrow"/>
        </button>
          
        </div>
      </div>
    </div>
  </div>




  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap bg-gray-100">
      <Image className="lg:w-1/2 w-full lg:h-auto  object-cover object-center rounded" src={sam3} alt="project"/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-gray-600 text-3xl title-font font-medium mb-1 bg-gray-100 pt-4">Sample Project 3</h1>
        
        <p className="leading-relaxed bg-gray-100 py-24">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          
          
            
          
        </div>
        <div className="flex">

        <button className="inline-flex py-3 justify-center w-48 h-12 text-center text-white text-base font-semibold leading-6 bg-gray-600 shadow transition-all duration-700 hover:bg-gray-800">SEND EMAIL
                        <img className="ml-4" src="https://img.icons8.com/?size=24&id=elWUEip0B5QT&format=png" alt="arrow"/>
        </button>
          
        </div>
      </div>
    </div>
  </div>




</section>
    )
}