import Image from 'next/image';
import Layout from '../../components/Layout';
import Saly14 from '../../public/img/Saly-14.png';

export default function Contact() {
  return (
    <Layout page="Contact">
      <div className="container px-7 min-h-[80vh] pt-20 md:min-h-[90vh] md:grid grid-cols-3 items-center">
        <div className="hidden md:block relative w-full min-h-full">
          <Image src={Saly14} layout="fill" objectFit="contain" quality={100} />
        </div>
        <div className="contact col-span-2">
          <h1 className="text-white text-5xl font-bold">You can reach me any time &#128521; </h1>
          <ul className="text-white list-none mt-12">
            <li className="mb-4 bg-github bg-no-repeat bg-left pl-6">Github: <b>nhardiansa</b></li>
            <li className="mb-4 bg-telegram bg-no-repeat bg-left pl-6">Telegram: <b>@matchaboy02</b></li>
            <li className="mb-4 bg-email bg-no-repeat bg-left pl-8">Email: <b>nabilhardiansa02@gmail.com</b></li>
            <li className="mb-4 bg-linkedin bg-no-repeat bg-left pl-6">Linkedin: <b>nabil-hardiansa</b></li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}