"use client"
import { NextPage } from 'next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Logo from '../utils/logo';
import { AnimatePresence } from 'framer-motion';
import Recommendation from "./recommendation";

const Home: NextPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const [isHome, setIsHome] = useState(true); // Toggle between home and recommendation pages

  const handleTogglePage = () => {
    setIsHome(!isHome); // Toggle between pages when clicked
  };

  return (
    <div ref={ref} className="bg-filmore-dark text-filmore-light min-h-screen">
      {/* Header */}
      <header className="fixed w-full z-50 bg-filmore-dark bg-opacity-90 shadow-lg">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Logo />
            <span className="text-md md:text-2xl font-bold">Filmore</span>
          </div>
          <button
            className="bg-filmore-accent p-1 text-xs md:text-md text-filmore-light md:px-4 md:py-2 rounded-full hover:bg-opacity-80 transition duration-300"
            onClick={handleTogglePage}
          >
            {isHome ? 'Get Recommendations' : 'Back to Home'}
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <AnimatePresence>
          {isHome ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Hero Section */}
              <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div 
                  className="absolute inset-0 z-0"
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-filmore-dark"></div>
                  {/* Using img tag with framer-motion */}
                  <motion.img 
                    src="/bladerunner.jpg" 
                    alt="Cinema"
                    className="w-full h-full object-right object-cover md:object-cover"
                    style={{ y }}
                  />
                </motion.div>
                <div className="relative z-10 text-center">
                  <motion.h1 
                    className="text-3xl md:text-6xl font-bold mb-4"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    Discover Your Next Favorite Film
                  </motion.h1>
                  <motion.p 
                    className="md:text-xl mb-8"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  >
                    Curated recommendations from top critics
                  </motion.p>
                  <motion.button 
                    className="bg-filmore-accent text-filmore-light px-8 py-3 rounded-full text-lg hover:bg-opacity-80 transition duration-300"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    onClick={handleTogglePage}
                  >
                    Explore Now
                  </motion.button>
                </div>
              </section>

              {/* Featured Films */}
              <section className="py-20 bg-night text-filmore-dark">
                <div className="container mx-auto px-6">
                  <h2 className="text-filmore-light text-4xl font-bold mb-12 text-center">Featured Films</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Movie Cards */}
                    <motion.div 
                      className="bg-licorice rounded-lg shadow-lg overflow-hidden flex flex-col justify-between"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <img src={`/spiritedaway.jpg`} alt={`Spirited Away (2001)`} className="w-full h-64 object-cover" />
                      <div className="p-6 flex-grow">
                        <h3 className="text-white text-2xl font-bold mb-2">Spirited Away</h3>
                        <p className="text-filmore-gray mb-4 flex-grow">
                          &quot;Movies made for &apos;everybody&apos; are actually made for nobody in particular...&quot; - Roger Ebert
                        </p>
                      </div>
                      <div className="p-6">
                        <button className="text-filmore-accent hover:underline">Read More</button>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-licorice rounded-lg shadow-lg overflow-hidden flex flex-col justify-between"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 2 * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <img src={`/thepianist.jpg`} alt={`The Pianist (2002)`} className="w-full h-64 object-cover" />
                      <div className="p-6 flex-grow">
                        <h3 className="text-white text-2xl font-bold mb-2">The Pianist</h3>
                        <p className="text-filmore-gray mb-4 flex-grow">
                          &quot;The Pianist is an unmissable, essential film from one of the greatest living directors.&quot; - Roger Ebert
                        </p>
                      </div>
                      <div className="p-6">
                        <button className="text-filmore-accent hover:underline">Read More</button>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-licorice rounded-lg shadow-lg overflow-hidden flex flex-col justify-between"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 3 * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <img src={`/shoplifters.jpg`} alt={`Shoplifters (2018)`} className="w-full h-64 object-cover" />
                      <div className="p-6 flex-grow">
                        <h3 className="text-white text-2xl font-bold mb-2">Shoplifters</h3>
                        <p className="text-filmore-gray mb-4 flex-grow">
                          &quot;Rich, satisfying, and deeply intelligent film...&quot; - Peter Bradshaw
                        </p>
                      </div>
                      <div className="p-6">
                        <button className="text-filmore-accent hover:underline">Read More</button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* About Section */}
              <section className="py-20 bg-filmore-dark text-filmore-light">
                <div className="container mx-auto px-6">
                  <motion.h2 
                    className="text-xl md:text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Discover Filmore&apos;s Hidden Gems
                  </motion.h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-lg md:text-2xl font-bold mb-4">About Filmore</h3>
                      <p className="text-xs md:text-lg mb-6">
                        Filmore is your personal guide to the world of cinema. We&apos;re passionate about bringing you handpicked recommendations, focusing on quality over quantity. Our goal is to help you discover movies that resonate with you, including lesser-known masterpieces that might have slipped under your radar.
                      </p>
                      <p className='text-xs md:text-lg'>
                        What sets us apart is our commitment to curating a diverse selection of films, from timeless classics to contemporary hidden gems. Each recommendation comes with insightful commentary to enhance your viewing experience.
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-desert-sand text-filmore-dark p-6 rounded-lg shadow-lg"
                    >
                      <h3 className="text-lg md:text-2xl font-bold mb-4">This Week&apos;s Hidden Gem</h3>
                      <img src="/stillwalking.jpeg" alt="Hidden Gem Movie" className="w-full h-56 object-cover rounded mb-4" />
                      <h4 className="text-lg md:text-xl font-semibold mb-2">Still Walking <span className='text-xs italic font-light'>by Hirokazu Koreeda</span></h4>
                      <p className="text-xs md:text-lg mb-4">
                        A movie about family grappling with unresolved grief and strained relationships, revealing deep emotional undercurrents.
                      </p>
                      <p className="text-xs md:text-lg mb-4">
                      &quot;The film&apos;s ending is at once profound and simple. There&apos;s a wistfulness to this confession, and it rings true... Whether in Japan or France or the United States, the relationships between parents and their adult children are not so very different&quot; - James Berardinelli
                      </p>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="bg-filmore-dark text-filmore-light py-8">
                <div className="container mx-auto px-6 text-center">
                  <p>&copy; 2024 Filmore. All rights reserved.</p>
                </div>
              </footer>
            </motion.div>
          ) : (
            <Recommendation />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Home;
