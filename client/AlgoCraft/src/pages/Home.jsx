import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { Badge  } from '../ui/Badge';
import { Button } from '../ui/button';
import { Features } from '../components/Features';


export default function Home() {
  return (
   <>
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 via-gray-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-500/20">
              Trusted by 10M+ developers worldwide
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-gray-900 dark:text-white">Craft Your Path to</span>
            <span className="block bg-linear-to-r from-purple-600 via-indigo-600 to-purple-600 dark:from-purple-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mt-2">
              Coding Excellence
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            Master algorithms and data structures with our curated collection of coding challenges. 
            Build skills that matter, one problem at a time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white group">
              Start Crafting
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-purple-300 dark:border-purple-500/20 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-500/10">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-purple-200 dark:border-purple-500/10"
          >
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">3,000+</div>
              <div className="text-gray-600 dark:text-gray-400">Problems</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">10M+</div>
              <div className="text-gray-600 dark:text-gray-400">Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-400">Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">Support</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    <Features/>
   </>
  );
}