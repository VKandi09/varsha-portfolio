import { ButtonPrimary } from "./Button";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="home" className="pt-24 sm:pt-28 lg:pt-36 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 lg:gap-10 items-center">
        <div className="w-full">
          <div className="flex items-center gap-3">
            <figure className="img-box w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden">
              <img 
                src="/images/about-pic.png"
                width={60}
                height={60}
                alt="VK portrait"
                className="w-full h-full img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-5 mb-8 lg:mb-10 max-w-[20ch]">
          Building Intuitive, User-Centered Web Applications
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV" icon="download" target="_blank" href="/resume.pdf"/>
          </div>
        </div>

        <div className="w-full mt-10 lg:mt-0 flex justify-center">
          <div className="bg-slate-900 p-5 sm:p-6 sm:pt-10 rounded-lg shadow-lg w-full max-w-xl min-h-[200px] sm:min-h-[250px] font-mono text-base sm:text-lg text-zinc-200 whitespace-pre-line leading-loose text-left">
            <TypeAnimation
              sequence={[
                '> Initializing portfolio...', 2000,
                '> Initializing portfolio...\n> Building scalable modern websites...', 2000,
                '> Initializing portfolio...\n> Building scalable modern websites...\n> Connecting to GitHub...', 2000,
                '> Initializing portfolio...\n> Building scalable modern websites...\n> Connecting to GitHub...\n✔ Deployment successful!', 3000,
                '',1000
              ]}
              speed={30}
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
