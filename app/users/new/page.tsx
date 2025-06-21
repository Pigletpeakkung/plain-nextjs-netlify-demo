'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Types
interface FormData {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  dateOfBirth: string
  phone: string
  country: string
  state: string
  city: string
  experience: string
  interests: string[]
  socialMedia: {
    instagram: string
    youtube: string
    tiktok: string
  }
  agreeToTerms: boolean
  subscribeNewsletter: boolean
}

interface FormErrors {
  [key: string]: string
}

// Main New User Page Component
export default function NewUserPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    experience: '',
    interests: [],
    socialMedia: {
      instagram: '',
      youtube: '',
      tiktok: ''
    },
    agreeToTerms: false,
    subscribeNewsletter: true
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [sparkles, setSparkles] = useState<Array<{id: number, left: number, top: number, delay: number}>>([])

  const totalSteps = 4
  const experienceOptions = [
    'Complete Beginner',
    'Some Experience',
    'Amateur Competitor',
    'Professional Contestant',
    'Industry Professional',
    'Other'
  ]

  const interestOptions = [
    'Beauty Pageants',
    'Talent Competitions',
    'Fashion Shows',
    'Photography',
    'Public Speaking',
    'Charity Work',
    'Fitness & Wellness',
    'Modeling',
    'Acting',
    'Dance',
    'Singing',
    'Content Creation'
  ]

  useEffect(() => {
    // Create sparkles animation
    const newSparkles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3
    }))
    setSparkles(newSparkles)
  }, [])

  const handleInputChange = (field: string, value: any) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.')
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof FormData] as any),
          [child]: value
        }
      }))
    } else {
      setFormData(prev => ({ ...prev, [field]: value }))
    }
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {}

    switch (step) {
      case 1:
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email address'
        }
        if (!formData.password) {
          newErrors.password = 'Password is required'
        } else if (formData.password.length < 8) {
          newErrors.password = 'Password must be at least 8 characters'
        }
        if (formData.password !== formData.confirmPassword) {
          newErrors.confirmPassword = 'Passwords do not match'
        }
        break

      case 2:
        if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required'
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
        if (!formData.country.trim()) newErrors.country = 'Country is required'
        if (!formData.city.trim()) newErrors.city = 'City is required'
        break

      case 3:
        if (!formData.experience) newErrors.experience = 'Experience level is required'
        if (formData.interests.length === 0) {
          newErrors.interests = 'Please select at least one area of interest'
        }
        break

      case 4:
        if (!formData.agreeToTerms) {
          newErrors.agreeToTerms = 'You must agree to the terms and conditions'
        }
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps))
    }
  }

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return

    setIsLoading(true)
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSuccess(true)
    } catch (error) {
      console.error('Registration failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return <SuccessPage />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1594736797933-d0301ba92c46?w=1920&q=75"
          alt="Registration Background"
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
          <Link href="/" className="inline-block mb-8">
            <div className="text-6xl crown-bounce">👑</div>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join the <span className="gradient-gold">Royal Court</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Begin your journey in the pageant world with exclusive access to expert content, 
            networking opportunities, and personalized guidance.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-4">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`flex items-center ${i < totalSteps - 1 ? 'flex-1' : ''}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    i + 1 <= currentStep
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
                      : 'bg-white/10 text-gray-400 border border-white/20'
                  }`}
                >
                  {i + 1 <= currentStep ? (
                    i + 1 === currentStep ? (
                      i + 1
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )
                  ) : (
                    i + 1
                  )}
                </div>
                {i < totalSteps - 1 && (
                  <div
                    className={`flex-1 h-1 mx-4 rounded transition-all duration-300 ${
                      i + 1 < currentStep
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500'
                        : 'bg-white/20'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-400">
            <span>Account Info</span>
            <span>Personal Details</span>
            <span>Interests</span>
            <span>Confirmation</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto">
          <div className="card-glass rounded-3xl p-8 mb-8">
            {currentStep === 1 && <StepOne formData={formData} errors={errors} onChange={handleInputChange} />}
            {currentStep === 2 && <StepTwo formData={formData} errors={errors} onChange={handleInputChange} />}
            {currentStep === 3 && <StepThree formData={formData} errors={errors} onChange={handleInputChange} onInterestToggle={handleInterestToggle} experienceOptions={experienceOptions} interestOptions={interestOptions} />}
            {currentStep === 4 && <StepFour formData={formData} errors={errors} onChange={handleInputChange} />}
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

            {currentStep < totalSteps ? (
              <button
                onClick={handleNext}
                className="btn-empress"
              >
                Next →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="btn-empress"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating Account...
                  </div>
                ) : (
                  '✨ Join the Court'
                )}
              </button>
            )}
          </div>

          {/* Login Link */}
          <div className="text-center mt-8">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link href="/users/login" className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Step Components
function StepOne({ formData, errors, onChange }: { formData: FormData, errors: FormErrors, onChange: (field: string, value: any) => void }) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="text-4xl mb-4">📧</div>
        <h2 className="text-2xl font-bold text-white mb-2">Account Information</h2>
        <p className="text-gray-400">Let's start with your basic account details</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-white font-semibold mb-2">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={(e) => onChange('firstName', e.target.value)}
            className={`w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border ${
              errors.firstName ? 'border-red-400' : 'border-white/20'
            } text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300`}
            placeholder="Enter your first name"
          />
          {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-white font-semibold mb-2">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={(e) => onChange('lastName', e.target.value)}
            className={`w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border ${
              errors.lastName ? 'border-red-400' : 'border-white/20'
            } text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300`}
            placeholder="Enter your last name"
          />
          {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-white font-semibold mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => onChange('email', e.target.value)}
          className={`w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border ${
            errors.email ? 'border-red-400' : 'border-white/20'
          } text-white placeholder-white/60 focus:outline-none
          focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300`}
          placeholder="Enter your email address"
        />
        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password" className="block text-white font-semibold mb-2">
          Password *
        </label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={(e) => onChange('password', e.target.value)}
          className={`w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border ${
            errors.password ? 'border-red-400' : 'border-white/20'
          } text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300`}
          placeholder="Create a secure password"
        />
        {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
        <p className="text-gray-400 text-sm mt-1">Minimum 8 characters required</p>
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-white font-semibold mb-2">
          Confirm Password *
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={(e) => onChange('confirmPassword', e.target.value)}
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

function StepTwo({ formData, errors, onChange }: { formData: FormData, errors: FormErrors, onChange: (field: string, value: any) => void }) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="text-4xl mb-4">👤</div>
        <h2 className="text-2xl font-bold text-white mb-2">Personal Details</h2>
        <p className="text-gray-400">Tell us a bit more about yourself</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="dateOfBirth" className="block text-white font-semibold mb-2">
            Date of Birth *
          </label>
          <input
            type="date"
            id="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={(e) => onChange('dateOfBirth', e.target.value)}
            className={`w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border ${
              errors.dateOfBirth ? 'border-red-400' : 'border-white/20'
            } text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300`}
          />
          {errors.dateOfBirth && <p className="text-red-400 text-sm mt-1">{errors.dateOfBirth}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-white font-semibold mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            className={`w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border ${
              errors.phone ? 'border-red-400' : 'border-white/20'
            } text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300`}
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="country" className="block text-white font-semibold mb-2">
          Country *
        </label>
        <select
          id="country"
          value={formData.country}
          onChange={(e) => onChange('country', e.target.value)}
          className={`w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border ${
            errors.country ? 'border-red-400' : 'border-white/20'
          } text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300`}
        >
          <option value="" className="bg-gray-800">Select your country</option>
          <option value="US" className="bg-gray-800">United States</option>
          <option value="CA" className="bg-gray-800">Canada</option>
          <option value="GB" className="bg-gray-800">United Kingdom</option>
          <option value="AU" className="bg-gray-800">Australia</option>
          <option value="IN" className="bg-gray-800">India</option>
          <option value="PH" className="bg-gray-800">Philippines</option>
          <option value="TH" className="bg-gray-800">Thailand</option>
          <option value="MY" className="bg-gray-800">Malaysia</option>
          <option value="SG" className="bg-gray-800">Singapore</option>
          <option value="other" className="bg-gray-800">Other</option>
        </select>
        {errors.country && <p className="text-red-400 text-sm mt-1">{errors.country}</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="state" className="block text-white font-semibold mb-2">
            State/Province
          </label>
          <input
            type="text"
            id="state"
            value={formData.state}
            onChange={(e) => onChange('state', e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
            placeholder="Enter your state/province"
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-white font-semibold mb-2">
            City *
          </label>
          <input
            type="text"
            id="city"
            value={formData.city}
            onChange={(e) => onChange('city', e.target.value)}
            className={`w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border ${
              errors.city ? 'border-red-400' : 'border-white/20'
            } text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300`}
            placeholder="Enter your city"
          />
          {errors.city && <p className="text-red-400 text-sm mt-1">{errors.city}</p>}
        </div>
      </div>
    </div>
  )
}

function StepThree({ 
  formData, 
  errors, 
  onChange, 
  onInterestToggle, 
  experienceOptions, 
  interestOptions 
}: { 
  formData: FormData
  errors: FormErrors
  onChange: (field: string, value: any) => void
  onInterestToggle: (interest: string) => void
  experienceOptions: string[]
  interestOptions: string[]
}) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-4xl mb-4">✨</div>
        <h2 className="text-2xl font-bold text-white mb-2">Your Interests</h2>
        <p className="text-gray-400">Help us personalize your experience</p>
      </div>

      <div>
        <label className="block text-white font-semibold mb-4">
          Experience Level *
        </label>
        <div className="grid md:grid-cols-2 gap-3">
          {experienceOptions.map((option) => (
            <label
              key={option}
              className={`flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                formData.experience === option
                  ? 'bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border-2 border-yellow-400'
                  : 'bg-white/5 border border-white/20 hover:bg-white/10'
              }`}
            >
              <input
                type="radio"
                name="experience"
                value={option}
                checked={formData.experience === option}
                onChange={(e) => onChange('experience', e.target.value)}
                className="sr-only"
              />
              <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                formData.experience === option
                  ? 'border-yellow-400 bg-yellow-400'
                  : 'border-white/40'
              }`}>
                {formData.experience === option && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              <span className="text-white">{option}</span>
            </label>
          ))}
        </div>
        {errors.experience && <p className="text-red-400 text-sm mt-1">{errors.experience}</p>}
      </div>

      <div>
        <label className="block text-white font-semibold mb-4">
          Areas of Interest * <span className="text-gray-400 font-normal">(Select all that apply)</span>
        </label>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {interestOptions.map((interest) => (
            <label
              key={interest}
              className={`flex items-center p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                formData.interests.includes(interest)
                  ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-400'
                  : 'bg-white/5 border border-white/20 hover:bg-white/10'
              }`}
            >
              <input
                type="checkbox"
                checked={formData.interests.includes(interest)}
                onChange={() => onInterestToggle(interest)}
                className="sr-only"
              />
              <div className={`w-4 h-4 rounded border-2 mr-3 flex items-center justify-center ${
                formData.interests.includes(interest)
                  ? 'border-purple-400 bg-purple-400'
                  : 'border-white/40'
              }`}>
                {formData.interests.includes(interest) && (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <span className="text-white text-sm">{interest}</span>
            </label>
          ))}
        </div>
        {errors.interests && <p className="text-red-400 text-sm mt-1">{errors.interests}</p>}
      </div>

      {/* Social Media Links */}
      <div>
        <label className="block text-white font-semibold mb-4">
          Social Media <span className="text-gray-400 font-normal">(Optional)</span>
        </label>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <input
              type="text"
              value={formData.socialMedia.instagram}
              onChange={(e) => onChange('socialMedia.instagram', e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
              placeholder="Instagram username (without @)"
            />
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <input
              type="text"
              value={formData.socialMedia.youtube}
              onChange={(e) => onChange('socialMedia.youtube', e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none
              focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
              placeholder="YouTube channel name"
            />
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </div>
            <input
              type="text"
              value={formData.socialMedia.tiktok}
              onChange={(e) => onChange('socialMedia.tiktok', e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
              placeholder="TikTok username (without @)"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function StepFour({ formData, errors, onChange }: { formData: FormData, errors: FormErrors, onChange: (field: string, value: any) => void }) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-4xl mb-4">🎯</div>
        <h2 className="text-2xl font-bold text-white mb-2">Final Step</h2>
        <p className="text-gray-400">Review and confirm your registration</p>
      </div>

      {/* Account Summary */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">Account Summary</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-400">Name:</span>
            <span className="text-white ml-2">{formData.firstName} {formData.lastName}</span>
          </div>
          <div>
            <span className="text-gray-400">Email:</span>
            <span className="text-white ml-2">{formData.email}</span>
          </div>
          <div>
            <span className="text-gray-400">Location:</span>
            <span className="text-white ml-2">
              {formData.city}{formData.state ? `, ${formData.state}` : ''}, {formData.country}
            </span>
          </div>
          <div>
            <span className="text-gray-400">Experience:</span>
            <span className="text-white ml-2">{formData.experience}</span>
          </div>
          <div className="md:col-span-2">
            <span className="text-gray-400">Interests:</span>
            <span className="text-white ml-2">{formData.interests.join(', ')}</span>
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="space-y-4">
        <label className={`flex items-start space-x-3 cursor-pointer p-4 rounded-xl border transition-all duration-300 ${
          errors.agreeToTerms ? 'border-red-400 bg-red-400/10' : 'border-white/20 hover:border-white/40'
        }`}>
          <input
            type="checkbox"
            checked={formData.agreeToTerms}
            onChange={(e) => onChange('agreeToTerms', e.target.checked)}
            className="sr-only"
          />
          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
            formData.agreeToTerms
              ? 'border-yellow-400 bg-yellow-400'
              : errors.agreeToTerms
              ? 'border-red-400'
              : 'border-white/40'
          }`}>
            {formData.agreeToTerms && (
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <div className="text-sm">
            <span className="text-white">
              I agree to the{' '}
              <Link href="/terms" className="text-yellow-400 hover:text-yellow-300 underline">
                Terms of Service
              </Link>
              {' '}and{' '}
              <Link href="/privacy" className="text-yellow-400 hover:text-yellow-300 underline">
                Privacy Policy
              </Link>
            </span>
          </div>
        </label>
        {errors.agreeToTerms && <p className="text-red-400 text-sm">{errors.agreeToTerms}</p>}

        <label className="flex items-start space-x-3 cursor-pointer p-4 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300">
          <input
            type="checkbox"
            checked={formData.subscribeNewsletter}
            onChange={(e) => onChange('subscribeNewsletter', e.target.checked)}
            className="sr-only"
          />
          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
            formData.subscribeNewsletter
              ? 'border-purple-400 bg-purple-400'
              : 'border-white/40'
          }`}>
            {formData.subscribeNewsletter && (
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <div className="text-sm">
            <span className="text-white">
              Subscribe to our newsletter for exclusive pageant insights, tips, and updates from George G.
            </span>
          </div>
        </label>
      </div>

      {/* Benefits Preview */}
      <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-6 border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <span className="text-2xl mr-2">✨</span>
          What you'll get as a member:
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-white text-sm">Exclusive pageant content</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-white text-sm">Expert analysis & tips</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-white text-sm">Community networking</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-white text-sm">Personalized recommendations</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Success Page Component
function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1594736797933-d0301ba92c46?w=1920&q=75"
          alt="Success Background"
          fill
          style={{ objectFit: 'cover' }}
          className="scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-purple-900/50 to-black/90" />
      </div>

      {/* Animated Sparkles */}
      {[...Array(30)].map((_, i) => (
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

      <div className="text-center relative z-10 px-4 max-w-2xl mx-auto">
        <div className="text-8xl mb-8 crown-bounce">👑</div>
        
        <h1 className="text-5xl font-bold mb-6">
          <span className="gradient-gold">Welcome to the Court!</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8">
          Your account has been successfully created. You're now part of the exclusive Pageant Empress community!
        </p>

        <div className="glass-effect rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">📧</div>
                            <h3 className="text-lg font-semibold text-white mb-2">Check Your Email</h3>
              <p className="text-gray-400 text-sm">We've sent you a welcome email with next steps</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎬</div>
              <h3 className="text-lg font-semibold text-white mb-2">Explore Content</h3>
              <p className="text-gray-400 text-sm">Start watching exclusive pageant analysis videos</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">👥</div>
              <h3 className="text-lg font-semibold text-white mb-2">Join Community</h3>
              <p className="text-gray-400 text-sm">Connect with fellow pageant enthusiasts</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href="/dashboard" className="btn-empress">
            ✨ Go to Dashboard
          </Link>
          <Link href="/posts" className="btn-secondary">
            📚 Browse Articles
          </Link>
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-4">Follow us for daily pageant updates:</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.youtube.com/@pageantempress"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/pageantempress/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@pageantempress"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}