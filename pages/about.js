// pages/about.js
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Image from 'next/image'

export default function About() {
  return (
    <Layout>
      <SEO 
        title="About Pageant Empress | Our Story & Mission"
        description="Learn about Pageant Empress, founded by George G. and developed by Thanattsitt S. Discover our mission to elevate pageant contestants worldwide."
        url="https://pageantempress.netlify.app/about"
      />
      
      <section className="py-24 bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="text-6xl mb-6">👑</div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              About Pageant Empress
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Where dreams meet crowns, and digital empires are born
            </p>
          </div>

          {/* Our Story */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>
                  Pageant Empress was born from a passion for celebrating beauty, talent, and the incredible journey of pageant contestants worldwide.
                </p>
                <p>
                  Founded by content creator <strong className="text-yellow-400">George G.</strong>, our platform has become the premier destination for pageant enthusiasts, offering expert analysis, behind-the-scenes content, and spotlighting rising stars in the industry.
                </p>
                <p>
                  With over 500K followers across social media platforms, we've built a community that celebrates diversity, empowerment, and the pursuit of excellence.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-yellow-400/20 to-pink-400/20 rounded-3xl p-8">
                <div className="text-center">
                  <div className="text-8xl mb-4">🎬</div>
                  <h3 className="text-2xl font-bold text-white mb-4">George G.</h3>
                  <p className="text-gray-300 mb-6">Content Creator & Founder</p>
                  <a
                    href="https://www.youtube.com/@pageantempress"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    Watch Content
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: "🌟",
                title: "Our Mission",
                description: "To celebrate and elevate pageant contestants by providing a platform for recognition, growth, and empowerment."
              },
              {
                icon: "💎",
                title: "Our Vision",
                description: "To be the leading digital platform where pageant dreams are nurtured and crown moments are celebrated worldwide."
              },
              {
                icon: "👑",
                title: "Our Values",
                description: "Excellence