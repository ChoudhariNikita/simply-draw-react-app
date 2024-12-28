import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg'; // Adjust the path if necessary
import brush from '../assets/brush.svg'; // Adjust the path if necessary

const Home = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  return (
    <div className="min-h-screen bg-purple-700">
      {/* Navigation */}
      <nav className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center ">
            <div className="w-10 h-16 rounded-full flex items-center justify-center">
              <img src={logo} alt="SimplyDraw Logo" className="h-8 w-8 mt-1 cursor-pointer"/>
            </div>
            <span className="text-white text-xl font-semibold">SimplyDraw</span>
          </div>
          <div className="space-x-4">
            <button
              // onClick={() => navigate('/login')} // Navigate to Login page
              className="text-white hover:text-purple-200"
            >
              Login
            </button>
            <button
              // onClick={() => navigate('/signup')} // Navigate to Signup page
              className="bg-white text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-100"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Your Creative Journey Begins Here!
          </h1>
          <p className="text-purple-200 text-xl mb-8">
            Draw, design, and express your ideas effortlessly with SimplyDraw.
          </p>
          <button
            onClick={() => navigate('/draw')} // Navigate to Draw page
            className="inline-flex items-center space-x-2 bg-white text-purple-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-100 transition-colors"
          >
            <span>Let's Draw</span>
            <img src={brush} alt="Brush Icon" className="w-5 h-5 mr-2" />
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Feature: Precision Tools */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">🖋️ Precision Tools</h3>
            <p className="text-purple-200">
              Draw precise shapes and lines with our pencil, square, and circle tools.
            </p>
          </div>

          {/* Feature: Rich Colors */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">🎨 Rich Colors</h3>
            <p className="text-purple-200">
              Customize your drawings with a wide variety of colors and adjustable brush sizes.
            </p>
          </div>

          {/* Feature: Undo/Redo Options */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">↩️ Undo/Redo Options</h3>
            <p className="text-purple-200">
              Experiment fearlessly with seamless undo and redo functionality.
            </p>
          </div>

          {/* Feature: Easy Saving */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">💾 Save Your Work</h3>
            <p className="text-purple-200">
              Save your artwork as images instantly in various formats.
            </p>
          </div>

          {/* Feature: Drawing on Canvas */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">🖼️ Drawing Canvas</h3>
            <p className="text-purple-200">
              Enjoy a distraction-free, user-friendly drawing canvas to unleash your creativity.
            </p>
          </div>

          {/* Feature: Clear Canvas */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">🗑️ Clear Canvas</h3>
            <p className="text-purple-200">
              Quickly reset the canvas with our one-click clear feature.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
