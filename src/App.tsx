import React, { useState } from 'react';
import { Search, Film, Heart, Clock, Menu, X, ChevronRight, Star, Download } from 'lucide-react';

// Mock data for featured and recommended movies
const featuredMovie = {
  title: "Dune: Part Two",
  image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80&w=2070",
  rating: 94,
  price: 19.99
};

const recommendedMovies = [
  {
    id: 1,
    title: "Inception",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=1470",
    rating: 92,
    price: 9.99
  },
  {
    id: 2,
    title: "The Matrix",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1625",
    rating: 88,
    price: 7.99
  },
  {
    id: 3,
    title: "Interstellar",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=1513",
    rating: 89,
    price: 12.99
  }
];

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Film className="text-blue-500" size={32} />
            <h1 className="text-xl font-bold">Steam Movies</h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-blue-400">Store</a>
            <a href="#" className="hover:text-blue-400">Library</a>
            <a href="#" className="hover:text-blue-400">Community</a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search movies..."
                className="bg-gray-700 px-4 py-1 rounded text-sm w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-1.5 text-gray-400" size={16} />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Featured Movie */}
        <div className="relative rounded-lg overflow-hidden mb-8">
          <img 
            src={featuredMovie.image} 
            alt={featuredMovie.title}
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 p-6">
            <h2 className="text-4xl font-bold mb-2">{featuredMovie.title}</h2>
            <div className="flex items-center space-x-4">
              <span className="bg-green-500 px-2 py-1 rounded text-sm font-semibold">
                {featuredMovie.rating}% Rating
              </span>
              <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-sm font-semibold flex items-center space-x-2">
                <Download size={18} />
                <span>${featuredMovie.price}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex items-center space-x-4 mb-6">
          <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-sm flex items-center space-x-2">
            <Heart size={18} className="text-pink-500" />
            <span>Wishlist</span>
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-sm flex items-center space-x-2">
            <Clock size={18} className="text-yellow-500" />
            <span>New Releases</span>
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-sm flex items-center space-x-2">
            <Star size={18} className="text-blue-500" />
            <span>Top Rated</span>
          </button>
        </div>

        {/* Recommended Movies */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Recommended Movies</h3>
            <button className="text-blue-400 hover:text-blue-300 flex items-center">
              <span>View all</span>
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {recommendedMovies.map(movie => (
              <div key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-200">
                <img 
                  src={movie.image} 
                  alt={movie.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold mb-2">{movie.title}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-green-500 font-semibold">{movie.rating}%</span>
                    <span className="text-blue-400">${movie.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;