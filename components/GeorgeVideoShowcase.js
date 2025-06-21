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
                       className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-xl hover:shadow-red-500/30"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Subscribe to @pageantempress
          </motion.a>
        </motion.div>

        {/* Video Carousel */}
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper mb-16"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={video.id} className="w-80">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl">
                  <div className="relative aspect-video">
                    <img 
                      src={video.thumbnail} 
                      className="w-full h-full object-cover"
                      alt={video.title}
                    />
                    
                    {/* Play Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl"
                      >
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 5v10l8-5-8-5z"/>
                        </svg>
                      </motion.div>
                    </div>

                    {/* Stats Overlay */}
                    <div className="absolute top-4 right-4 space-y-2">
                      <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs">
                        👁 {video.views}
                      </div>
                      <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs">
                        ⏱ {video.duration}
                      </div>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{video.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{video.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-4 text-sm text-gray-400">
                        <span>💖 {video.likes}</span>
                        <span>🔥 Trending</span>
                      </div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="text-gold-400"
                      >
                        →
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Video Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { label: "Total Views", value: "2.5M+", icon: "👁", color: "from-blue-400 to-blue-600" },
            { label: "Subscribers", value: "500K+", icon: "❤️", color: "from-red-400 to-red-600" },
            { label: "Videos", value: "150+", icon: "🎬", color: "from-purple-400 to-purple-600" },
            { label: "Countries", value: "50+", icon: "🌍", color: "from-green-400 to-green-600" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`bg-gradient-to-r ${stat.color} p-6 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300`}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default GeorgeVideoShowcase
