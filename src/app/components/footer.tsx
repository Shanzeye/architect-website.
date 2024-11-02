import Image from "next/image"

import logo from "../images/logo.jpg";


export default function Footer () {
    return (
        <div>
            
        
            <footer className="text-gray-600 body-font bg-gray-600 w-1440 h-102">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
      <Image className="size-24"src={logo} alt="pic" />

      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-white text-base justify-center">
      <a className="mr-12 hover:text-white">MAIN</a>
      <a className="mr-12 hover:text-white">GALLERY</a>
      <a className="mr-12 hover:text-white">PROJECTS</a>
      <a className="mr-12 hover:text-white">CERTIFICATION</a>
      <a className="mr-12 hover:text-white">CONTACTS</a>

    </nav>
</div>
    </footer>
        </div>
    )
}