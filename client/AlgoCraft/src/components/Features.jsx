import { Code, Trophy, Users, BookOpen, Target, Zap } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';

const features = [
  {
    icon: Code,
    title: 'Diverse Problem Set',
    description: 'Access 3000+ coding problems across algorithms, data structures, databases, and more.',
  },
  {
    icon: Trophy,
    title: 'Weekly Contests',
    description: 'Compete in weekly coding contests and climb the global leaderboard.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Join discussions, share solutions, and learn from millions of developers.',
  },
  {
    icon: BookOpen,
    title: 'Interview Prep',
    description: 'Prepare for technical interviews with company-specific question sets.',
  },
  {
    icon: Target,
    title: 'Personalized Learning',
    description: 'Track your progress and get personalized recommendations for improvement.',
  },
  {
    icon: Zap,
    title: 'Real-time Execution',
    description: 'Run and test your code instantly with our powerful online judge system.',
  },
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Everything You Need to Excel
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive tools and resources designed to accelerate your coding journey
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-purple-500/20 hover:border-purple-400 dark:hover:border-purple-500/40 transition-colors backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-400">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}