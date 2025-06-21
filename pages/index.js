// pages/index.js - Complete 2025 Pageant Empress Homepage
import { motion } from 'framer-motion'
import Head from 'next/head'
import EmpressHero from '../components/EmpressHero'
import GeorgeVideoShowcase from '../components/GeorgeVideoShowcase'
import InstagramEmpressSection from '../components/InstagramEmpressSection'
import EmpressBlogSection from '../components/EmpressBlogSection'
import EmpressFooter from '../components/EmpressFooter'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>Pageant Empress | Where Crowns Meet Digital Empires</title>
        <meta name="description" content="Discover new faces, exclusive pageant content, and expert analysis by George G. Professional pageant promotion and talent management services." />
        <meta name="keywords" content="pageant, beauty queen, miss universe, george g, pageant empress, crown, beauty, talent management" />
        <meta property="og:title" content="Pageant Empress | Where Crowns Meet Digital Empires" />
        <meta property="og:description" content="Premium pageant content, rising stars, and expert analysis" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://pageantempress.com" />
        <link rel="icon" href="/crown-favicon.ico" />
      </Head>

      {/* Hero Section */}
      <EmpressHero />

      {/* Services Preview Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-24 bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900 relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-32 right-32 w-48 h-48 bg-gradient-to-r from-gold-400/20 to-rose-gold-400/20 rounded-full blur-2xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
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
              ✨
            </motion.div>
            <h2 className="text-5xl font-bold text-white mb-8">
              Launch Your <span className="bg-gradient-to-r from-gold-400 to-rose-gold-400 bg-clip-text text-transparent">Crown Journey</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              From discovery to stardom - we provide comprehensive services to elevate your pageant career
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "👑",
                title: "Pageant Promotion",
                description: "Strategic marketing and brand building for aspiring queens",
                features: ["Social Media Strategy", "Press Coverage", "Brand Development"],
                gradient: "from-gold-400 to-yellow-500"
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
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-gold-400/50 transition-all duration-500 h-full">
                  <div className="text-center mb-6">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="text-6xl mb-4"
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-200">
                        <span className="w-2 h-2 bg-gradient-to-r from-gold-400 to-rose-gold-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className={`w-full py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300`}
                  >
                    Learn More →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* George's Video Content */}
      <GeorgeVideoShowcase />
      
      {/* Instagram Feed */}
      <InstagramEmpressSection />
      
      {/* Blog Section */}
      <EmpressBlogSection />
      
      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-24 bg-gradient-to-b from-black via-purple-900/30 to-black relative overflow-hidden"
      >
        {/* Sparkle Animation */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-8xl mb-8"
            >
              👑
            </motion.div>
            
            <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-gold-400 via-rose-gold-400 to-diamond-400 bg-clip-text text-transparent">
              Ready to Rule? ✨
            </h2>
            
            <p className="text-2xl text-gray-200 mb-12 leading-relaxed">
              Join the empire of successful pageant queens who trusted Pageant Empress 
              to transform their dreams into crowning achievements
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(212, 175, 55, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-gradient-to-r from-gold-400 to-gold-600 text-black font-bold text-xl rounded-full shadow-2xl hover:shadow-gold-500/50 transition-all duration-300"
              >
                👑 Start Your Reign
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 border-2 border-white/30 text-white font-bold text-xl rounded-full hover:shadow-2xl transition-all duration-300 backdrop-blur-sm"
              >
                📞 Book Consultation
              </motion.button>
            </div>

            {/* Success Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "500+", label: "Queens Coached", icon: "👑" },
                { number: "50+", label: "Titles Won", icon: "🏆" },
                { number: "25+", label: "Countries", icon: "🌍" },
                { number: "2M+", label: "Community", icon: "❤️" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gold-400 mb-1">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Footer */}
      <EmpressFooter />
    </div>
  )
}
