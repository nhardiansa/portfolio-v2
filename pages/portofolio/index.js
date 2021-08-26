import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';

// import Image assets here
import OneMinuteQuiz from '../../public/img/portofolio/one_minute_quiz.png';
import Pensiunanku from '../../public/img/portofolio/pensiunanku.png';

// edit detail here
const projects = [
  {
    image: OneMinuteQuiz,
    title: "OneMinuteQuiz",
    description: "OneMinuteQuiz is a game website where someone challenged to answer ten questions by category chosen one in a minute.",
    demo: "https://one-minute-quiz.netlify.app",
    focus: "center" //use object-position in css
  },
  {
    image: Pensiunanku,
    title: "Pensiunanku",
    description: "Pensiunanku is a website that used to estimate big cost which must invested when will enter age or time his retirement.",
    demo: "https://pensiunanku.netlify.app",
    focus: "top left"
  },
];

export default function Portofolio() {
  return (
    <Layout page="Portofolio">
      <div className="container pt-16 px-7 min-h-[80vh] md:min-h-[90vh] md:px-24 md:pt-20">
        <h1 className="font-black text-white text-center text-3xl md:text-4xl">What I've done &#x1F60B;</h1>
        <div className="cards mt-12 md:grid grid-cols-2 gap-8">
          {
            projects.map((el, index) => 
              <ProjectCard
                id={index}
                src={el.image}
                title={el.title}
                desc={el.description}
                object={el.focus}
                demo={el.demo}
              />
            )
          }
        </div>
      </div>
    </Layout>
  )
}