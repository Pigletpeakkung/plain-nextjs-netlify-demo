// components/EmpressBlogSection.js
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const EmpressBlogSection = () => {
  const [hoveredPost, setHoveredPost] = useState(null)

  const blogPosts = [
    {
      id: 1,
      title: "The Evolution of Pageant Judging: What's Changed in 2025",
            excerpt: "An in-depth analysis of how pageant judging criteria have evolved and what contestants need to know for modern competitions.",
      image: "https://images.unsplash.com/photo-1594736797933-d0301ba92c46?w=600",
      author: "George G.",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      date: "March 15, 2025",
      readTime: "12",
      category: "Industry Analysis",
      slug: "evolution-pageant-judging-2025",
      featured: true,
      tags: ["Pageant", "Judging", "2025 Trends"]
    },
    {
      id: 2,
      title: "Rising Stars: 10 New Faces to Watch This Season",
      excerpt: "Meet the emerging talents who are set to make waves in the pageant world this year.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600",
      author: "Pageant Empress Team",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b9cc?w=100",
      date: "March 12, 2025",
      readTime: "8",
      category: "Rising Stars",
      slug: "rising-stars-2025-season",
      featured: false,
      tags: ["New Faces", "Contestants", "Spotlight"]
    },
    {
      id: 3,
      title: "Behind the Crown: Mental Health in Pageant Competition",
      excerpt: "Exploring the importance of mental wellness and support systems in competitive pageantry.",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600",
      author: "Dr. Sarah Mitchell",
      authorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100",
      date: "March 10, 2025",
      readTime: "15",
      category: "Wellness",
      slug: "mental-health-pageant-competition",
      featured: false,
      tags: ["Mental Health", "Wellness", "Support"]
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-purple-900/20 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-32 right-32 w-64 h-64 bg-gradient-to-r from-gold-400/10 to-rose-gold-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.5, 1, 1.5],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 left-32 w-48 h-48 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-6xl mb-6"
          >
            📰
          </motion.div>
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-gold-400 via-rose-gold-400 to-diamond-400 bg-clip-text text-transparent">
            Empress Chronicles
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Deep insights, expert analysis, and exclusive stories from the world of pageantry. 
            Stay ahead with the latest trends and behind-the-scenes coverage.
          </motion.p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mb-20"
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-purple-800/20 to-pink-800/20 backdrop-blur-sm border border-white/10 hover:border-gold-400/30 transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative group">
                <img 
                  src={blogPosts[0].image} 
                  className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt={blogPosts[0].title}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                
                {/* Featured Badge */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-6 left-6 bg-gradient-to-r from-gold-400 to-gold-600 text-black px-4 py-2 rounded-full text-sm font-bold shadow-xl"
                >
                  ⭐ FEATURED ARTICLE
                </motion.div>
                
                {/* Reading Stats */}
                <div className="absolute bottom-6 left-6 flex space-x-4 text-white text-sm">
                  <span className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                    👁 12.5K views
                  </span>
                  <span className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                    💬 234 comments
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-4">
                    <span className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {blogPosts[0].category}
                    </span>
                    <div className="flex space-x-2">
                      {blogPosts[0].tags.map((tag, index) => (
                        <span key={index} className="text-gray-400 text-xs">#{tag}</span>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight hover:text-gold-400 transition-colors duration-300">
                    {blogPosts[0].title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  {/* Author Info */}
                  <div className="flex items-center space-x-4 py-4">
                    <img 
                      src={blogPosts[0].authorImage} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-gold-400"
                      alt={blogPosts[0].author}
                    />
                    <div>
                      <p className="text-white font-semibold">{blogPosts[0].author}</p>
                      <div className="flex items-center space-x-4 text-gray-400 text-sm">
                        <span>{blogPosts[0].date}</span>
                        <span>•</span>
                        <span>{blogPosts[0].readTime} min read</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link href={`/blog/${blogPosts[0].slug}`}>
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(212, 175, 55, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="group mt-6 px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-black rounded-full font-bold hover:shadow-xl transition-all duration-300"
                    >
                      <span className="flex items-center">
                        Read Full Article
                        <motion.svg 
                          className="w-5 h-5 ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                      </span>
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -10 }}
              onHoverStart={() => setHoveredPost(post.id)}
              onHoverEnd={() => setHoveredPost(null)}
              className="group cursor-pointer"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gold-400/30">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                      alt={post.title}
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      {post.category}
                    </div>
                    
                    {/* Reading Time */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                      ⏱ {post.readTime} min
                    </div>
                    
                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredPost === post.id ? 1 : 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-center justify-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: hoveredPost === post.id ? 1 : 0 }}
                        className="w-16 h-16 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-2xl"
                      >
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <div className="p-6">
                    <motion.h3
                      animate={hoveredPost === post.id ? { color: "#EC4899" } : { color: "#1F2937" }}
                      className="text-xl font-bold mb-3 line-clamp-2 transition-colors duration-300 leading-tight"
                    >
                      {post.title}
                    </motion.h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Author & Date */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={post.authorImage} 
                          className="w-8 h-8 rounded-full object-cover"
                          alt={post.author}
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                      </div>
                      
                      <motion.div
                        animate={hoveredPost === post.id ? { x: 5, color: "#EC4899" } : { x: 0, color: "#6B7280" }}
                        className="font-semibold"
                      >
                        →
                      </motion.div>
                    </div>
                    
                    {/* Progress Bar */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={hoveredPost === post.id ? { width: "100%" } : { width: 0 }}
                      className="h-1 bg-gradient-to-r from-gold-400 to-
