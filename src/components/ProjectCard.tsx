import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({id, src, title, desc, object, demo}) {
  return (
    <div id={id} className="card border border-white/[0.35] bg-white/[0.1] rounded-2xl mb-5 md:mb-0 md:grid grid-cols-3">
      <div className="image relative w-full h-36 md:h-full">
        <Image src={src} layout="fill" className="rounded-2xl" objectFit="cover" objectPosition={object ? object : "center"} quality={100} />
      </div>
      <div className="caption text-white p-4 md:pt-5 col-span-2">
        <h3 className="font-bold text-sm mb-2 md:text-lg">{title}</h3>
        <p className="text-xs mb-8 md:text-sm">{desc}</p>
        <Link href={demo} target="_blank">
          <a className="text-xs md:text-sm" target="_blank"> See demo 
            <span className="inline-block ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                fill="none"
                viewBox="0 0 11 11"
                >
                <path
                  fill="#fff"
                  d="M10.322 5.229a.566.566 0 00-.566.566v3.397a.566.566 0 01-.566.567H2.397a.566.566 0 01-.566-.567V2.397a.566.566 0 01.566-.566h3.396a.566.566 0 000-1.132H2.397A1.698 1.698 0 00.698 2.397v6.795a1.7 1.7 0 001.699 1.7H9.19a1.698 1.698 0 001.698-1.7V5.795a.567.567 0 00-.566-.566z"
                ></path>
                <path
                  fill="#fff"
                  d="M8.058 1.831h.894l-3.56 3.556a.566.566 0 00.184.928.566.566 0 00.62-.124l3.56-3.556v.895a.566.566 0 101.132 0V1.265a.566.566 0 00-.566-.566H8.058a.566.566 0 000 1.132z"
                ></path>
              </svg>
            </span>
          </a>
        </Link>
      </div>
    </div>
  )
}