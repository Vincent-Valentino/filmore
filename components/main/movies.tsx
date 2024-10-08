import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface Movie {
  id: string;
  title: string;
  subtitle: string;
  background: string;
  criticQuote: string;
  critic: string;
  plotSummary: string;
  essayContent: string;
  conclusion: string;
}

interface MoviesProps {
  movie: Movie;
  expandedCard: string | null;
  onExpand: (id: string) => void;
}

const Movies: React.FC<MoviesProps> = ({ movie, expandedCard, onExpand }) => {
  return (
    <motion.div
      key={movie.id}
      layout
      className="relative overflow-hidden rounded-xl shadow-lg bg-[#1e293b] mb-6"
    >
      <div className="relative w-full h-72 md:h-80">
        <LazyLoadImage
          src={movie.background}
          alt={movie.title}
          effect="blur"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
        <div className="absolute inset-0 p-2 sm:p-6 md:p-8 flex flex-col justify-end">
          <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">{movie.title}</h3>
          <h4 className="text-sm sm:text-base md:text-lg text-gray-300 md:mb-4">{movie.subtitle}</h4>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 italic md:mb-2">{movie.criticQuote}</p>
          <p className="text-xs sm:text-sm md:text-base text-gray-400">- {movie.critic}</p>
          <motion.button
            className="mt-2 md:mt-4 px-2 py-1.5 text-xs md:text-base sm:px-4 sm:py-2 border border-[#ff6b6b] text-[#ff6b6b] rounded-full transition-colors duration-300 flex items-center justify-center sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onExpand(movie.id)}
          >
            {expandedCard === movie.id ? 'Read Less' : 'Read More'}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {expandedCard === movie.id && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 sm:p-6 md:p-8 bg-[#1e293b]"
          >
            <div className="prose prose-invert max-w-none text-xs sm:text-sm md:text-base leading-relaxed">
              <p className="mb-6">{movie.plotSummary}</p>
              <p className="mb-6">{movie.essayContent}</p>
              <p className="mt-6">{movie.conclusion}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Movies;
