import { Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/Button';


export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold text-white">AlgoCraft</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#problems" className="text-gray-300 hover:text-purple-400 transition-colors">
              Problems
            </a>
            <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
              Contest
            </a>
            <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
              Discuss
            </a>
            <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
              Interview
            </a>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Sign In
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#problems" className="block text-gray-300 hover:text-purple-400 transition-colors">
              Problems
            </a>
            <a href="#" className="block text-gray-300 hover:text-purple-400 transition-colors">
              Contest
            </a>
            <a href="#" className="block text-gray-300 hover:text-purple-400 transition-colors">
              Discuss
            </a>
            <a href="#" className="block text-gray-300 hover:text-purple-400 transition-colors">
              Interview
            </a>
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full border-purple-500/20 text-gray-300 hover:text-white">
                Sign In
              </Button>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}