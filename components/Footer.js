import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 px-6 w-full ">
      <div className="container md:grid grid-cols-3 md:items-center">
        <div id="fast-contact" className="flex justify-center md:order-2">

          <Link href="https://github.com/nhardiansa">
            <a target="_blank">
            <div className="github mx-3 md:mx-5 cursor-pointer">
            <svg className="h-4 w-4 md:h-6 md:w-6" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.15354 15.5907C6.15354 15.3958 6.14667 14.8801 6.14274 14.1953C3.9175 14.6908 3.448 13.0955 3.448 13.0955C3.08408 12.1478 2.55957 11.8955 2.55957 11.8955C1.83321 11.3864 2.61458 11.397 2.61458 11.397C3.41755 11.4549 3.83991 12.2425 3.83991 12.2425C4.55349 13.4959 5.71203 13.1343 6.16828 12.9243C6.24096 12.3941 6.44772 12.0325 6.67609 11.8276C4.89973 11.6206 3.03202 10.9166 3.03202 7.77342C3.03202 6.87809 3.34388 6.14592 3.85562 5.57237C3.77361 5.3649 3.49858 4.53101 3.9342 3.40153C3.9342 3.40153 4.60604 3.18097 6.1339 4.24247C6.77186 4.06069 7.45647 3.96904 8.13715 3.96602C8.81636 3.96904 9.50048 4.06069 10.1399 4.24247C11.6668 3.18097 12.3376 3.40153 12.3376 3.40153C12.7742 4.53051 12.4997 5.3644 12.4172 5.57237C12.9299 6.14592 13.2393 6.87809 13.2393 7.77342C13.2393 10.9247 11.3687 11.6181 9.58643 11.821C9.87422 12.0743 10.1296 12.5748 10.1296 13.3403C10.1296 14.437 10.1193 15.3218 10.1193 15.5907C10.1193 15.8102 10.2637 16.065 10.6698 15.9849C13.8459 14.8983 16.1359 11.8255 16.1359 8.20295C16.1359 3.67245 12.5537 0 8.13568 0C3.71811 0 0.135925 3.67245 0.135925 8.20295C0.136416 11.8266 2.42844 14.9013 5.60742 15.9859C6.00719 16.061 6.15354 15.8077 6.15354 15.5907Z" fill="white"/>
            </svg>
          </div>
            </a>
          </Link>
          
          <Link href="https://www.linkedin.com/in/nabil-hardiansa">
            <a target="_blank">
              <div className="linkedin mx-3 md:mx-5 cursor-pointer">
                <svg className="h-4 w-4 md:h-6 md:w-6" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path  d="M13.6328 13.633H11.2621V9.92029C11.2621 9.03498 11.2463 7.89529 10.0291 7.89529C8.79431 7.89529 8.60538 8.85991 8.60538 9.85585V13.6327H6.23475V5.99798H8.51056V7.04135H8.54244C8.77019 6.65192 9.09931 6.33155 9.49474 6.11436C9.89017 5.89718 10.3371 5.79131 10.7879 5.80804C13.1908 5.80804 13.6338 7.38854 13.6338 9.44466L13.6328 13.633V13.633ZM3.55975 4.95441C2.79994 4.95454 2.18387 4.33866 2.18375 3.57885C2.18362 2.81904 2.79944 2.20298 3.55925 2.20285C4.31906 2.20266 4.93512 2.81854 4.93525 3.57835C4.93532 3.94323 4.79044 4.29319 4.53248 4.55125C4.27453 4.80931 3.92463 4.95433 3.55975 4.95441V4.95441ZM4.74512 13.633H2.37194V5.99798H4.74506V13.633L4.74512 13.633ZM14.8146 0.00116449H1.18069C0.536312 -0.00608551 0.007875 0.510102 0 1.15448V14.8453C0.007625 15.49 0.536 16.0067 1.18062 15.9999H14.8146C15.4606 16.0079 15.9911 15.4912 16 14.8453V1.15341C15.9908 0.507789 15.4603 -0.00833551 14.8146 0.000101993" fill="white"/>
                </svg>
              </div>
            </a>
          </Link>

          <Link href="https://t.me/matchaboy02">
            <a target="_blank">
              <div className="telegram mx-3 md:mx-5 cursor-pointer">
                <svg className="h-4 w-4 md:h-6 md:w-6" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 8C0 3.58169 3.58169 0 8 0C12.4183 0 16 3.58169 16 8C16 12.4183 12.4183 16 8 16C3.58169 16 0 12.4183 0 8ZM10.4637 11.8062L11.8927 4.60193L11.8926 4.60206C11.8926 4.12243 11.2331 4.41218 11.2331 4.41218L3.20962 7.55968C3.20962 7.55968 2.82987 7.68956 2.85987 7.92937C2.88987 8.16918 3.19962 8.27906 3.19962 8.27906L5.218 8.95856L5.21805 8.95858C5.22432 8.97914 5.82818 10.9588 5.94737 11.3365C6.06737 11.7162 6.16362 11.7252 6.16362 11.7252L6.16362 11.7254C6.27512 11.7739 6.37712 11.6965 6.37712 11.6965L7.68131 10.5074L9.71437 12.0661C10.2639 12.3059 10.4637 11.8062 10.4637 11.8062Z" fill="white"/>
                </svg>
              </div>
            </a>
          </Link>
          
        </div>
        <div id="sc" className="mt-4 md:mt-0 md:order-3">
          <Link href="https://github.com/nhardiansa/portfolio-v2">
            <a target="_blank">
              <p className="text-center md:text-right text-xs md:text-base cursor-pointer">
                Source code available
              </p>
            </a>
          </Link>
        </div>

        <div id="made-by" className="mt-3 md:mt-0 md:order-1">
          <p className="text-center md:text-left text-xs md:text-base">  
            Made with   <svg className="h-4 w-4 md:h-6 md:w-6 fill-current text-red-600 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg> by Nabil Hardiansa
          </p>
        </div>
      </div>
    </footer>
  )
}