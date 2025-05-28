const aboutItems = [
    {
      label: 'Project done',
      number: 5
    },
    {
      label: 'Years of experience',
      number: 9
    }
];

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[80ch]">
                    Hello! I am Varsha, a web developer specializing in crafting modern, responsive websites that deliver exceptional user experiences. 
                    With a balance of creativity and technical skill, I transform ideas into clean, 
                    efficient code—building digital solutions that are both visually compelling and highly functional. 
                    Explore my work to see how I bring designs to life with performance and precision.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({ label, number }, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-bold md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                    </div>

                                    <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }

                        <img src="/images/logo.svg" alt="Logo" height={30} width={30} className="ml-auto md:w-[40px] md:h-[40px]" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About