import Link from 'next/link';

const Navbar = ({page}) => {
  return (
    <nav className="bg-black py-3 px-6 md:z-10 fixed z-10 w-screen">
      <div className="container grid grid-cols-3 items-center">
        <svg className="h-6 w-6 fill-current text-white md:hidden cursor-pointer absolute z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <h1 className="text-white font-bold text-center md:hidden text-sm col-start-2 col-end-3">{page}</h1>
      </div>
      <ul className="hidden text-white container md:flex justify-center">
        <li className="inter mx-12 font-bold cursor-pointer">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="inter mx-12 font-bold cursor-pointer">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className="inter mx-12 font-bold cursor-pointer">
          <a>Contact</a>
        </li>
        <li className="inter mx-12 font-bold cursor-pointer">
          <a>Portofolio</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;