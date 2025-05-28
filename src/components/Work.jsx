import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/filmbase.png',
      title: 'FilmBase – Movie Search App',
      tags: ['React', 'Fetch API', 'Tailwind CSS'],
      projectLink: 'https://filmbase-vk.netlify.app/'
    },
    {
      imgSrc: '/images/quotes-shuffle.png',
      title: 'Random Quote Generator App',
      tags: ['JavaScript', 'React', 'API', 'Frontend', 'Responsive Design'],
      projectLink: 'https://random-quote-vk.netlify.app/'
    },
    {
      imgSrc: '/images/ebookhub.png',
      title: 'EbookHub – Digital Book Library',
      tags: ['React', 'JavaScript', 'Frontend', 'Book API'],
      projectLink: 'https://ebookhub-vk.netlify.app/'
    },
];

const Work = () => {
  return (
    <section id="work" className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
              Portfolio Highlights
            </h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-full reveal-up">
              Here’s a glimpse of the work I’ve done recently — blending design, code, and creativity. Want more examples? Let’s <a href="#contact" className="text-sky-500">connect.</a>
            </p>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {
                    works.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <ProjectCard 
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes="reveal-up"
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Work