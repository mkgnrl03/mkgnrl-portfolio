import Container from "@/components/Container";
import MyButton from "@/components/MyButton";
import SkillCard from "@/components/SkillCard";
import { ChartNoAxesGantt } from 'lucide-react';

import { skills } from "@/data/skills";
import Image from 'next/image';
import Link from "next/link";

const Page = () => {
  return (
    <>
      <header className="
          sticky top-0 bg-gradient-to-r from-red-900 via-red-950 to-background overflow-hidden
          backdrop-blur-lg p-5 shadow-[0_4px_6px_-1px_rgba(255,255,255,0.1),0_2px_4px_-2px_rgba(255,255,255,0.1)]
        ">
          <div className="max-w-7xl mx-auto flex gap-6 items-center justify-between">
             <h1 className="text-xl font-semibold tracking-wide">MKGNRL</h1> 
              <nav className="flex gap-3 text-sm tracking-wide">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
              </nav>
          </div>
    
      </header>
      <main> 

        <section 
          id="home"
          className="
              py-6 px-12 min-h-[75vh] sm:h-[70vh]
              bg-gradient-to-b from-red-900 via-red-950 to-background
            "
          >
          <Container className="flex flex-col gap-3 items-center sm:items-start justify-start pt-16 sm:pt-40">
              <p className="text-md sm:text-xl text-zinc-400 sm:mb-4">Hey there! 👋</p>
              <h1 className="text-3xl text-nowrap sm:text-4xl font-bold tracking-wide">
                I&apos;m Miko Generale,
              </h1>
              <p className="text-md sm:text-lg sm:w-xl text-wrap text-center sm:text-start text-zinc-400">An experienced Software Engineer crafting high-quality web, mobile, and backend solutions.</p>
              
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
                      src="../../svg/github.svg"
                      width={25}
                      height={25}
                      alt="github"
                    />
                    <p className="text-nowrap">Visit My Github</p>
                  </Link>
                </MyButton>
              </div>
          </Container>
   
        </section>
 
        <section id="about" className="h-[90vh] scroll-mt-24">
          <Container className="flex flex-col items-center justify-start">
            <div className="min-h-[40vh]">
            <div className="text-center text-sm p-6 sm:p-0 sm:w-xl mb-6">
              <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4">Featured Projects.</h2>
              <p className="text-zinc-400 w-fit">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque velit fugiat, quo consectetur alias quia iste non tempore architecto veniam.</p>
            </div>

            </div>
            <div className="min-h-[40vh]">
              <div className="text-center text-sm p-6 sm:p-0 sm:w-xl mb-6">
                <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4">About Me.</h2>
                <p className="text-zinc-400 w-fit">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque velit fugiat, quo consectetur alias quia iste non tempore architecto veniam.</p>
              </div>

            </div>
          </Container>
        </section>

        <section id="skills" className="min-h-[90vh] scroll-mt-24">
           <Container className="flex flex-col items-center justify-start">
            <div className="text-center text-sm p-6 sm:p-0 sm:w-xl mb-6">
              <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4">My Skills.</h2>
              <p className="text-zinc-400 w-fit">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque velit fugiat, quo consectetur alias quia iste non tempore architecto veniam.</p>
            </div>

            <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {
                skills.map((skill) => <SkillCard key={skill.id} skill={skill} />)
              }
            </div>
          </Container>  
        </section>


        <section id="projects" className="h-[90vh] scroll-mt-24">
           <Container className="flex flex-col items-center justify-start">
             <div className="text-center text-sm p-6 sm:p-0 sm:w-xl mb-6">
              <h2 className="text-xl sm:text-2xl font-bold tracking-wide mb-4">Projects I have built.</h2>
              <p className="text-zinc-400 w-fit">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque velit fugiat, quo consectetur alias quia iste non tempore architecto veniam.</p>
            </div>

          </Container>  
        </section>
        <section id="contact"  className="h-[60vh] scroll-mt-24">
         <Container className="flex flex-col items-center justify-start">
            <div className="text-center text-sm p-6 sm:p-0 sm:w-xl mb-6">
              <h2 className="text-2xl font-bold tracking-wide mb-4">Let&apos;s build something great together.</h2>
              <p className="text-zinc-400 w-fit">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque velit fugiat, quo consectetur alias quia iste non tempore architecto veniam.</p>
            </div>

          </Container>  
        </section>
      </main> 
    </>
  );
}

export default Page
