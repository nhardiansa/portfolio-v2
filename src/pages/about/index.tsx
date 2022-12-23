import Image from "next/image";
import Layout from "../../components/Layout";
import saly10 from "../../../public/img/Saly-10.png";
import Skills from "../../components/Skills";

// skills icons
import Html from "../../../public/icons/html-icon.svg";
import Css from "../../../public/icons/css-icon.svg";
import Sass from "../../../public/icons/sass-icon.svg";
import Js from "../../../public/icons/js-icon.svg";
// import Python from "../../public/icons/python-icon.svg";

// Library Framework icons
import Reactjs from "../../../public/icons/react-icon.svg";
import Redux from "../../../public/icons/redux-icon.svg";
import Nextjs from "../../../public/icons/nextjs-icon.svg";
import Nodejs from "../../../public/icons/nodejs-icon.svg";
import Webpack from "../../../public/icons/webpack-icon.svg";
import Bootstrap from "../../../public/icons/bootstrap-icon.svg";
import Tailwind from "../../../public/icons/tailwind-css-icon.svg";

// Other icons
import Git from "../../../public/icons/git-icon.svg";
import Ms from "../../../public/icons/ms-icon.svg";
import Figma from "../../../public/icons/figma-icon.svg";
import MySQL from "../../../public/icons/mysql-logo.svg";

const languanges = [Html, Css, Sass, Js];
const libfw = [Reactjs, Redux, Nextjs, Nodejs, Bootstrap, Tailwind];
const other = [MySQL, Git, Figma, Ms];

export default function About() {
  return (
    <Layout page="About">
      <div className="container px-7 pt-14 pb-4 md:pt-28 md:min-h-[90vh]">
        <div className="explain-section md:flex md:mb-20">
          <div className="saly10 relative w-full h-[40vh] flex-grow md:w-screen md:h-auto">
            <Image src={saly10} layout="fill" objectFit="contain" />
          </div>
          <div className="mt-7 mb-8 md:m-0">
            <h1 className="text-white font-bold text-3xl md:text-5xl text-center md:text-left mb-8 md:mb-4">
              I'm Nabil Hardiansa
              <br />A <span className="text-yellow-500">Fullstack</span>{" "}
              Developer
            </h1>
            {/* <p className="text-white text-sm md:text-base">I have been interested in programming since high school, since then I have been self-taught through tutorials. My field of interest is making websites especially for user interfaces and since then I have studied and practiced my skills with slicing designs from figma regularly and also taking online courses to get some certificates. Although I have a background that is not from IT education, but I still learn programming by myself. And after graduating, I took several Web Developer trainings to increase my skills, so that I became more confident to become a professional.</p> */}
            <p className="text-white text-sm md:text-base md:w-3/4">
              A Fullstack Developer training from Fazztrack bootcamp. Have
              experience in using javascript libraries and frameworks such as
              React JS, React Native, Next JS and Express JS for developing on
              web or mobile application projects individually or in teams. For
              me, when working on a project, clean code is important. Able to
              adapt and can quickly learn new technology.
            </p>
          </div>
        </div>
        <div className="skill-list md:mt-5">
          <h3 className="text-white text-xl md:text-2xl font-bold text-center md:text-left mb-4">
            My Skills
          </h3>
          <div className="cards md:grid grid-cols-3 gap-4">
            <Skills
              key="1"
              icons={languanges}
              title="Programming/Markup Languange"
              className="mb-5 md:mb-0"
            />
            <Skills
              key="2"
              icons={libfw}
              title="Libraries/Framework"
              className="mb-5 md:mb-0"
            />
            <Skills key="3" icons={other} title="Other" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
