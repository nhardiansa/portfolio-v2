import Image from 'next/image';
import Layout from '../../components/Layout';
import saly10 from '../../public/img/Saly-10.png';
import Skills from '../../components/Skills';

// skills icons
import Html from '../../public/icons/html-icon.svg';
import Css from '../../public/icons/css-icon.svg';
import Sass from '../../public/icons/sass-icon.svg';
import Js from '../../public/icons/js-icon.svg';
import Python from '../../public/icons/python-icon.svg';

// Library Framework icons
import Reactjs from '../../public/icons/react-icon.svg';
import Redux from '../../public/icons/redux-icon.svg';
import Nextjs from '../../public/icons/nextjs-icon.svg';
import Nodejs from '../../public/icons/nodejs-icon.svg';
import Webpack from '../../public/icons/webpack-icon.svg';
import Bootstrap from '../../public/icons/bootstrap-icon.svg';
import Tailwind from '../../public/icons/tailwind-css-icon.svg';

// Other icons
import Git from '../../public/icons/git-icon.svg';
import Ms from '../../public/icons/ms-icon.svg';
import Figma from '../../public/icons/figma-icon.svg';

const languanges = [Html, Css, Sass, Js, Python];
const libfw = [Reactjs, Redux, Nextjs, Nodejs, Webpack, Bootstrap, Tailwind];
const other = [Git, Figma, Ms];

export default function About() {
  return (
    <Layout page="About">
      <div className="container md:pt-11 px-7 ">
        <div className="explain-section md:flex">
          <div className="saly10 relative w-full flex-grow md:w-screen">
            <Image src={saly10} layout="fill" objectFit="contain" />
          </div>
          <div className="mt-7 mb-8 md:m-0">
            <h1 className="text-white font-bold text-3xl md:text-5xl text-center md:text-left mb-8 md:mb-4">
              I'm Nabil Hardiansa<br />
              A <span className="text-yellow-500">Front-End</span> Web Developer
            </h1>
            <p className="text-white text-sm md:text-base">I have been interested in programming since high school, since then I have been self-taught through tutorials. My field of interest is making websites especially for user interfaces and since then I have studied and practiced my skills with slicing designs from figma regularly and also taking online courses to get some certificates. Although I have a background that is not from IT education, but I still learn programming by myself. And after graduating, I took several Web Developer trainings to increase my skills, so that I became more confident to become a professional.</p>
          </div>
        </div>
        <div className="skill-list md:mt-4">
          <h3 className="text-white text-xl md:text-2xl font-bold text-center md:text-left mb-4">My Skills</h3>
          <div className="cards md:grid grid-cols-3 gap-4">
            <Skills icons={languanges} title="Programming/Markup Languange" className="mb-5 md:mb-0" />
            <Skills icons={libfw} title="Libraries/Framework" className="mb-5 md:mb-0" />
            <Skills icons={other} title="Other" />
          </div>
        </div>
      </div>
    </Layout>
  )
}