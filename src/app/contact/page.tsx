import Image from "next/image";


import con1 from "../images/con1.jpg";


export default function Contact () {
    return (

        <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-gray-300 text-4xl">CONTACT</h2>
              <h1 className="text-gray-900 mb-4 text-5xl font-bold">Information</h1>
              <h1 className="text-gray-900 mb-4 text-2xl font-bold">Campany Name</h1>
              <h1 className="text-gray-500 mb-4 text-xl font-bold">1234 Sample Street Austin Texas 76401</h1>


              
              <p className="leading-relaxed mb-4">512.333.2222</p>
              
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">sampleemail@gmail.com</span>
              </div>


              <button className="mt-9 inline-flex py-9  justify-center w-48 h-12 text-center text-white text-base font-semibold leading-6 bg-gray-600 shadow transition-all duration-700 hover:bg-gray-800">CONTACT US
                        <img className="ml-4" src="https://img.icons8.com/?size=24&id=elWUEip0B5QT&format=png" alt="arrow"/>
                        


                    </button>
            </div>
            <Image className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={con1} alt="pic"/>
          </div>
        </div>
      </section>
    )
}