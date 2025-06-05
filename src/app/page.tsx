import Container from "@/components/Container";
import MyButton from "@/components/MyButton";
import SkillCard from "@/components/SkillCard";
import { ChartNoAxesGantt } from 'lucide-react';

import { skills } from "@/data/skills";
import Image from 'next/image';
import Link from "next/link";
import FeaturesCard from "@/components/FeaturesCard";
import Navigation from "@/components/Navigation";


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
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
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
              <p className="text-md sm:text-xl text-zinc-600 sm:mb-4">Hey there! 👋</p>
              <h1 className="text-3xl text-nowrap sm:text-4xl font-bold tracking-wide">
                I&apos;m Miko Generale,
              </h1>
              <p className="text-sm sm:text-lg sm:w-xl text-wrap text-center sm:text-start text-zinc-500">An experienced Software Engineer crafting high-quality web, mobile, and backend solutions.</p>
              
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
 
        <section id="about" className="relative h-fit scroll-mt-16 pt-8 md:pt-16 pb-16 bg-primary text-background">
          <Container className="flex flex-col items-center gap-24  justify-start relative z-30">
            <div className="min-h-[40vh] w-full flex flex-col gap-12">
              <div className="text-center text-sm p-6 sm:p-0 max-w-xl mx-auto">
                  <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-2">Real-World Projects.</h2>
                  <p className="text-zinc-400 w-fit">The following projects showcase my ability to solve real business problems, collaborate within teams, and deliver results in fast-paced environments.</p>
              </div>
              <div className="px-6">
                <FeaturesCard />
              </div>
            </div>
           

            <div className="min-h-[40vh]">
              <div className="text-center text-md p-6 sm:p-0 mb-6">
                <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4">About Me.</h2>
                <div className="flex flex-col gap-4 font-normal max-w-2xl text-start">
                  <p>I&apos;m an experienced Software Engineer with a proven track record of delivering high-quality applications across web, mobile, and server-side platforms. I&apos;ve contributed to three major projects — two client-based and one internal — playing a key role in their successful delivery.</p>
                  <p>I also have experience building desktop applications, including a custom Pisonet Management System I use for my small business.</p>
                  <p>I&apos;m passionate about building clean, efficient, and user-friendly software. I enjoy solving real-world problems with technology and continuously strive to learn and grow in the ever-evolving tech landscape.</p>
                </div>
              </div>
         

            </div>
          </Container>
        </section>

        <section id="skills" className="min-h-[90vh] scroll-mt-0 py-24">
           <Container className="flex flex-col items-center justify-start">
            <div className="text-center text-sm p-6 sm:p-0 sm:w-xl mb-6">
              <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4">My Skills.</h2>
               <p className="text-zinc-400 w-fit">
                These are the tools and technologies I use to design, develop, and deliver reliable, high-quality applications across the stack.
              </p>
            </div>

            <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {
                skills.map((skill) => <SkillCard key={skill.id} skill={skill} />)
              }
            </div>
          </Container>  
        </section>


        <section id="projects" className="min-h-[75vh] scroll-mt-0 py-24">
           <Container className="flex flex-col items-center justify-start">
             <div className="text-center text-sm p-6 sm:p-0 sm:w-xl mb-6">
              <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4">Projects I have built.</h2>
               <p className="text-zinc-400 w-fit">
                  A selection of projects I&apos;ve built to solve real problems — from internal tools and client-facing apps to open-source contributions.
               </p>
            </div>

          </Container>  
        </section>
      </main> 

      <footer id="contact" className="h-[75vh] scroll-mt-0 py-24 bg-primary text-secondary">
         <Container className="flex flex-col items-center justify-start">
            <div className="text-center text-sm p-6 sm:p-0 sm:w-xl mb-6">
              <h2 className="text-2xl font-bold tracking-wide mb-4">Let&apos;s build something great together.</h2>
              <p className="text-zinc-400 w-fit">
                Whether you have a project in mind or just want to connect, feel free to reach out. I&apos;m always open to new opportunities and collaborations.
              </p>
            </div>

          </Container>  
        </footer>
    </>
  );
}

export default Page
