// components/InstagramEmpressSection.js
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Masonry from 'react-masonry-css'

const InstagramEmpressSection = () => {
  const [posts, setPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)

  // Mock Instagram posts with actual pageant content
  const mockPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1594736797933-d0301ba92c46?w=400",
      caption: "👑 New crown alert! Behind the scenes with our latest Empress discovery. The journey to greatness starts here! ✨ #PageantEmpress #NewFace #CrownMoment",
      likes: 25420,
      comments: 542,
      timestamp: "2 hours ago",
      type: "image",
      tags: ["#PageantEmpress", "#NewFace", "#CrownMoment"]
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400",
      caption: "🎬 George G. breaking down the top 5 moments from Miss Universe! Which one was your favorite? Comment below! 👇 #GeorgeG #MissUniverse #Analysis",
      likes: 18750,
      comments: 356,
      timestamp: "5 hours ago",
      type: "video",
      tags: ["#GeorgeG", "#MissUniverse", "#Analysis"]
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
      caption: "✨ RISING STAR SPOTLIGHT ✨ Meet Sarah, our newest discovery taking the pageant world by storm! Her confidence is unmatched 💫 #RisingStar #PageantEmpress",
      likes: 32100,
      comments: 734,
      timestamp: "1 day ago",
      type: "image",
      tags: ["#RisingStar", "#PageantEmpress"]
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=400",
      caption: "🏆 MAJOR ANNOUNCEMENT! Our Pageant Empress community just hit 500K! Thank you for being part of this incredible journey. More exciting content coming! 🚀",
      likes: 45600,
      comments: 1200,
      timestamp: "2 days ago",
      type: "carousel",
      tags: ["#PageantEmpress", "#500K", "#Milestone"]
    }
  ]

  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  }

  return (
    <section className="py-24 bg-gradient-to-b from-pink-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-pink-200/30 to-purple-200/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 left-16 w-40 h-40 bg-gradient-to-r from-gold-200/30 to-rose-gold-200/30 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-6xl mb-6"
          >
            📸
          </motion.div>
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-gold-600 bg-clip-text text-transparent">
            Follow the Empire
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our royal community and stay updated with the latest pageant news, behind-the-scenes content, and rising stars
          </p>
          
          {/* Instagram CTA */}
          <motion.a
            href="https://www.instagram.com/pageantempress/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-full font-semibold shadow-xl hover:shadow-pink-500/30 transition-all duration-300"
          >
                       <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @pageantempress • 500K Followers
          </motion.a>
        </motion.div>

        {/* Instagram Feed */}
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-6"
          columnClassName="pl-6 bg-clip-padding"
        >
          {mockPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -8 }}
              className="mb-6 cursor-pointer group"
              onClick={() => setSelectedPost(post)}
            >
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="relative">
                  <img 
                    src={post.image} 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={post.caption}
                  />
                  
                  {/* Content Type Indicators */}
                  {post.type === 'video' && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full p-2 shadow-lg">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l8-5-8-5z"/>
                      </svg>
                    </div>
                  )}
                  
                  {post.type === 'carousel' && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full p-2 shadow-lg">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                      </svg>
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white text-sm mb-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1"
                        >
                          <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                          </svg>
                          <span>{post.likes.toLocaleString()}</span>
                        </motion.button>
                        
                        <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                          </svg>
                          <span>{post.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Post Content */}
                <div className="p-5">
                  <p className="text-gray-800 text-sm line-clamp-3 mb-3 leading-relaxed">{post.caption}</p>
                  
                  {/* Hashtags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">{post.timestamp}</span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-pink-500 font-medium text-sm"
                    >
                      View Post →
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>

        {/* Load More & Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          {/* Engagement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Total Followers", value: "500K+", icon: "👥", gradient: "from-pink-500 to-rose-500" },
              { label: "Monthly Reach", value: "2.5M+", icon: "📈", gradient: "from-purple-500 to-indigo-500" },
              { label: "Engagement Rate", value: "8.5%", icon: "💬", gradient: "from-blue-500 to-cyan-500" },
              { label: "Posts This Month", value: "45+", icon: "📸", gradient: "from-green-500 to-emerald-500" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-gradient-to-r ${stat.gradient} p-6 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300`}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-pink-500/30 transition-all duration-300"
          >
            Load More Posts ✨
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default InstagramEmpressSection
