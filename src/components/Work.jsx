import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/filmbase.png',
      title: 'FilmBase – Movie Search App',
      tags: ['React', 'Fetch API', 'Tailwind CSS'],
      projectLink: 'https://filmbaseapp.netlify.app/'
    },
    {
      imgSrc: '/images/quotes-shuffle.png',
      title: 'Random Quote Generator App',
      tags: ['JavaScript', 'React', 'API', 'Frontend', 'Responsive Design'],
      projectLink: 'https://randomquotegen-app.netlify.app/'
    },
    {
      imgSrc: '/images/ebookhub.png',
      title: 'eBook Hub – Digital Book Library',
      tags: ['React', 'JavaScript', 'Frontend', 'Book API'],
      projectLink: 'https://ebookhubapp.netlify.app/'
    },
    {
      imgSrc: '/images/wordnode.png',
      title: 'WordNode – A Blogging Platform',
      tags: ['React', 'Frontend', 'Blog', 'JavaScript'],
      projectLink: 'https://word-node.netlify.app/'
    },
    {
      imgSrc: '/images/todone.png',
      title: 'Todone – Smart To-Do List App',
      tags: ['React', 'Responsive UI', 'JavaScript', 'Frontend', 'Task Management'],
      projectLink: 'https://todone-app.netlify.app/'
    }
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