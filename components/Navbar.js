import Link from 'next/link';
import { useState } from 'react';
import NavAside from './NavAside';

const Navbar = ({page}) => {
  
  const [showNavSide, setShowNavSide] = useState(false)

  const showNavHandler = () => {
    setShowNavSide(true)
  }

  const closeNavHandler = () => {
    setShowNavSide(false)
  }

  return (
    <>
    <nav className="bg-black py-3 px-6 md:z-10 fixed z-10 w-screen">
      <div className="container grid grid-cols-3 items-center">
        <svg onClick={showNavHandler} className="h-6 w-6 fill-current text-white md:hidden cursor-pointer absolute z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <h1 className="text-white font-bold text-center md:hidden text-sm col-start-2 col-end-3">{page}</h1>
      </div>
      <ul className="hidden text-white container md:flex justify-center">
        <li className="inter mx-12 font-bold">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="inter mx-12 font-bold">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className="inter mx-12 font-bold">
          <Link href="/portofolio">
            <a>Portofolio</a>
          </Link>
        </li>
        <li className="inter mx-12 font-bold">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
    {showNavSide ? <NavAside closeHandler={closeNavHandler} /> : ""}
    </>
  );
};

export default Navbar;