// components/EmpressHero.js
import { motion, useScroll, useTransform } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import { useEffect, useState } from 'react'

const FloatingCrown = () => (
  <Canvas>
    <ambientLight intensity={0.5} />
    <directionalLight position={[0, 5, 5]} />
    <Sphere args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#D4AF37"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.4}
      />
    </Sphere>
  </Canvas>
)

const EmpressHero = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 100])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-purple-900 to-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(212, 175, 55, 0.3) 0%, transparent 50%)`
          }}
          className="absolute inset-0"
        />
      </div>

      {/* 3D Floating Crown */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 opacity-20">
        <FloatingCrown />
      </div>

      {/* Particle System */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
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
              y: [0, -50, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, type: "spring", bounce: 0.3 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-8xl md:text-9xl"
              >
                👑
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-gold-400 to-rose-gold-400 rounded-full blur-xl opacity-30"
              />
            </div>
          </motion.div>

          {/* Brand Name */}
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-gold-400 via-rose-gold-400 to-diamond-400 bg-clip-text text-transparent animate-pulse">
              PAGEANT
            </span>
            <br />
            <motion.span
              animate={{ backgroundPosition: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="bg-gradient-to-r from-diamond-400 via-gold-400 to-rose-gold-400 bg-clip-text text-transparent"
              style={{ backgroundSize: '200% auto' }}
            >
              EMPRESS
            </motion.span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-2xl md:text-3xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gold-200"
          >
            Where Crowns Meet Digital Empires ✨
          </motion.p>

          {/* Creator Credit */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mb-12 space-y-2"
          >
            <p className="text-gold-300 text-lg">
              🎬 Content Creator: <span className="font-semibold">George G.</span>
            </p>
            <p className="text-rose-gold-300">
              💻 Developed by: <span className="font-semibold">Thanattsitt S. (ThannxAI)</span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(212, 175, 55, 0.4)",
                background: "linear-gradient(135deg, #D4AF37 0%, #E8B4B8 100%)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-gradient-to-r from-gold-400 to-rose-gold-400 rounded-full text-black font-bold text-lg overflow-hidden"
            >
              <span className="relative z-10">👑 Discover New Faces</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border-2 border-white/30 backdrop-blur-sm rounded-full text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300"
            >
              🎬 Watch George's Content
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gold-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default EmpressHero
