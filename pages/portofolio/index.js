import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';

// Image assets
import PotofolioImages from './PotofolioImages';

export default function Portofolio() {
  return (
    <Layout page="Portofolio">
      <div className="container pt-16 px-7 min-h-[80vh] md:min-h-[90vh] md:px-24 md:pt-20">
        <h1 className="font-black text-white text-center text-3xl md:text-4xl">What I've done &#x1F60B;</h1>
        <div className="cards mt-12 md:grid grid-cols-2 gap-8">
          {
            PotofolioImages.map((el, index) => 
              <ProjectCard
                id={index}
                src={el.image}
                title={el.title}
                desc={el.description}
                object={el.object}
                demo={el.demo}
              />
            )
          }
        </div>
      </div>
    </Layout>
  )
}