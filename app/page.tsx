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
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-white/10">
                {/* Video Thumbnail */}
                <div className="relative aspect-video">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Duration */}
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                
                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {video.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {video.views} views
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      {video.likes} likes
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-6xl">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                  className="w-full h-full"
                  allowFullScreen
                  title={selectedVideo.title}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

// Instagram Section Component
function InstagramSection() {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Mock Instagram posts data
  const mockPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1594736797933-d0301ba92c46?w=400&q=75",
      caption: "Behind the scenes of Miss Universe preparation! ✨👑",
      likes: 1520,
      comments: 89
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=75",
      caption: "Exclusive interview with rising pageant star! 🌟",
      likes: 2340,
      comments: 156
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=75",
      caption: "Crown fitting session - every detail matters! 👑✨",
      likes: 1890,
      comments: 234
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=75",
      caption: "Runway rehearsal with our gorgeous contestants! 💃",
      likes: 3200,
      comments: 298
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=400&q=75",
      caption: "Evening gown selection - pure elegance! ✨👗",
      likes: 2100,
      comments: 187
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=400&q=75",
      caption: "Makeup artistry at its finest! 💄✨",
      likes: 1750,
      comments: 143
    }
  ]

  useEffect(() => {
    // Simulate loading Instagram posts
    const timer = setTimeout(() => {
      setPosts(mockPosts)
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-pink-900/20 via-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">📸</div>
          <h2 className="text-section font-bold mb-6">
            <span className="gradient-pink">Instagram</span> Highlights
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Follow our journey on Instagram for exclusive behind-the-scenes content and pageant updates
          </p>
          
          <a
            href="https://www.instagram.com/pageantempress/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-pink-500/30 hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow @pageantempress
          </a>
        </div>

        {/* Instagram Grid */}
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, index) => (
                            <div key={index} className="aspect-square bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {posts.map((post, index) => (
              <div
                key={post.id}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer card-hover"
              >
                <Image
                  src={post.image}
                  alt="Instagram post"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm mb-2 line-clamp-2">{post.caption}</p>
                    <div className="flex items-center space-x-4 text-white/80 text-sm">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        {post.likes.toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {post.comments}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

// Blog Section Component
function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "The Evolution of Pageant Standards: Beauty Redefined",
      excerpt: "Exploring how pageant judging criteria have evolved to embrace diversity, intelligence, and social impact beyond traditional beauty standards.",
      image: "https://images.unsplash.com/photo-1594736797933-d0301ba92c46?w=500&q=75",
      author: "George G.",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Industry Insights"
    },
    {
      id: 2,
      title: "Behind the Crown: Mental Health in Pageants",
      excerpt: "An honest discussion about the psychological challenges contestants face and the support systems that make a difference.",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&q=75",
      author: "George G.",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Wellness"
    },
    {
      id: 3,
      title: "Rising Stars: 2024's Most Promising Pageant Contestants",
      excerpt: "Meet the exceptional women who are making waves in the pageant world with their unique stories and advocacy work.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&q=75",
      author: "George G.",
      date: "December 10, 2024",
      readTime: "10 min read",
      category: "Spotlight"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-black via-indigo-900/20 to-purple-900/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">📝</div>
          <h2 className="text-section font-bold mb-6">
            Latest <span className="gradient-blue">Insights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Deep dives into pageant culture, industry trends, and the stories that matter
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="card-glass rounded-2xl overflow-hidden card-hover group cursor-pointer"
            >
              {/* Featured Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                      G
                    </div>
                    <span>{post.author}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <button className="text-yellow-400 hover:text-yellow-300 transition-colors font-semibold text-sm group-hover:translate-x-1 duration-300">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="btn-secondary">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  )
}

// Newsletter Section Component
function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail('')
    }, 1500)
  }

  return (
    <section className="py-24 bg-gradient-to-r from-purple-900 via-pink-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Crown Animation */}
          <div className="text-8xl mb-8 crown-bounce">👑</div>
          
          <h2 className="text-section font-bold text-white mb-6">
            Stay in the <span className="gradient-gold">Royal Loop</span>
          </h2>
          
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get exclusive pageant insights, behind-the-scenes content, and be the first to know about rising stars in the crown world
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your royal email address"
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-empress whitespace-nowrap"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Subscribing...
                    </div>
                  ) : (
                    '✨ Join the Court'
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="glass-effect rounded-2xl p-8 max-w-md mx-auto">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-white mb-2">Welcome to the Royal Court!</h3>
              <p className="text-gray-200">
                You're now part of our exclusive pageant community. Check your email for a special welcome gift!
              </p>
            </div>
          )}

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              {
                icon: "🎬",
                title: "Exclusive Content",
                description: "Behind-the-scenes videos and interviews"
              },
              {
                icon: "👑",
                title: "Early Access",
                description: "First to know about new pageant discoveries"
              },
              {
                icon: "✨",
                title: "Expert Insights",
                description: "George's personal analysis and predictions"
              }
            ].map((benefit, index) => (
              <div key={benefit.title} className="text-center">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Call to Action Section Component
function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-purple-900/30 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full sparkle-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="text-8xl mb-8 crown-bounce">👑</div>
          
          <h2 className="text-section font-bold text-white mb-8">
            Ready to Shine in the <span className="gradient-gold">Pageant World</span>?
          </h2>
          
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Whether you're an aspiring contestant, industry professional, or pageant enthusiast, 
            join our community and discover what makes stars truly sparkle.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="btn-empress glow-animation">
              <span className="flex items-center justify-center">
                ✨ Start Your Crown Journey
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            
            <button className="btn-secondary">
              📞 Book a Consultation
            </button>
          </div>

          {/* Social Links */}
          <div className="border-t border-white/10 pt-12">
            <p className="text-gray-400 mb-6">Follow our pageant journey</p>
            <div className="flex justify-center space-x-8">
              <a
                href="https://www.youtube.com/@pageantempress"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 text-gray-400 hover:text-red-400 transition-all duration-300 hover:scale-110 group"
              >
                <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <span className="text-sm">YouTube</span>
              </a>

              <a
                href="https://www.instagram.com/pageantempress/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-110 group"
              >
                <div className="w-12 h-12 bg-pink-600/20 rounded-full flex items-center justify-center group-hover:bg-pink-600/30 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="text-sm">Instagram</span>
              </a>

              <a
                href="https://www.tiktok.com/@pageantempress"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110 group"
              >
                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </div>
                <span className="text-sm">TikTok</span>
              </a>

              <a
                href="#"
                className="flex flex-col items-center space-y-2 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 group"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <span className="text-sm">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}