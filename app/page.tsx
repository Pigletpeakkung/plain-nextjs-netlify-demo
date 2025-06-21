'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

// Main Homepage Component
export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Preview */}
      <ServicesSection />
      
      {/* George's Video Content */}
      <VideoSection />
      
      {/* Instagram Feed */}
      <InstagramSection />
      
      {/* Blog Preview */}
      <BlogSection />
      
      {/* Newsletter Signup */}
      <NewsletterSection />
      
      {/* Call to Action */}
      <CTASection />
    </div>
  )
}

// Hero Section Component
function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [sparkles, setSparkles] = useState<Array<{id: number, left: number, top: number, delay: number}>>([])

  useEffect(() => {
    setIsLoaded(true)
    // Create sparkles on client side only
    const newSparkles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3
    }))
    setSparkles(newSparkles)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="https://images.unsplash.com/photo-1594736797933-d0301ba92c46?w=1920&q=75"
          alt="Pageant Empress Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-purple-900/30 to-black/70" />
      </div>

      {/* Animated Sparkles */}
      {isLoaded && sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute w-2 h-2 bg-yellow-300 rounded-full sparkle-animation"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            animationDelay: `${sparkle.delay}s`
          }}
        />
      ))}

      {/* Main Content */}
      <div className="text-center text-white z-10 px-4 max-w-6xl mx-auto">
        {/* Crown Animation */}
        <div className={`text-8xl mb-8 crown-bounce transition-all duration-1000 ${isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
          👑
        </div>

        {/* Brand Name */}
        <h1 className={`text-hero font-black mb-6 leading-tight transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="shimmer-animation block">
            PAGEANT
          </span>
          <span className="gradient-empress block">
            EMPRESS
          </span>
        </h1>

        {/* Tagline */}
        <p className={`text-2xl md:text-3xl mb-8 text-shadow transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Where Dreams Sparkle ✨ Crowns Shine 👑 Stories Unfold
        </p>

        {/* Creator Credits */}
        <div className={`mb-12 space-y-3 transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="glass-effect rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-yellow-300 text-lg mb-2">
              🎬 Content Creator: <span className="font-bold">George G.</span>
            </p>
            <p className="text-pink-300 mb-3">
              💻 Developed by: <span className="font-bold">Thanattsitt S. (ThannxAI)</span>
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.youtube.com/@pageantempress"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>@pageantempress</span>
              </a>
              <a
                href="https://www.instagram.com/pageantempress/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>@pageantempress</span>
              </a>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="btn-empress glow-animation">
            <span className="flex items-center justify-center">
              ✨ Discover New Faces
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          
          <button className="btn-secondary">
            🎬 Watch George's Content
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 float-animation" />
          </div>
        </div>
      </div>
    </section>
  )
}

// Services Section Component
function ServicesSection() {
  const services = [
    {
      icon: "👑",
      title: "Pageant Promotion",
      description: "Strategic marketing and brand building for aspiring queens",
      features: ["Social Media Strategy", "Press Coverage", "Brand Development"],
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: "📸",
      title: "Portfolio Creation",
      description: "Professional photo and video content that captures your essence",
      features: ["Professional Photoshoot", "Video Content", "Digital Portfolio"],
      gradient: "from-pink-400 to-rose-400"
    },
    {
      icon: "🌟",
      title: "Talent Management",
      description: "Full-service representation and career guidance",
      features: ["Career Coaching", "Competition Prep", "Industry Connections"],
      gradient: "from-purple-400 to-indigo-400"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="text-6xl mb-6 float-animation">✨</div>
          <h2 className="text-section font-bold text-white mb-8">
            Launch Your <span className="gradient-gold">Crown Journey</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            From discovery to stardom - we provide comprehensive services to elevate your pageant career
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-hover group cursor-pointer"
            >
              <div className="card-glass p-8 h-full">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 crown-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-200">
                      <span className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Video Section Component
function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<any>(null)

  const videos = [
    {
      id: 1,
      title: "Miss Universe 2024 Crown Analysis",
      description: "George's expert breakdown of the competition highlights and winner selection",
      thumbnail: "https://images.unsplash.com/photo-1594736797933-d0301ba92c46?w=600&q=75",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
      views: "250K",
      likes: "15K",
      duration: "12:30"
    },
    {
      id: 2,
      title: "Behind the Pageant Scenes",
      description: "Exclusive backstage moments and contestant interviews",
      thumbnail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=75",
      videoId: "dQw4w9WgXcQ",
      views: "180K",
      likes: "12K",
      duration: "8:45"
    },
    {
      id: 3,
      title: "Rising Stars Spotlight",
      description: "New faces making waves in the pageant world",
      thumbnail: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=75",
      videoId: "dQw4w9WgXcQ",
      views: "320K",
      likes: "22K",
      duration: "15:20"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">🎬</div>
          <h2 className="text-section font-bold mb-6 gradient-gold">
            George G.'s Content
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Expert pageant analysis, behind-the-scenes content, and rising star spotlights
          </p>
          
          <a
            href="https://www.youtube.com/@pageantempress"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-xl hover:shadow-red-500/30 hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Subscribe to @pageantempress
          </a>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="card-hover group cursor-pointer"
              onClick={() =>