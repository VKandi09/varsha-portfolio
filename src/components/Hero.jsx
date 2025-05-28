import { ButtonPrimary } from "./Button";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-20 h-20 rounded-lg">
              <img 
                src="/images/about-pic.png"
                width={60}
                height={60}
                alt="VK portrait"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
          Building Intuitive, User-Centered Web Applications
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV" icon="download" target="_blank" href="/resume.pdf"/>
          </div>
        </div>

        <div className="mt-8 md:mt-0 lg:flex items-center justify-between">
          <div className="bg-zinc-400 p-6 rounded-lg shadow-lg w-[500px] h-[250px] font-mono text-md text-zinc-950 whitespace-pre-line leading-loose text-left">
            <TypeAnimation
              sequence={[
                '> Initializing portfolio...\n> Building scalable modern websites...', 2000,
                '> Initializing portfolio...\n> Building scalable modern websites...\n> Connecting to GitHub...', 2000,
                '> Initializing portfolio...\n> Building scalable modern websites...\n> Connecting to GitHub...\n✔ Deployment successful!', 3000,
                '',1000
              ]}
              speed={40}
              repeat={Infinity}
              cursor={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
