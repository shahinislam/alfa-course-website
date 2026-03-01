"use client";

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Users, Star, Award, CheckCircle, BookOpen, Play, ChevronRight, Menu, X, Code } from 'lucide-react';
import Link from 'next/link';

const IOSCourseDetails = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const WHATSAPP_NUMBER = "8801234567890"; // Replace with actual number
  const courseParts = [
    {
      id: 1,
      level: "Beginner",
      title: "iOS Development Fundamentals",
      duration: "14 hours",
      lessons: 28,
      price: 4000,
      description: "Start your iOS journey with Swift basics and fundamental concepts",
      topics: [
        {
          title: "Introduction to iOS Development",
          lessons: ["Setting up Xcode", "Swift Playground", "Your First iOS App", "Understanding iOS Architecture"]
        },
        {
          title: "Swift Programming Basics",
          lessons: ["Variables and Constants", "Data Types", "Control Flow", "Functions and Closures", "Optionals"]
        },
        {
          title: "SwiftUI Fundamentals",
          lessons: ["Views and Modifiers", "Stacks and Layouts", "State Management", "Lists and Navigation", "Forms and Input"]
        },
        {
          title: "Basic App Development",
          lessons: ["Building a Todo App", "Working with Images", "User Defaults", "Basic Animations"]
        }
      ]
    },
    {
      id: 2,
      level: "Intermediate",
      title: "Advanced SwiftUI & UIKit",
      duration: "16 hours",
      lessons: 32,
      price: 5000,
      description: "Master advanced UI patterns and integrate UIKit components",
      topics: [
        {
          title: "Advanced SwiftUI",
          lessons: ["Custom Views", "View Modifiers", "Animations & Transitions", "Gestures", "Custom Shapes and Paths"]
        },
        {
          title: "UIKit Integration",
          lessons: ["UIKit Basics", "View Controllers", "Table Views", "Collection Views", "Bridging UIKit to SwiftUI"]
        },
        {
          title: "Data Management",
          lessons: ["Core Data Basics", "CRUD Operations", "Relationships", "Fetch Requests", "Migrations"]
        },
        {
          title: "Networking",
          lessons: ["URLSession", "REST API Integration", "JSON Parsing", "Async/Await", "Error Handling"]
        }
      ]
    },
    {
      id: 3,
      level: "Advanced",
      title: "Professional iOS Development",
      duration: "12 hours",
      lessons: 24,
      price: 3000,
      description: "Learn professional practices, testing, and App Store deployment",
      topics: [
        {
          title: "Architecture Patterns",
          lessons: ["MVVM Pattern", "Combine Framework", "Dependency Injection", "Clean Architecture"]
        },
        {
          title: "Advanced Features",
          lessons: ["Push Notifications", "Location Services", "Camera & Photos", "Background Tasks", "Widget Development"]
        },
        {
          title: "Testing & Debugging",
          lessons: ["Unit Testing", "UI Testing", "Debugging Tools", "Performance Optimization"]
        },
        {
          title: "App Store Deployment",
          lessons: ["Code Signing", "TestFlight", "App Store Connect", "Submission Process", "App Store Optimization"]
        }
      ]
    }
  ];

  const instructor = {
    name: "Sarah Chen",
    title: "Senior iOS Developer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    rating: 4.9,
    students: 150,
    courses: 2,
    bio: "Sarah is a senior iOS developer with 8+ years of experience building production apps. She has worked at leading tech companies and published multiple apps on the App Store.",
    experience: "8+ years"
  };

  const handleWhatsAppEnroll = (partTitle, price) => {
    const WHATSAPP_NUMBER = "8801234567890";
    const message = `Hi! I'm interested in enrolling in iOS Development Masterclass - ${partTitle} (৳${price}). Can you provide more details?`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const totalPrice = courseParts.reduce((sum, part) => sum + part.price, 0);
  const totalLessons = courseParts.reduce((sum, part) => sum + part.lessons, 0);
  const totalDuration = courseParts.reduce((sum, part) => sum + parseInt(part.duration), 0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800' : 'bg-transparent'
      }`}>
        <div className="mx-auto px-6 sm:px-8 lg:px-12 max-w-[1400px]">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">ALFAIIT</h1>
                <p className="text-xs text-slate-400 font-mono">Alfa Institute of IT</p>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/#courses" className="text-slate-300 hover:text-white transition-colors">Courses</Link>
              <Link href="/#about" className="text-slate-300 hover:text-white transition-colors">About</Link>
              <Link href="/#contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Link href="/#contact" className="px-4 py-2 text-slate-300 hover:text-white transition-colors">
                Get in Touch
              </Link>
              <Link href="/#courses" className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all shine">
                Browse Courses
              </Link>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-6 py-6 space-y-4">
              <Link href="/#courses" onClick={() => setIsMenuOpen(false)} className="block text-slate-300 hover:text-white transition-colors">Courses</Link>
              <Link href="/#about" onClick={() => setIsMenuOpen(false)} className="block text-slate-300 hover:text-white transition-colors">About</Link>
              <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="block text-slate-300 hover:text-white transition-colors">Contact</Link>
              <Link href="/#courses" onClick={() => setIsMenuOpen(false)} className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium text-center">
                Browse Courses
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 sm:px-8 lg:px-12 overflow-hidden">
        <div className="curve-shape"></div>
        
        <div className="blob w-96 h-96 bg-blue-500 top-0 left-0"></div>
        <div className="blob w-96 h-96 bg-purple-500 top-20 right-0"></div>

        <div className="mx-auto relative z-10 max-w-[1400px]">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Courses</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="inline-block px-4 py-2 bg-blue-600 rounded-full text-xs font-semibold uppercase mb-4">
                iOS Development
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                iOS Development Masterclass
              </h1>
              
              <p className="text-xl text-slate-300 mb-8">
                Complete iOS app development course from beginner to advanced. Learn SwiftUI, UIKit, Core Data, and publish professional apps to the App Store.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold">4.9</span>
                  <span className="text-slate-400">(150 ratings)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-400">150 students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-purple-400" />
                  <span className="text-slate-400">{totalDuration} hours total</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-pink-400" />
                  <span className="text-slate-400">{totalLessons} lessons</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm">SwiftUI</span>
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm">UIKit</span>
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm">Core Data</span>
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm">Combine</span>
                <span className="px-4 py-2 bg-slate-800 rounded-lg text-sm">App Store</span>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="gradient-border p-8 bg-slate-900 rounded-3xl sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-sm text-slate-400 mb-2">Complete Bundle</div>
                  <div className="text-4xl font-bold gradient-text mb-2">৳{totalPrice.toLocaleString()}</div>
                  <div className="text-sm text-slate-400">or purchase parts individually</div>
                </div>

                <button
                  onClick={() => handleWhatsAppEnroll("Complete Bundle", totalPrice)}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-2 mb-4"
                >
                  <span>Enroll Complete Course</span>
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="space-y-3 pt-6 border-t border-slate-800">
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Lifetime access</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Source code included</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Community support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 bg-slate-900/30">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-3xl font-bold mb-8">Your Instructor</h2>
          
          <div className="gradient-border p-8 bg-slate-900 rounded-3xl">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img 
                src={instructor.avatar}
                alt={instructor.name}
                className="w-32 h-32 rounded-2xl object-cover"
              />
              
              <div className="flex-1">
                <Link 
                  href="/instructor/sarah-chen"
                  className="text-2xl font-bold mb-2 hover:text-blue-400 transition-colors inline-block"
                >
                  {instructor.name}
                </Link>
                <p className="text-blue-400 mb-4">{instructor.title}</p>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {instructor.bio}
                </p>

                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="font-semibold">{instructor.rating}</span>
                    <span className="text-slate-400">Instructor Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-400" />
                    <span className="font-semibold">{instructor.students}</span>
                    <span className="text-slate-400">Students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                    <span className="font-semibold">{instructor.courses}</span>
                    <span className="text-slate-400">Courses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-pink-400" />
                    <span className="font-semibold">{instructor.experience}</span>
                    <span className="text-slate-400">Experience</span>
                  </div>
                </div>

                <Link 
                  href="/instructor/sarah-chen"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>View full profile</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Parts */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-3xl font-bold mb-4">Course Curriculum</h2>
          <p className="text-slate-400 text-lg mb-12">Three comprehensive parts covering beginner to advanced iOS development</p>

          <div className="space-y-8">
            {courseParts.map((part, idx) => (
              <div key={part.id} className="gradient-border p-8 bg-slate-900 rounded-3xl">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-semibold">
                        Part {part.id}
                      </span>
                      <span className="px-4 py-1.5 bg-slate-800 rounded-full text-sm">
                        {part.level}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{part.title}</h3>
                    <p className="text-slate-400 mb-4">{part.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-400" />
                        <span>{part.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-purple-400" />
                        <span>{part.lessons} lessons</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    <div className="text-3xl font-bold gradient-text">৳{part.price.toLocaleString()}</div>
                    <button
                      onClick={() => handleWhatsAppEnroll(part.title, part.price)}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2"
                    >
                      <span>Enroll Part {part.id}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Topics */}
                <div className="space-y-4 pt-6 border-t border-slate-800">
                  {part.topics.map((topic, topicIdx) => (
                    <div key={topicIdx} className="p-4 bg-slate-800/50 rounded-xl">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Play className="w-4 h-4 text-blue-400" />
                        {topic.title}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-6">
                        {topic.lessons.map((lesson, lessonIdx) => (
                          <div key={lessonIdx} className="flex items-center gap-2 text-sm text-slate-400">
                            <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                            <span>{lesson}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-slate-900/30">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-3xl font-bold mb-12">What You'll Learn</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Build complete iOS apps from scratch using SwiftUI",
              "Master UIKit for complex interface requirements",
              "Implement data persistence with Core Data",
              "Create responsive and adaptive layouts",
              "Work with REST APIs and networking",
              "Apply MVVM architecture pattern",
              "Use Combine framework for reactive programming",
              "Implement push notifications and background tasks",
              "Test and debug iOS applications",
              "Publish apps to the App Store",
              "Follow iOS development best practices",
              "Build portfolio-worthy projects"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-3xl font-bold mb-12">Requirements</h2>
          
          <div className="gradient-border p-8 bg-slate-900 rounded-3xl">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <span className="text-slate-300">A Mac computer (MacBook, iMac, or Mac Mini) running macOS</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <span className="text-slate-300">Xcode installed (free from Mac App Store)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <span className="text-slate-300">Basic understanding of programming concepts (helpful but not required)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <span className="text-slate-300">Enthusiasm to learn and build iOS apps!</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-16 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold gradient-text">ALFAIIT</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Alfa Institute of Information Technology - Learn programming from industry experts and build amazing projects.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-5">Courses</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link href="/#courses" className="hover:text-white transition-colors">iOS Development</Link></li>
                <li><Link href="/#courses" className="hover:text-white transition-colors">Python</Link></li>
                <li><Link href="/#courses" className="hover:text-white transition-colors">Django</Link></li>
                <li><Link href="/#courses" className="hover:text-white transition-colors">PHP & Laravel</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-5">Quick Links</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/#courses" className="hover:text-white transition-colors">All Courses</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-5">Contact</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>Dhaka, Bangladesh</li>
                <li>+880 1234-567890</li>
                <li>info@alfaiit.com</li>
                <li>
                  <button 
                    onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    WhatsApp Support
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-slate-800 text-center text-sm text-slate-400">
            <p>&copy; 2026 ALFAIIT - Alfa Institute of Information Technology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IOSCourseDetails;