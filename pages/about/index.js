import Image from 'next/image';
import Layout from '../../components/Layout';
import saly10 from '../../public/img/Saly-10.png';

// skills logo
import html from '../../public/icons/html-icon.svg';
import css from '../../public/icons/css-icon.svg';
import sass from '../../public/icons/sass-icon.svg';
import js from '../../public/icons/js-icon.svg';
import python from '../../public/icons/python-icon.svg';

export default function About() {
  return (
    <Layout page="About">
      <div className="container px-7">
        <div className="explain-section">
          <div className="saly10">
            <Image src={saly10} layout="responsive" quality={20} />
          </div>
          <h1 className="text-white font-bold text-3xl text-center mt-7 md:m-0 mb-8">
            I'm Nabil Hardiansa<br />
            A <span className="text-yellow-500">Front-End</span> Web Developer
          </h1>
          <p className="text-white text-sm mb-8">I have been interested in programming since high school, since then I have been self-taught through tutorials. My field of interest is making websites especially for user interfaces and since then I have studied and practiced my skills with slicing designs from figma regularly and also taking online courses to get some certificates. Although I have a background that is not from IT education, but I still learn programming by myself. And after graduating, I took several Web Developer trainings to increase my skills, so that I became more confident to become a professional.</p>
        </div>
        <div className="skill-list">
          <h3 className="text-white text-xl font-bold text-center md:text-left mb-4">My Skills</h3>
          <div className="cards">
            <div className="languange">
              <h4 className="text-white opacity-[0.57] text-sm mb-2">Programming/Markup Languange</h4>
              <div className="icons">
                <div className="w-full p-4 flex bg-[#FDB827] bg-opacity-[0.05] rounded-lg border border-white border-opacity-[0.35]">
                  <div>
                    <Image src={html} />
                  </div>
                  <div className="mx-3">
                    <Image src={css} />
                  </div>
                  <div className="mx-3">
                    <Image src={sass} />
                  </div>
                  <div className="mx-3">
                    <Image src={js} />
                  </div>
                  <div>
                    <Image src={python} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}