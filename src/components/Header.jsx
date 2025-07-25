import { useState, useEffect, useRef } from 'react'
import Navbar from './Navbar'

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClick(event) {
            if(menuRef.current && !menuRef.current.contains(event.target)) {
                setNavOpen(false);
            }
        }

        if (navOpen){
            document.addEventListener('mousedown', handleClick);
            document.addEventListener('touchstart', handleClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleClick);
            document.removeEventListener('touchstart', handleClick);
        }
    }, [navOpen]);
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
        <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
            <h1>
                <a href="/" className="logo">
                <img 
                    src="/images/logo.svg"
                    width={40}
                    height={40}
                    alt="Varsha Kandi"
                />
                </a>
            </h1>
            <div ref={menuRef} className="relative md:justify-self-center">
                <button
                    className="menu-btn md:hidden"
                    onClick={() => setNavOpen((prev) => !prev)}
                >
                    <span className="material-symbols-rounded">
                        {navOpen ? 'close' : 'menu'}
                    </span>
                </button>
                <Navbar navOpen={navOpen}/>
            </div>
            <a
                href="#contact"
                className="btn btn-secondary max-md:hidden md:justify-self-end transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
                Contact Me
            </a>
        </div>
    </header>
  )
}

export default Header