import Image from 'next/image';
import saly13 from '../public/img/Saly-13.png';
import saly8 from '../public/img/Saly-8.png';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout page="Home">
      <div className="image1 absolute animate-bounce-short left-[-15%] top-[-1%] md:top-[5%] md:left-[7%] w-9/12 md:w-max">
        <Image src={saly13} alt="ini gambar melayang2" />
      </div>
      <div className="image1 hidden md:block absolute bottom-[0] z-10 right-[10%] ">
        <Image src={saly8} alt="ini gambar tangan" />
      </div>
      <div className="container px-5 flex justify-center items-center h-[75vh]">
        <div className="inter text-white font-black absolute" id="main-section">
          <h1 className="text-center md:leading-tight text-4xl md:text-5xl">Hi there &#128075;<br />I'm <br className="md:hidden" />Nabil Hardiansa</h1>
          <div className="flex justify-center mt-6" id="btn-group">
            <button className="mx-1.5 md:mx-2.5 py-3 md:py-4 px-4 md:px-5 bg-[#FDB827] hover:bg-[#dfa11c] rounded-lg text-black text-sm md:text-base font-semibold">About me</button>
            <button className="mx-1.5 md:mx-2.5 py-3 md:py-4 px-4 md:px-5 bg-[#ffffff33] hover:bg-[#ffffff2c] rounded-lg text-white text-sm md:text-base font-semibold">&#128558; Let's see portfolios</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
