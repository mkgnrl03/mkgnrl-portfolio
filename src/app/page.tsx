import Container from "@/components/Container";
import MyButton from "@/components/MyButton";
import SkillCard from "@/components/SkillCard";
import { ChartNoAxesGantt, Linkedin, Mail } from 'lucide-react';

import { skills } from "@/data/skills";
import Image from 'next/image';
import Link from "next/link";
import FeaturesCard from "@/components/FeaturesCard";
import Navigation from "@/components/Navigation";
import { personal, realWorld } from "@/data/projects";


const Page = () => {
  return (
    <>
      <header className="
          sticky top-0 z-40 text-foreground overflow-hidden
          p-5 shadow bg-background
        ">
          <div className="max-w-7xl mx-auto flex gap-6 items-center justify-between">
            <div className="flex gap-3 items-center">
              <Navigation />
              <h1 className="text-xl font-semibold tracking-wide">MKGNRL</h1>
            </div>
             
             <div className="flex items-center justify-center gap-3">

              <nav className="hidden sm:flex gap-3 text-sm tracking-wide">
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Connect</a>
              </nav>
                 
              {/* <button>
                  <Moon 
                    size={18}
                    className="text-primary cursor-pointer hover:scale-105 transition"
                  />
              </button> */}
            </div> 
          </div>
    
      </header>

      <main className="relative z-10"> 
        <section 
          id="home"
          className="min-h-[60vh] sm:h-[70vh] scroll-mt-16 pt-32 sm:pt-0 px-12 sm:px-24"
          >
          <Container className="relative -top-10 flex flex-col gap-3 items-center sm:items-start justify-center">
              <p className="text-md sm:text-xl sm:mb-4">
                <span className="text-primary/70">
                  Hey there!
                </span>
                👋
              </p>
              <h1 className="text-3xl text-nowrap sm:text-4xl font-bold tracking-wide">
                I&apos;m Miko Generale,
              </h1>
              <p className="text-sm sm:text-lg sm:w-xl text-wrap text-center sm:text-start text-primary/70">
                An experienced Software Engineer crafting high-quality web, mobile, and backend solutions.
              </p>
              
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">

                <MyButton type="outline">
                  <a
                    href="#projects"
                    className="flex items-center py-3 px-5 justify-center gap-3"
                  >
                    <ChartNoAxesGantt />
                    <p className="text-nowrap">View My Projects</p>
                  </a>
                </MyButton>

                <MyButton type="solid" className="w-full">
                  <Link
                    href="https://github.com/mikogenerale"
                    target="_blank"
                    className="flex items-center justify-center gap-3 py-3 px-5"
                  >
                    <Image 
                      src="../../svg/github-mark-white.svg"
                      width={25}
                      height={25}
                      alt="github"
                      className="white"
                    />
                    <p className="text-nowrap">Visit My Github</p>
                  </Link>
                </MyButton>
              </div>
          </Container>
   
        </section>
 
        <section id="projects" className="relative h-fit scroll-mt-16 pt-8 md:pt-16 pb-24 bg-primary text-background">
          <Container className="flex flex-col items-center gap-24 sm:gap-36  justify-start relative z-30">   
            
            <div className="min-h-[40vh] w-full flex flex-col gap-12">
              <div className="text-center text-sm px-6 sm:p-0 max-w-xl mx-auto">
                  <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-2">Real-World Projects.</h2>
                  <p className="text-background/80">
                    Projects that showcases my ability to turn business ideas into real products.
                  </p>
              </div>
              <div className="px-6">
                <FeaturesCard projects={realWorld}/>
              </div>
            </div>

             <div className="min-h-[40vh] w-full flex flex-col gap-12">
                <div className="text-center text-sm p-6 sm:p-0 max-w-xl mx-auto">
                  <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-2">Personal Projects.</h2>
                  <p className="text-background/80"> Project I have built to improve my skills and explore new technologies.</p>
                </div>
                <div className="px-6">
                  <FeaturesCard projects={personal}/>
                </div>
            </div>

          </Container>
        </section>

        <section id="skills" className="min-h-[90vh] scroll-mt-0 py-24">
           <Container className="flex flex-col items-center justify-start">
            <div className="text-center text-sm p-6 sm:p-0 sm:w-xl mb-6">
              <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4">Skills & Technologies</h2>
               <p className="">
                 Technologies I work to bring ideas to life.
              </p>
            </div>

            <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {
                skills.map((skill) => <SkillCard key={skill.id} skill={skill} />)
              }
            </div>
          </Container>  
        </section>

      </main> 

      <footer id="contact" className="relative h-fit scroll-mt-0 py-6 sm:pt-16 bg-primary text-secondary">
         <Container className="flex flex-col items-center justify-start gap-3 sm:gap-12">
            <div className="text-center text-sm p-6 sm:p-0 sm:w-xl">
              <h2 className="text-2xl font-bold tracking-wide mb-1">Connect with me.</h2>
              <p className="text-background/80">
                Let&apos;s bring your ideas to life
              </p>
            </div> 

            <div className="flex flex-col gap-1">
              <ul className="mt-6 flex items-center justify-center gap-3 *:flex *:items-center *:justify-center *:gap-1">
                  <li>
                    <Link
                      href="https://github.com/mikogenerale"
                      target="_blank"
                      className="flex items-center justify-center gap-2"
                    >
                      <Image 
                        src="../../svg/github-mark-white.svg"
                        width={30}
                        height={30}
                        alt="github"
                        className="white"
                      />
                    </Link>
                  </li>
                  | 
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/miko-generale-353b40266"
                      target="_blank"
                      className="flex items-center justify-center gap-2"
                    >
                      <Image 
                        src="../../svg/socials/linkedin.svg"
                        width={30}
                        height={30}
                        alt="github"
                        className="white"
                      />
                    </Link>
                  </li>
              </ul>
              <div className="flex items-center justify-center gap-2 mt-4">
                <Image 
                  src="../../svg/socials/email.svg"
                  width={30}
                  height={30}
                  alt="email"
                />
                <p>mikognrl@gmail.com</p>
              </div>

              <div className="mt-16">
                <p className="text-sm text-background/80">© Copyright 2025 - MK. Generale</p>
              </div>
              
            </div>
          </Container>  
        </footer>
    </>
  );
}

export default Page
