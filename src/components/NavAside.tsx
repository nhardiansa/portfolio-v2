import Link from "next/link"

export default function NavAside({ closeHandler }) {
  return (
    <aside className="fixed w-full h-screen z-50 bg-black bg-opacity-30 backdrop-filter backdrop-blur-md flex justify-center items-center" >
      <ul className="relative text-white flex flex-col h-1/2 w-8/12 bg-black rounded-3xl drop-shadow justify-evenly items-center">
        <li className="inter mx-12 font-bold">
          <Link legacyBehavior href="/">
            Home
          </Link>
        </li>
        <li className="inter mx-12 font-bold">
          <Link legacyBehavior href="/about">
            About
          </Link>
        </li>
        <li className="inter mx-12 font-bold">
          <Link legacyBehavior href="/contact">
            Contact
          </Link>
        </li>
        <li className="inter mx-12 font-bold">
          <Link legacyBehavior href="/portofolio">
            Portofolio
          </Link>
        </li>
        <div className="close absolute right-3 top-3 cursor-pointer" onClick={closeHandler}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </ul>
    </aside>
  )
}