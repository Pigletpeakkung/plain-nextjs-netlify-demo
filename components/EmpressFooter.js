// components/EmpressFooter.js
import { motion } from 'framer-motion'
import Link from 'next/link'

const EmpressFooter = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-purple-900/30 to-black relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-gold-400 to-rose-gold-400 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <h3 className="text-4xl font-bold bg-gradient-to-r from-gold-400 to-rose-gold-400 bg-clip-text text-transparent mb-4">
                PAGEANT EMPRESS
              </h3>
              <p className="text-gray-300 text-lg max-w-md leading-relaxed">
                Where crowns meet digital empires. Discover new faces, exclusive content, and the latest in pageant excellence.
              </p>
            </motion.div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <motion.a
                href="https://www.youtube.com/@pageantempress"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </motion.a>
              
              <motion.a
                href="https://www.instagram.com/pageantempress/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase()}`}>
                    <motion.a
                      whileHover={{ x: 5, color: "#D4AF37" }}
                      className="text-gray-300 hover:text-gold-400 transition-colors duration-300"
                    >
                      {link}
                    </motion.a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {['Pageant Promotion', 'Portfolio Development', 'Content Creation', 'Talent Management'].map((service) => (
                <li key={service}>
                  <motion.a
                    whileHover={{ x: 5, color: "#D4AF37" }}
                    className="text-gray-300 hover:text-gold-400 transition-colors duration-300 cursor-pointer"
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Credits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="border-t border-gray-700 pt-8 text-center"
        >
          <div className="bg-gradient-to-r from-gold-400/10 to-rose-gold-400/10 backdrop-blur-sm rounded-2xl p-6 border border-gold-400/20 mb-6">
            <h4 className="text-2xl font-bold text-white mb-4">👑 Credits & Recognition</h4>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h5 className="text-lg font-semibold text-gold-400 mb-2">🎬 Content Creator</h5>
                <p className="text-gray-300">
                  <strong>George G.</strong><br />
                  YouTube: <a href="https://www.youtube.com/@pageantempress" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:underline">@pageantempress</a>
                </p>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold text-gold-400 mb-2">💻 Website Development</h5>
                <p className="text-gray-300">
                  <strong>Thanattsitt S. (ThannxAI)</strong><br />
                  Email: <a href="mailto:thanattsitt.info@yahoo.co.uk" className="text-gold-400 hover:underline">thanattsitt.info@yahoo.co.uk</a>
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2025 <span className="text-gold-400 font-semibold">Pageant Empress</span>. All rights reserved.
            </p>
            <p className="text-gray-400">
              Copyright © <span className="text-gold-400 font-semibold">Thanattsitt S.</span> | Developed with 💛
