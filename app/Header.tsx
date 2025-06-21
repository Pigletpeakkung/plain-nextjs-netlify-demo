'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

// Types
interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'user' | 'admin' | 'creator'
}

interface NavigationItem {
  name: string
  href: string
  icon?: string
  submenu?: NavigationItem[]
}

// Main Header Component
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const pathname = usePathname()

  // Mock user data - replace with actual auth logic
  const mockUser: User = {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&q=75',
    role: 'user'
  }

  const navigationItems: NavigationItem[] = [
    {
      name: 'Home',
      href: '/',
      icon: '🏠'
    },
    {
      name: 'Articles',
      href: '/posts',
      icon: '📚'
    },
    {
      name: 'Services',
      href: '/services',
      icon: '✨',
      submenu: [
        { name: 'Pageant Promotion', href: '/services/promotion' },
        { name: 'Portfolio Creation', href: '/services/portfolio' },
        { name: 'Talent Management', href: '/services/management' },
        { name: 'Coaching', href: '/services/coaching' }
      ]
    },
    {
      name: 'About George',
      href: '/about',
      icon: '👨‍💼'
    },
    {
      name: 'Gallery',
      href: '/gallery',
      icon: '📸'
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: '📞'
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Mock authentication check - replace with actual auth logic
    const checkAuth = () => {
      // Simulate logged in user for demo
      if (typeof window !== 'undefined') {
        const isLoggedIn = localStorage.getItem('pageant_empress_user')
        if (isLoggedIn) {
          setUser(mockUser)
        }
      }
    }

    checkAuth()
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false)
    setShowUserMenu(false)
    setShowSearch(false)
  }, [pathname])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Implement search logic
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('pageant_empress_user')
    setShowUserMenu(false)
  }

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="text-3xl crown-bounce group-hover:scale-110 transition-transform duration-300">
              👑
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-black">
                <span className="text-white">PAGEANT</span>
              </div>
              <div className="text-lg font-bold gradient-gold -mt-1">
                EMPRESS
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    isActiveLink(item.href)
                      ? 'bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-yellow-400 border border-yellow-400/30'
                      : 'text-white hover:text-yellow-400 hover:bg-white/10'
                  }`}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span className="font-semibold">{item.name}</span>
                  {item.submenu && (
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Submenu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-black/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-6 py-4 text-white hover:text-yellow-400 hover:bg-white/10 transition-all duration-300 border-b border-white/5 last:border-b-0"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 text-white hover:text-yellow-400 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Search Dropdown */}
              {showSearch && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-black/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl p-4">
                  <form onSubmit={handleSearch}>
                    <div className="relative">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search articles, topics..."
                        className="w-full px-4 py-3 pl-10 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                        autoFocus
                      />
                      <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <button type="submit" className="w-full mt-3 btn-empress text-sm py-2">
                      Search
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* User Menu */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-3 p-2 rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-yellow-400/50">
                    {user.avatar ? (
                      <Image
                        src={user.avatar}
                        alt={user.name}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                        {user.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <span className="hidden md:block text-white font-semibold">{user.name.split(' ')[0]}</span>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* User Dropdown */}
                {showUserMenu && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-black/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                    <div className="p-4 border-b border-white/10">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-yellow-400/50">
                          {user.avatar ? (
                            <Image
                              src={user.avatar}
                              alt={user.name}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold">
                              {user.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="text-white font-semibold">{user.name}</p>
                          <p className="text-gray-400 text-sm">{user.email}</p>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mt-1 ${
                            user.role === 'admin' 
                              ? 'bg-red-500/20 text-red-400' 
                              : user.role === 'creator'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : 'bg-purple-500/20 text-purple-400'
                          }`}>
                            {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="py-2">
                      <Link
                        href="/dashboard"
                        className="flex items-center space-x-3 px-4 py-3 text-white hover:text-yellow-400 hover:bg-white/10 transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v1H8V5z" />
                        </svg>
                        <span>Dashboard</span>
                      </Link>

                      <Link
                        href="/profile"
                        className="flex items-center space-x-3 px-4 py-3 text-white hover:text-yellow-400 hover:bg-white/10 transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>Profile Settings</span>
                      </Link>

                      <Link
                        href="/favorites"
                        className="flex items-center space-x-3 px-4 py-3 text-white hover:text-yellow-400 hover:bg-white/10 transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span>Favorites</span>
                      </Link>

                      {user.role === 'admin' && (
                        <Link
                          href="/admin"
                          className="flex items-center space-x-3 px-4 py-3 text-white hover:text-yellow-400 hover:bg-white/10 transition-all duration-300"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>Admin Panel</span>
                        </Link>
                      )}

                      <div className="border-t border-white/10 mt-2 pt-2">
                        <button
                          onClick={handleLogout}
                          className="flex items-center space-x-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-300 w-full"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Auth Buttons */
              <div className="hidden md:flex items-center space-x-4">
                <Link
                  href="/users/login"
                  className="px-4 py-2 text-white hover:text-yellow-400 font-semibold transition-colors duration-300"
                >
                  Sign In
                </Link>
                <Link
                  href="/users/new"
                  className="btn-empress text-sm"
                >
                  ✨ Join Now
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:text-yellow-400 transition-colors duration-300"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-white/10">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActiveLink(item.href)
                      ? 'bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-yellow-400 border border-yellow-400/30'
                      : 'text-white hover:text-yellow-400 hover:bg-white/10'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-semibold">{item.name}</span>
                </Link>

                {/* Mobile Submenu */}
                {item.submenu && isActiveLink(item.href) && (
                  <div className="ml-8 mt-2 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Auth Buttons */}
            {!user && (
              <div className="pt-4 space-y-3 border-t border-white/10">
                <Link
                  href="/users/login"
                  className="block w-full px-4 py-3 text-center text-white hover:text-yellow-400 font-semibold transition-colors duration-300 border border-white/20 rounded-xl hover:border-yellow-400/50"
                >
                  Sign In
                </Link>
                <Link
                  href="/users/new"
                  className="block w-full btn-empress text-center"
                >
                  ✨ Join the Court
                </Link>
              </div>
            )}

            {/* Mobile User Info */}
            {user && (
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center space-x-3 px-4 py-3 mb-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-400/50">
                    {user.avatar ? (
                      <Image
                        src={user.avatar}
                        alt={user.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold">
                        {user.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{user.name}</p>
                    <p className="text-gray-400 text-sm">{user.email}</p>
                  </div>
                </div>

                <div className="space-y-1">
                  <Link
                    href="/dashboard"
                    className="flex items-center space-x-3 px-4 py-3 text-white hover:text-yellow-400 hover:bg-white/10 transition-all duration-300 rounded-xl"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    </svg>
                    <span>Dashboard</span>
                  </Link>

                  <Link
                    href="/profile"
                    className="flex items-center space-x-3 px-4 py-3 text-white hover:text-yellow-400 hover:bg-white/10 transition-all duration-300 rounded-xl"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Profile</span>
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-300 rounded-xl w-full"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden -z-10"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Social Media Quick Links (when scrolled) */}
      {isScrolled && (
        <div className="hidden xl:flex fixed top-24 right-4 flex-col space-y-2 z-40">
          <a
            href="https://www.youtube.com/@pageantempress"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-red-600/20 hover:bg-red-600/40 border border-red-600/30 rounded-full flex items-center justify-center text-red-400 hover:text-red-300 transition-all duration-300 hover:scale-110"
            title="YouTube"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>

          <a
            href="https://www.instagram.com/pageantempress/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-pink-600/20 hover:bg-pink-600/40 border border-pink-600/30 rounded-full flex items-center justify-center text-pink-400 hover:text-pink-300 transition-all duration-300 hover:scale-110"
            title="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          <a
            href="https://www.tiktok.com/@pageantempress"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-purple-600/20 hover:bg-purple-600/40 border border-purple-600/30 rounded-full flex items-center justify-center text-purple-400 hover:text-purple-300 transition-all duration-300 hover:scale-110"
            title="TikTok"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
        </div>
      )}
    </header>
  )
}

// Notification Banner Component (Optional)
export function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 text-center text-sm relative">
      <div className="flex items-center justify-center space-x-2">
        <span className="text-lg">🎉</span>
        <span>
          <strong>New Content Alert!</strong> Miss Universe 2024 analysis now live -{' '}
          <Link href="/posts" className="underline hover:no-underline font-semibold">
            Watch Now
          </Link>
        </span>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}

// Search Modal Component (Alternative to dropdown)
export function SearchModal({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean
  onClose: () => void 
}) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([])
      return
    }

    setIsLoading(true)
    // Simulate search API call
    setTimeout(() => {
      const mockResults = [
        {
          id: 1,
          title: "Miss Universe 2024 Analysis",
          type: "article",
          excerpt: "Complete breakdown of the competition...",
          url: "/posts/miss-universe-2024-analysis"
        },
        {
          id: 2,
          title: "Pageant Training Tips",
          type: "article", 
          excerpt: "Essential preparation methods...",
          url: "/posts/pageant-training-tips"
        }
      ]
      setSearchResults(mockResults)
      setIsLoading(false)
    }, 500)
  }

  useEffect(() => {
    const delayedSearch = setTimeout(() => {
      handleSearch(searchQuery)
    }, 300)

    return () => clearTimeout(delayedSearch)
  }, [searchQuery])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
      <div className="w-full max-w-2xl mx-4">
        <div className="bg-black/95 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Search Input */}
          <div className="relative p-6 border-b border-white/10">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, topics, pageants..."
              className="w-full px-6 py-4 pl-12 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 text-lg"
              autoFocus
            />
            <svg className="absolute left-9 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <button
              onClick={onClose}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {isLoading ? (
              <div className="p-6 text-center">
                <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-400"></div>
                <p className="text-gray-400 mt-2">Searching...</p>
              </div>
            ) : searchResults.length > 0 ? (
              <div className="p-4 space-y-2">
                {searchResults.map((result) => (
                  <Link
                    key={result.id}
                    href={result.url}
                    onClick={onClose}
                    className="block p-4 rounded-xl hover:bg-white/5 transition-colors duration-300 group"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold group-hover:text-yellow-400 transition-colors">
                          {result.title}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">{result.excerpt}</p>
                        <span className="text-xs text-yellow-400 mt-2 inline-block">
                          {result.type.charAt(0).toUpperCase() + result.type.slice(1)}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : searchQuery.trim() ? (
              <div className="p-6 text-center">
                <div className="text-4xl mb-4">🔍</div>
                <p className="text-gray-400">No results found for "{searchQuery}"</p>
                <p className="text-gray-500 text-sm mt-2">Try different keywords or browse our categories</p>
              </div>
            ) : (
              <div className="p-6 text-center">
                <div className="text-4xl mb-4">✨</div>
                <p className="text-gray-400">Start typing to search articles, topics, and more</p>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {['Miss Universe', 'Beauty Tips', 'Training', 'Fashion'].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => setSearchQuery(suggestion)}
                      className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm hover:bg-white/20 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}