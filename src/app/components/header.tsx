import Image from "next/image";

import logo from "../images/logo.jpg";
import Link from "next/link";



export default function Header () {
    return (
        <div>
            <header className="text-gray-600 body-font w-1440 h-102">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
      <Image className="size-24"src={logo} alt="pic" />
      
      
    
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-12 hover:text-gray-900">MAIN</Link>
      <Link href="/gallery" className="mr-12 hover:text-gray-900">GALLERY</Link>
      <Link href="/projects" className="mr-12 hover:text-gray-900">PROJECTS</Link>
      <Link href="/certification" className="mr-12 hover:text-gray-900">CERTIFICATION</Link>
      <Link href="/contact" className="mr-12 hover:text-gray-900">CONTACTS</Link>

    </nav>
    
  </div>
</header>
        </div>
    )
}