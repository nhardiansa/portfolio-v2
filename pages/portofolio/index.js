import Layout from "../../components/Layout";
import ProjectCard from "../../components/ProjectCard";

// import Image assets here
import OneMinuteQuiz from "../../public/img/portofolio/one_minute_quiz.png";
import Pensiunanku from "../../public/img/portofolio/pensiunanku.png";
import EdieHomepage from "../../public/img/portofolio/edie_homepage.png";
import MovieGame from "../../public/img/portofolio/movie_game.png";
import RecipeBlog from "../../public/img/portofolio/recipe_blog.png";

// edit detail here
const projects = [
  {
    image: "https://i.ibb.co/7pWK5ZS/oto-rent.png",
    title: "Oto Rent (Web)",
    description:
      "Oto Rent is a platform for renting cars and other vehicles. It is a web application that allows users to rent vehicles with a wide range of options.",
    demo: "https://oto-rent.netlify.app",
    focus: "left", //use object-position in css
  },
  {
    image: "https://i.ibb.co/DWJwsjP/Screenshot-1652456091.png",
    title: "Oto Rent (Mobile)",
    description:
      "Oto Rent is a platform for renting cars and other vehicles. It is a mobile application that allows users to rent vehicles with a wide range of options.",
    demo: "bit.ly/OtoRentAPK",
    focus: "top", //use object-position in css
  },
  {
    image: OneMinuteQuiz,
    title: "OneMinuteQuiz",
    description:
      "OneMinuteQuiz is a game website where someone challenged to answer ten questions by category chosen one in a minute.",
    demo: "https://one-minute-quiz.netlify.app",
    focus: "center", //use object-position in css
  },
  {
    image: Pensiunanku,
    title: "Pensiunanku",
    description:
      "Pensiunanku is a website that used to estimate big cost which must invested when will enter age or time his retirement.",
    demo: "https://pensiunanku.netlify.app",
    focus: "top left",
  },
  {
    image: EdieHomepage,
    title: "Landing Page Edie",
    description:
      "This landing page is a website to introduce a team that provides web services with many benefits.",
    demo: "https://devchallenge-edie-homepage.netlify.app",
    focus: "top left",
  },
  {
    image: MovieGame,
    title: "Movie and Game Web App",
    description:
      "This website is a learning result of ReactJS in Sanbercode bootcamp which has implemented various general concepts in React such as the use of context, authentication, components, etc.",
    demo: "https://tugas-sanber-nabil.netlify.app",
    focus: "top left",
  },
  {
    image: RecipeBlog,
    title: "Recipe Blog",
    description:
      "This website is the result of the slicing challenge from devchallenge.",
    demo: "https://nab-recipe-blog.netlify.app",
    focus: "top center",
  },
];

export default function Portofolio() {
  return (
    <Layout page="Portofolio">
      <div className="container pt-16 px-7 min-h-[80vh] md:min-h-[90vh] md:px-24 md:py-20">
        <h1 className="font-black text-white text-center text-3xl md:text-4xl">
          What I've done &#x1F60B;
        </h1>
        <div className="cards mt-12 md:grid grid-cols-2 gap-8">
          {projects.map((el, index) => (
            <ProjectCard
              id={index}
              src={el.image}
              title={el.title}
              desc={el.description}
              object={el.focus}
              demo={el.demo}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
