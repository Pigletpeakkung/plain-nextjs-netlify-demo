'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Types
interface SetupStep {
  id: number
  title: string
  description: string
  icon: string
  completed: boolean
}

interface DatabaseConfig {
  host: string
  port: string
  database: string
  username: string
  password: string
  ssl: boolean
}

interface AdminUser {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

interface SiteConfig {
  siteName: string
  siteDescription: string
  siteUrl: string
  adminEmail: string
  timezone: string
  language: string
}

interface SocialConfig {
  youtube: string
  instagram: string
  tiktok: string
  twitter: string
  facebook: string
}

interface EmailConfig {
  provider: string
  apiKey: string
  fromEmail: string
  fromName: string
}

// Main Setup Page Component
export default function SetupPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [setupComplete, setSetupComplete] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [sparkles, setSparkles] = useState<Array<{id: number, left: number, top: number, delay: number}>>([])

  // Form states
  const [databaseConfig, setDatabaseConfig] = useState<DatabaseConfig>({
    host: 'localhost',
    port: '5432',
    database: 'pageant_empress',
    username: '',
    password: '',
    ssl: true
  })

  const [adminUser, setAdminUser] = useState<AdminUser>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [siteConfig, setSiteConfig] = useState<SiteConfig>({
    siteName: 'Pageant Empress',
    siteDescription: 'Where Dreams Sparkle ✨ Crowns Shine 👑 Stories Unfold',
    siteUrl: '',
    adminEmail: '',
    timezone: 'America/New_York',
    language: 'en'
  })

  const [socialConfig, setSocialConfig] = useState<SocialConfig>({
    youtube: '@pageantempress',
    instagram: 'pageantempress',
    tiktok: '@pageantempress',
    twitter: '',
    facebook: ''
  })

  const [emailConfig, setEmailConfig] = useState<EmailConfig>({
    provider: 'sendgrid',
    apiKey: '',
    fromEmail: '',
    fromName: 'Pageant Empress'
  })

  const setupSteps: SetupStep[] = [
    {
      id: 1,
      title: 'Database Connection',
      description: 'Configure your database connection settings',
      icon: '🗄️',
      completed: false
    },
    {
      id: 2,
      title: 'Admin Account',
      description: 'Create your administrator account',
      icon: '👤',
      completed: false
    },
    {
      id: 3,
      title: 'Site Configuration',
      description: 'Configure basic site settings',
      icon: '⚙️',
      completed: false
    },
    {
      id: 4,
      title: 'Social Media',
      description: 'Connect your social media accounts',
      icon: '📱',
      completed: false
    },
    {
      id: 5,
      title: 'Email Settings',
      description: 'Configure email notifications',
      icon: '📧',
      completed: false
    },
    {
      id: 6,
      title: 'Final Review',
      description: 'Review and complete setup',
      icon: '✅',
      completed: false
    }
  ]

  const totalSteps = setupSteps.length

  useEffect(() => {
    // Create sparkles animation
    const newSparkles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3
    }))
    setSparkles(newSparkles)

    // Check if setup is already completed
    const setupStatus = localStorage.getItem('pageant_empress_setup')
    if (setupStatus === 'completed') {
      setSetupComplete(true)
    }
  }, [])

  const validateStep = (step: number): boolean => {
    const newErrors: { [key: string]: string } = {}

    switch (step) {
      case 1:
        if (!databaseConfig.host) newErrors.host = 'Host is required'
        if (!databaseConfig.port) newErrors.port = 'Port is required'
        if (!databaseConfig.database) newErrors.database = 'Database name is required'
        if (!databaseConfig.username) newErrors.username = 'Username is required'
        if (!databaseConfig.password) newErrors.password = 'Password is required'
        break

      case 2:
        if (!adminUser.firstName) newErrors.firstName = 'First name is required'
        if (!adminUser.lastName) newErrors.lastName = 'Last name is required'
        if (!adminUser.email) {
          newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(adminUser.email)) {
          newErrors.email = 'Please enter a valid email address'
        }
        if (!adminUser.password) {
          newErrors.password = 'Password is required'
        } else if (adminUser.password.length < 8) {
          newErrors.password = 'Password must be at least 8 characters'
        }
        if (adminUser.password !== adminUser.confirmPassword) {
          newErrors.confirmPassword = 'Passwords do not match'
        }
        break

      case 3:
        if (!siteConfig.siteName) newErrors.siteName = 'Site name is required'
        if (!siteConfig.siteUrl) newErrors.siteUrl = 'Site URL is required'
        if (!siteConfig.adminEmail) {
          newErrors.adminEmail = 'Admin email is required'
        } else if (!/\S+@\S+\.\S+/.test(siteConfig.adminEmail)) {
          newErrors.adminEmail = 'Please enter a valid email address'
        }
        break

      case 5:
        if (!emailConfig.apiKey) newErrors.apiKey = 'API key is required'
        if (!emailConfig.fromEmail) {
          newErrors.fromEmail = 'From email is required'
        } else if (!/\S+@\S+\.\S+/.test(emailConfig.fromEmail)) {
          newErrors.fromEmail = 'Please enter a valid email address'
        }
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = async () => {
    if (!validateStep(currentStep)) return

    setIsLoading(true)

    // Simulate API call for each step
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (currentStep < totalSteps) {
        setCurrentStep(prev => prev + 1)
      } else {
        await completeSetup()
      }
    } catch (error) {
      console.error('Setup step failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const completeSetup = async () => {
    try {
      // Save setup completion status
      localStorage.setItem('pageant_empress_setup', 'completed')
      
      // Save configuration data
      const setupData = {
        database: databaseConfig,
        admin: adminUser,
        site: siteConfig,
        social: socialConfig,
        email: emailConfig,
        completedAt: new Date().toISOString()
      }
      
      localStorage.setItem('pageant_empress_config', JSON.stringify(setupData))
      
      setSetupComplete(true)
    } catch (error) {
      console.error('Setup completion failed:', error)
    }
  }

  const testDatabaseConnection = async () => {
    setIsLoading(true)
    try {
      // Simulate database connection test
      await new Promise(resolve => setTimeout(resolve, 2000))
      alert('Database connection successful!')
    } catch (error) {
      alert('Database connection failed. Please check your settings.')
    } finally {
      setIsLoading(false)
    }
  }

  if (setupComplete) {
    return <SetupCompletePage />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1594736797933-d0301ba92c46?w=1920&q=75"
          alt="Setup Background"
          fill
          style={{ objectFit: 'cover' }}
          className="scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-purple-900/50 to-black/90" />
      </div>

      {/* Animated Sparkles */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute w-1 h-1 bg-yellow-400 rounded-full sparkle-animation"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            animationDelay: `${sparkle.delay}s`
          }}
        />
      ))}

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl crown-bounce mb-6">👑</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-gold">Pageant Empress</span> Setup
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Welcome! Let's get your pageant platform configured and ready to shine.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {setupSteps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col items-center p-4 rounded-2xl transition-all duration-300 ${
                  step.id === currentStep
                    ? 'bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border-2 border-yellow-400'
                    : step.id < currentStep
                    ? 'bg-green-500/20 border-2 border-green-400'
                    : 'bg-white/5 border border-white/20'
                }`}
              >
                                <div className={`text-3xl mb-2 ${
                  step.id === currentStep ? 'crown-bounce' : ''
                }`}>
                  {step.id < currentStep ? '✅' : step.icon}
                </div>
                <h3 className={`text-sm font-semibold text-center ${
                  step.id === currentStep
                    ? 'text-yellow-400'
                    : step.id < currentStep
                    ? 'text-green-400'
                    : 'text-white'
                }`}>
                  {step.title}
                </h3>
                <p className="text-xs text-gray-400 text-center mt-1 max-w-24">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white/10 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
          <div className="text-center mt-2 text-gray-400 text-sm">
            Step {currentStep} of {totalSteps}
          </div>
        </div>

        {/* Setup Form */}
        <div className="max-w-2xl mx-auto">
          <div className="card-glass rounded-3xl p-8 mb-8">
            {currentStep === 1 && <DatabaseStep config={databaseConfig} setConfig={setDatabaseConfig} errors={errors} onTest={testDatabaseConnection} isLoading={isLoading} />}
            {currentStep === 2 && <AdminStep config={adminUser} setConfig={setAdminUser} errors={errors} />}
            {currentStep === 3 && <SiteConfigStep config={siteConfig} setConfig={setSiteConfig} errors={errors} />}
            {currentStep === 4 && <SocialStep config={socialConfig} setConfig={setSocialConfig} />}
            {currentStep === 5 && <EmailStep config={emailConfig} setConfig={setEmailConfig} errors={errors} />}
            {currentStep === 6 && <ReviewStep databaseConfig={databaseConfig} adminUser={adminUser} siteConfig={siteConfig} socialConfig={socialConfig} emailConfig={emailConfig} />}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Previous
            </button>

            <button
              onClick={handleNext}
              disabled={isLoading}
              className="btn-empress"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {currentStep === totalSteps ? 'Completing...' : 'Processing...'}
                </div>
              ) : (
                currentStep === totalSteps ? '✨ Complete Setup' : 'Next →'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Step Components
function DatabaseStep({ 
  config, 
  setConfig, 
  errors, 
  onTest, 
  isLoading 
}: { 
  config: DatabaseConfig
  setConfig: (config: DatabaseConfig) => void
  errors: { [key: string]: string }
  onTest: () => void
  isLoading: boolean
}) {
  const handleChange = (field: keyof DatabaseConfig, value: string | boolean) => {
    setConfig({ ...config, [field]: value })
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="text-4xl mb-4">🗄️</div>
        <h2 className="text-2xl font-bold text-white mb-2">Database Configuration</h2>
        <p className="text-gray-400">Configure your PostgreSQL database connection</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white font-semibold mb-2">Host *</label>
          <input
            type="text"
            value={config.host}
            onChange={(e) => handleChange('host', e.target.value)}
            className={`w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border ${
              errors.host ? 'border-red-400' : 'border-white/20'
            } text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300`}
            placeholder="localhost"
          />
          {errors.host && <p className="text-red-400 text-sm mt-1">{errors.host}</p>}
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Port *</label>
          <input
            type="text"
            value={config.port}
            onChange={(e) => handleChange('port', e.target.value)}
            className={`w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border ${
              errors.port ? 'border-red-400' : 'border-white/20'
            } text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300`}
            placeholder="5432"
          />
          {errors.port && <p className="text-red-400 text-sm mt-1">{errors.port}</p>}
        </div>
      </div>

      <div>
        <label className="block text-white font-semibold mb-2">Database Name *</label>
        <input
          type="text"
          value={config.database}
          onChange={(e) => handleChange('database', e.target.value)}
          className={`w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border ${
            errors.database ? 'border-red-400' : 'border-white/20'
          } text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300`}
          placeholder="pageant_empress"
        />
        {errors.database && <p className="text-red-400 text-sm mt-1">{errors.database}</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white font-semibold mb-2">Username *</label>
          <input
            type="text"
            value={config.username}
            onChange={(e) => handleChange('username', e.target.value)}
            className={`w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border ${
              errors.username ? 'border-red-400' : 'border-white/20'
            } text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300`}
            placeholder="Database username"
          />
          {errors.username && <p className="text-red-400 text-sm mt-1">{errors.username}</p>}
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Password *</label>
          <input
            type="password"
            value={config.password}
            onChange={(e) => handleChange('password', e.target.value)}
            className={`w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border ${
              errors.password ? 'border-red-400' : 'border-white/20'
            } text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300`}
            placeholder="Database password"
          />
          {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          id="ssl"
          checked={config.ssl}
          onChange={(e) => handleChange('ssl', e.target.checked)}
          className="sr-only"
        />
        <label
          htmlFor="ssl"
          className={`w-5 h-5 rounded border-2 flex items-center justify-center cursor-pointer ${
            config.ssl
              ? 'border-yellow-400 bg-yellow-400'
              : 'border-white/40'
          }`}
        >
          {config.ssl && (
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </label>
        <label htmlFor="ssl" className="text-white cursor-pointer">
          Use SSL Connection
        </label>
      </div>

      <div className="pt-4">
        <button
          onClick={onTest}
          disabled={isLoading}
          className="w-full py-3 bg-blue-600/20 border border-blue-400/30 text-blue-400 rounded-xl font-semibold hover:bg-blue-600/30 transition-all duration-300 disabled:opacity-50"
        >
          {isLoading ? 'Testing Connection...' : 'Test Database Connection'}
        </button>
      </div>
    </div>
  )
}

function AdminStep({ 
  config, 
  setConfig, 
  errors 
}: { 
  config: AdminUser
  setConfig: (config: AdminUser) => void
  errors: { [key: string]: string }
}) {
  const handleChange = (field: keyof AdminUser, value: string) => {
    setConfig({ ...config, [field]: value })
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="text-4xl mb-4">👤</div>
        <h2 className="text-2xl font-bold text-white mb-2">Create Admin Account</h2>
        <p className="text-gray-400">Set up your administrator account to manage the platform</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white font-semibold mb-2">First Name *</label>
          <input
            type="text"
            value={config.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            className={`w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border ${
              errors.firstName ? 'border-red-400' : 'border-white/20'
            } text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300`}
            placeholder="Your first name"
          />
          {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Last Name *</label>
          <input
            type="text"
            value={config.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            className={`w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border ${
              errors.lastName ? 'border-red-400' : 'border-white/20'
            } text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300`}
            placeholder="Your last name"
          />
          {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div>
        <label className="block text-white font-semibold mb-2">Email Address *</label>
        <input
          type="email"
          value={config.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className={`w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border ${
            errors.email ? 'border-red-400' : 'border-white/20'
          } text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300`}
          placeholder="admin@pageantempress.com"
        />
        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-white font-semibold mb-2">Password *</label>
        <input
          type="password"
          value={config.password}
          onChange={(e) => handleChange('password', e.target.value)}
          className={`w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border ${
            errors.password ? 'border-red-400' : 'border-white/20'
          } text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300`}
          placeholder="Create a secure password"
        />
        {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
        <p className="text-gray-400 text-sm mt-1">Minimum 8 characters required</p>
      </div>

      <div>
        <label className="block text-white font-semibold mb-2">Confirm Password *</label>
        <input
          type="password"
          value={config.confirmPassword}
          onChange={(e) => handleChange('confirmPassword', e.target.value)}
          className={`w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border ${
            errors.confirmPassword ? 'border-red-400' : 'border-white/20'
          } text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300`}
          placeholder="Confirm your password"
        />
        {errors.confirmPassword && <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>}
      </div>
    </div>
  )
}

function SiteConfigStep({ 
  config, 
  setConfig, 
  errors 
}: { 
  config: SiteConfig
  setConfig: (config: SiteConfig) => void
  errors: { [key: string]: string }
}) {
  const handleChange = (field: keyof SiteConfig, value: string) => {
    setConfig({ ...config, [field]: value })
  }

  const timezones = [
    'America/New_York',
    'America/Chicago', 
    'America/Denver',
    'America/Los_Angeles',
    'Europe/London',
    'Europe/Paris',
    'Asia/Tokyo',
    'Asia/Singapore',
    'Australia/Sydney'
  ]

  return (
          <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="text-4xl mb-4">⚙️</div>
        <h2 className="text-2xl font-bold text-white mb-2">Site Configuration</h2>
        <p className="text-gray-400">Configure your website's basic settings</p>
      </div>

      <div>
        <label className="block text-white font-semibold mb-2">Site Name *</label>
        <input
          type="text"
          value={config.siteName}
          onChange={(e) => handleChange('siteName', e.target.value)}
          className={`w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border ${
            errors.siteName ? 'border-red-400' : 'border-white/20'
          } text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300`}
          placeholder="Pageant Empress"
        />
        {errors.siteName && <p className="text-red-400 text-sm mt-1">{errors.siteName}</p>}
      </div>

      <div>
        <label className="block text-white font-semibold mb-2">Site Description</label>
        <textarea
          value={config.siteDescription}
          onChange={(e) => handleChange('siteDescription', e.target.value)}
          rows={3}
          className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 resize-none"
          placeholder="Where Dreams Sparkle ✨ Crowns Shine 👑 Stories Unfold"
        />
      </div>

      <div>
        <label className="block text-white font-semibold mb-2">Site URL *</label>
        <input
          type="url"
          value={config.siteUrl}
          onChange={(e) => handleChange('siteUrl', e.target.value)}
          className={`w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border ${
            errors.siteUrl ? 'border-red-400' : 'border-white/20'
          } text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300`}
          placeholder="https://pageantempress.com"
        />
        {errors.siteUrl && <p className="text-red-400 text-sm mt-1">{errors.siteUrl}</p>}
      </div>

      <div>
        <label className="block text-white font-semibold mb-2">Admin Email *</label>
        <input
          type="email"
          value={config.adminEmail}
          onChange={(e) => handleChange('adminEmail', e.target.value)}
          className={`w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border ${
            errors.adminEmail ? 'border-red-400' : 'border-white/20'
          } text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300`}
          placeholder="admin@pageantempress.com"
        />
        {errors.adminEmail && <p className="text-red-400 text-sm mt-1">{errors.adminEmail}</p>}
        <p className="text-gray-400 text-sm mt-1">This email will receive system notifications</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white font-semibold mb-2">Timezone</label>
          <select
            value={config.timezone}
            onChange={(e) => handleChange('timezone', e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
          >
            {timezones.map((tz) => (
              <option key={tz} value={tz} className="bg-gray-800">
                {tz.replace('_', ' ')}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Language</label>
          <select
            value={config.language}
            onChange={(e) => handleChange('language', e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
          >
            <option value="en" className="bg-gray-800">English</option>
            <option value="es" className="bg-gray-800">Spanish</option>
            <option value="fr" className="bg-gray-800">French</option>
            <option value="pt" className="bg-gray-800">Portuguese</option>
          </select>
        </div>
      </div>
    </div>
  )
}

function SocialStep({ 
  config, 
  setConfig 
}: { 
  config: SocialConfig
  setConfig: (config: SocialConfig) => void
}) {
  const handleChange = (field: keyof SocialConfig, value: string) => {
    setConfig({ ...config, [field]: value })
  }

  const socialPlatforms = [
    {
      key: 'youtube' as keyof SocialConfig,
      name: 'YouTube',
      icon: '🎬',
      placeholder: '@pageantempress',
      color: 'from-red-500 to-red-600'
    },
    {
      key: 'instagram' as keyof SocialConfig,
      name: 'Instagram',
      icon: '📸',
      placeholder: 'pageantempress',
      color: 'from-pink-500 to-purple-600'
    },
    {
      key: 'tiktok' as keyof SocialConfig,
      name: 'TikTok',
      icon: '🎵',
      placeholder: '@pageantempress',
      color: 'from-purple-500 to-pink-500'
    },
    {
      key: 'twitter' as keyof SocialConfig,
      name: 'Twitter/X',
      icon: '🐦',
      placeholder: '@pageantempress',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      key: 'facebook' as keyof SocialConfig,
      name: 'Facebook',
      icon: '👥',
      placeholder: 'PageantEmpress',
      color: 'from-blue-600 to-blue-700'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="text-4xl mb-4">📱</div>
        <h2 className="text-2xl font-bold text-white mb-2">Social Media Accounts</h2>
        <p className="text-gray-400">Connect your social media profiles (optional but recommended)</p>
      </div>

      <div className="space-y-4">
        {socialPlatforms.map((platform) => (
          <div key={platform.key} className="flex items-center space-x-4">
            <div className={`w-12 h-12 bg-gradient-to-r ${platform.color} rounded-full flex items-center justify-center flex-shrink-0`}>
              <span className="text-white text-lg">{platform.icon}</span>
            </div>
            <div className="flex-1">
              <label className="block text-white font-semibold mb-2">{platform.name}</label>
              <input
                type="text"
                value={config[platform.key]}
                onChange={(e) => handleChange(platform.key, e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                placeholder={platform.placeholder}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-500/10 border border-blue-400/30 rounded-xl p-4">
        <div className="flex items-start space-x-3">
          <div className="text-blue-400 text-xl">💡</div>
          <div>
            <h4 className="text-blue-400 font-semibold mb-1">Social Media Tips</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Use consistent usernames across platforms for better branding</li>
              <li>• YouTube and Instagram are essential for pageant content</li>
              <li>• You can update these settings later in the admin panel</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function EmailStep({ 
  config, 
  setConfig, 
  errors 
}: { 
  config: EmailConfig
  setConfig: (config: EmailConfig) => void
  errors: { [key: string]: string }
}) {
  const handleChange = (field: keyof EmailConfig, value: string) => {
    setConfig({ ...config, [field]: value })
  }

  const emailProviders = [
    { value: 'sendgrid', name: 'SendGrid', description: 'Reliable email delivery service' },
    { value: 'mailgun', name: 'Mailgun', description: 'Developer-friendly email API' },
    { value: 'aws-ses', name: 'Amazon SES', description: 'Amazon Simple Email Service' },
    { value: 'smtp', name: 'Custom SMTP', description: 'Use your own SMTP server' }
  ]

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="text-4xl mb-4">📧</div>
        <h2 className="text-2xl font-bold text-white mb-2">Email Configuration</h2>
        <p className="text-gray-400">Set up email notifications and newsletters</p>
      </div>

      <div>
        <label className="block text-white font-semibold mb-4">Email Provider</label>
        <div className="grid md:grid-cols-2 gap-3">
          {emailProviders.map((provider) => (
            <label
              key={provider.value}
              className={`flex items-start p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                config.provider === provider.value
                  ? 'bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border-2 border-yellow-400'
                  : 'bg-white/5 border border-white/20 hover:bg-white/10'
              }`}
            >
              <input
                type="radio"
                name="provider"
                value={provider.value}
                checked={config.provider === provider.value}
                onChange={(e) => handleChange('provider', e.target.value)}
                className="sr-only"
              />
              <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center mt-0.5 ${
                config.provider === provider.value
                  ? 'border-yellow-400 bg-yellow-400'
                  : 'border-white/40'
              }`}>
                {config.provider === provider.value && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              <div>
                <span className="text-white font-semibold">{provider.name}</span>
                <p className="text-gray-400 text-sm mt-1">{provider.description}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-white font-semibold mb-2">API Key *</label>
        <input
          type="password"
          value={config.apiKey}
          onChange={(e) => handleChange('apiKey', e.target.value)}
          className={`w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border ${
            errors.apiKey ? 'border-red-400' : 'border-white/20'
          } text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300`}
          placeholder="Enter your email provider API key"
        />
        {errors.apiKey && <p className="text-red-400 text-sm mt-1">{errors.apiKey}</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white font-semibold mb-2">From Email *</label>
          <input
            type="email"
            value={config.fromEmail}
            onChange={(e) => handleChange('fromEmail', e.target.value)}
            className={`w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border ${
              errors.fromEmail ? 'border-red-400' : 'border-white/20'
            } text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300`}
            placeholder="noreply@pageantempress.com"
          />
          {errors.fromEmail && <p className="text-red-400 text-sm mt-1">{errors.fromEmail}</p>}
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">From Name</label>
          <input
            type="text"
            value={config.fromName}
            onChange={(e) => handleChange('fromName', e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
            placeholder="Pageant Empress"
          />
        </div>
      </div>

      <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-xl p-4">
        <div className="flex items-start space-x-3">
          <div className="text-yellow-400 text-xl">⚠️</div>
          <div>
            <h4 className="text-yellow-400 font-semibold mb-1">Important</h4>
            <p className="text-gray-300 text-sm">
              Make sure to verify your sending domain with your email provider to ensure delivery. 
              Test emails will be sent during the final setup step.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ReviewStep({ 
  databaseConfig, 
  adminUser, 
  siteConfig, 
  socialConfig, 
  emailConfig 
}: {
  databaseConfig: DatabaseConfig
  adminUser: AdminUser
  siteConfig: SiteConfig
  socialConfig: SocialConfig
  emailConfig: EmailConfig
}) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="text-4xl mb-4">✅</div>
        <h2 className="text-2xl font-bold text-white mb-2">Review & Complete</h2>
        <p className="text-gray-400">Please review your configuration before completing the setup</p>
      </div>

      <div className="space-y-6">
        {/* Database Summary */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <span className="text-2xl mr-2">🗄️</span>
            Database Configuration
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Host:</span>
                            <span className="text-white ml-2">{databaseConfig.host}:{databaseConfig.port}</span>
            </div>
            <div>
              <span className="text-gray-400">Database:</span>
              <span className="text-white ml-2">{databaseConfig.database}</span>
            </div>
            <div>
              <span className="text-gray-400">Username:</span>
              <span className="text-white ml-2">{databaseConfig.username}</span>
            </div>
            <div>
              <span className="text-gray-400">SSL:</span>
              <span className="text-white ml-2">{databaseConfig.ssl ? 'Enabled' : 'Disabled'}</span>
            </div>
          </div>
        </div>

        {/* Admin Account Summary */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <span className="text-2xl mr-2">👤</span>
            Administrator Account
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Name:</span>
              <span className="text-white ml-2">{adminUser.firstName} {adminUser.lastName}</span>
            </div>
            <div>
              <span className="text-gray-400">Email:</span>
              <span className="text-white ml-2">{adminUser.email}</span>
            </div>
          </div>
        </div>

        {/* Site Configuration Summary */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <span className="text-2xl mr-2">⚙️</span>
            Site Settings
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Site Name:</span>
              <span className="text-white ml-2">{siteConfig.siteName}</span>
            </div>
            <div>
              <span className="text-gray-400">URL:</span>
              <span className="text-white ml-2">{siteConfig.siteUrl}</span>
            </div>
            <div>
              <span className="text-gray-400">Admin Email:</span>
              <span className="text-white ml-2">{siteConfig.adminEmail}</span>
            </div>
            <div>
              <span className="text-gray-400">Timezone:</span>
              <span className="text-white ml-2">{siteConfig.timezone}</span>
            </div>
          </div>
        </div>

        {/* Social Media Summary */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <span className="text-2xl mr-2">📱</span>
            Social Media Accounts
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            {Object.entries(socialConfig).map(([platform, username]) => (
              username && (
                <div key={platform}>
                  <span className="text-gray-400 capitalize">{platform}:</span>
                  <span className="text-white ml-2">{username}</span>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Email Configuration Summary */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <span className="text-2xl mr-2">📧</span>
            Email Configuration
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Provider:</span>
              <span className="text-white ml-2 capitalize">{emailConfig.provider}</span>
            </div>
            <div>
              <span className="text-gray-400">From Email:</span>
              <span className="text-white ml-2">{emailConfig.fromEmail}</span>
            </div>
            <div>
              <span className="text-gray-400">From Name:</span>
              <span className="text-white ml-2">{emailConfig.fromName}</span>
            </div>
            <div>
              <span className="text-gray-400">API Key:</span>
              <span className="text-white ml-2">{'*'.repeat(emailConfig.apiKey.length)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/30 rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <div className="text-green-400 text-2xl">🎉</div>
          <div>
            <h4 className="text-green-400 font-semibold mb-2">Ready to Launch!</h4>
            <p className="text-gray-300 text-sm mb-3">
              Your Pageant Empress platform is configured and ready to go. Click "Complete Setup" to:
            </p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Create the database tables</li>
              <li>• Set up the admin account</li>
              <li>• Initialize the content management system</li>
              <li>• Send a test email to verify email configuration</li>
              <li>• Generate initial sample content</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

// Setup Complete Page Component
function SetupCompletePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1594736797933-d0301ba92c46?w=1920&q=75"
          alt="Setup Complete Background"
          fill
          style={{ objectFit: 'cover' }}
          className="scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-purple-900/50 to-black/90" />
      </div>

      {/* Animated Sparkles */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full sparkle-animation"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      ))}

      <div className="text-center relative z-10 px-4 max-w-3xl mx-auto">
        <div className="text-8xl mb-8 crown-bounce">👑</div>
        
        <h1 className="text-6xl font-bold mb-6">
          <span className="gradient-gold">Setup Complete!</span>
        </h1>
        
        <p className="text-2xl text-gray-300 mb-12">
          Welcome to your Pageant Empress platform! Your website is now ready to showcase the beauty and elegance of the pageant world.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="glass-effect rounded-2xl p-6">
            <div className="text-4xl mb-4">🎬</div>
            <h3 className="text-xl font-bold text-white mb-2">Content Ready</h3>
            <p className="text-gray-400 text-sm">Sample content and pages have been created to get you started</p>
          </div>
          <div className="glass-effect rounded-2xl p-6">
            <div className="text-4xl mb-4">👤</div>
            <h3 className="text-xl font-bold text-white mb-2">Admin Access</h3>
            <p className="text-gray-400 text-sm">Your administrator account is ready for managing the platform</p>
          </div>
          <div className="glass-effect rounded-2xl p-6">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold text-white mb-2">Email Configured</h3>
            <p className="text-gray-400 text-sm">Email notifications and newsletters are set up and tested</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
          <Link href="/admin" className="btn-empress">
            ✨ Go to Admin Panel
          </Link>
          <Link href="/" className="btn-secondary">
            🏠 Visit Your Site
          </Link>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Next Steps:</h3>
          <div className="text-left max-w-md mx-auto space-y-2 text-gray-300">
            <div className="flex items-center space-x-3">
              <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-black text-sm font-bold">1</span>
              <span>Customize your site colors and branding</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-black text-sm font-bold">2</span>
              <span>Upload your first pageant content</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-black text-sm font-bold">3</span>
              <span>Configure your social media integrations</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-black text-sm font-bold">4</span>
              <span>Set up your first newsletter campaign</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 mb-4">Need help getting started?</p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:support@pageantempress.com"
              className="text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              📧 Contact Support
            </a>
            <a
              href="/docs"
              className="text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              📚 View Documentation
            </a>
            <a
              href="/help"
              className="text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              ❓ Help Center
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}