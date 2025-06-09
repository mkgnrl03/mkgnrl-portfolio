import React from 'react';
import Container from './Container';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
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
  );
}

export default Footer;
