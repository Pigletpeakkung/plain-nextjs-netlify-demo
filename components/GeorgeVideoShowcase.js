// components/GeorgeVideoShowcase.js
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

const GeorgeVideoShowcase = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const videoRef = useRef(null)

  const videos = [
    {
      id: 1,
      title: "Miss Universe 2024 Crown Analysis",
      description: "George's expert breakdown of the competition",
      thumbnail: "https://images.unsplash.com/photo-1594736797933-d0301ba92c46?w=600",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
      views: "250K",
      likes: "15K",
      duration: "12:30"
    },
    {
      id: 2,
      title: "Behind the Pageant Scenes",
      description: "Exclusive backstage moments and interviews",
      thumbnail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600",
      videoId: "dQw4w9WgXcQ",
      views: "180K",
      likes: "12K",
      duration: "8:45"
    },
    {
      id: 3,
      title: "Rising Stars Spotlight",
      description: "New faces making waves in pageant world",
      thumbnail: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600",
      videoId: "dQw4w9WgXcQ",
      views: "320K",
      likes: "22K",
      duration: "15:20"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-black via-purple-900/20 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 border border-gold-400/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 left-16 w-24 h-24 border border-rose-gold-400/20 rounded-full"
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
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl mb-6"
          >
            🎬
          </motion.div>
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-rose-gold-400 bg-clip-text text-transparent">
            George G.'s Content
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Expert pageant analysis, behind-the-scenes content, and rising star spotlights
          </p>
          
          {/* YouTube Channel Link */}
          <motion.a
            href="https://www.youtube.com/@pageantempress"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-full font-semibold hover:bg-red-
