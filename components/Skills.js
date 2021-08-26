import Image from "next/image"

export default function Skills({key, title, icons, className}) {
  return (
    <div key={key} className={className}>
      <h4 className="text-white opacity-[0.57] text-sm mb-2">{title ? title : "Ini bagian judul"}</h4>
      <div className="w-full p-4 pb-0 flex flex-wrap bg-[#FDB827] bg-opacity-[0.05] rounded-lg border border-white border-opacity-[0.35]">
        {
          icons ? 
          icons.map((el, index) =>
            <div className={index !== icons.length-1 ? "mr-4 mb-4" : "mb-4"}>
              <Image src={el} />
            </div>
          ) : 
          ""
        }
      </div>
    </div>
  )
}