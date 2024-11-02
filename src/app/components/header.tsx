import Image from "next/image"

import logo from "../images/logo.jpg";



export default function Header () {
    return (
        <div>
            <header className="text-gray-600 body-font w-1440 h-102">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
      <Image className="size-24"src={logo} alt="pic" />
      
      
    
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-12 hover:text-gray-900">MAIN</a>
      <a className="mr-12 hover:text-gray-900">GALLERY</a>
      <a className="mr-12 hover:text-gray-900">PROJECTS</a>
      <a className="mr-12 hover:text-gray-900">CERTIFICATION</a>
      <a className="mr-12 hover:text-gray-900">CONTACTS</a>

    </nav>
    
  </div>
</header>
        </div>
    )
}