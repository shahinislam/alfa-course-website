"use client";

import React, { useState, useEffect } from 'react';
import { Search, Play, Star, Users, Clock, Award, ChevronRight, Menu, X, BookOpen, Code, Sparkles, TrendingUp, CheckCircle, ArrowRight, Mail, Phone, MapPin, Send, Youtube } from 'lucide-react';

const CoursePlatform = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [scrolled, setScrolled] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // WhatsApp contact number
  const WHATSAPP_NUMBER = "8801234567890"; // Replace with actual number

  const handleEnrollClick = (courseName, price) => {
    const message = `Hi! I'm interested in enrolling in ${courseName} (৳${price}). Can you provide more details?`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      // Using FormSubmit.co - free email service
      const response = await fetch('https://formsubmit.co/ajax/your-email@example.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: 'New Contact Form Submission - ALFAIIT',
        })
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setFormStatus(''), 3000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const courses = [
    {
      id: 1,
      title: "iOS Development Masterclass",
      subtitle: "SwiftUI & UIKit Complete Guide",
      category: "ios",
      level: "Beginner to Advanced",
      rating: 4.9,
      students: 150,
      duration: "42 hours",
      instructor: "Sarah Chen",
      price: 12000,
      image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=800&h=500&fit=crop&q=80",
      description: "Master iOS app development from scratch. Learn SwiftUI, UIKit, Core Data, and publish to the App Store.",
      topics: ["SwiftUI", "UIKit", "Core Data", "App Store Publishing", "Combine Framework"]
    },
    {
      id: 2,
      title: "Advanced Swift Programming",
      subtitle: "Protocol-Oriented Programming & Design Patterns",
      category: "ios",
      level: "Advanced",
      rating: 4.8,
      students: 89,
      duration: "28 hours",
      instructor: "Michael Torres",
      price: 10000,
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&h=500&fit=crop&q=80",
      description: "Deep dive into advanced Swift concepts, design patterns, and protocol-oriented programming.",
      topics: ["Generics", "Protocol-Oriented", "Memory Management", "Concurrency", "Design Patterns"]
    },
    {
      id: 3,
      title: "Python for Data Science",
      subtitle: "NumPy, Pandas & Machine Learning",
      category: "python",
      level: "Intermediate",
      rating: 4.7,
      students: 234,
      duration: "35 hours",
      instructor: "Dr. Emily Watson",
      price: 9500,
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=500&fit=crop&q=80",
      description: "Comprehensive Python data science course covering analysis, visualization, and machine learning.",
      topics: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow Basics"]
    },
    {
      id: 4,
      title: "Django Web Development",
      subtitle: "Build Production-Ready Web Applications",
      category: "django",
      level: "Intermediate",
      rating: 4.8,
      students: 178,
      duration: "38 hours",
      instructor: "James Rodriguez",
      price: 11000,
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&h=500&fit=crop&q=80",
      description: "Learn Django framework to build scalable web applications with best practices.",
      topics: ["Django ORM", "REST APIs", "Authentication", "Deployment", "Testing"]
    },
    {
      id: 5,
      title: "PHP Modern Development",
      subtitle: "PHP 8.x Features & Best Practices",
      category: "php",
      level: "Beginner to Intermediate",
      rating: 4.6,
      students: 145,
      duration: "30 hours",
      instructor: "Anna Kim",
      price: 8500,
      image: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=800&h=500&fit=crop&q=80",
      description: "Modern PHP development with latest features, security practices, and real-world projects.",
      topics: ["PHP 8.x Features", "Object-Oriented PHP", "Security", "MySQL", "Composer"]
    },
    {
      id: 6,
      title: "Laravel Complete Course",
      subtitle: "Modern PHP Framework Mastery",
      category: "laravel",
      level: "Intermediate to Advanced",
      rating: 4.9,
      students: 198,
      duration: "45 hours",
      instructor: "David Kumar",
      price: 12500,
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=500&fit=crop&q=80",
      description: "Complete Laravel framework course covering everything from basics to advanced patterns.",
      topics: ["Eloquent ORM", "Blade Templates", "APIs", "Queue Jobs", "Laravel Nova"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Courses', count: courses.length },
    { id: 'ios', name: 'iOS Development', count: courses.filter(c => c.category === 'ios').length },
    { id: 'python', name: 'Python', count: courses.filter(c => c.category === 'python').length },
    { id: 'django', name: 'Django', count: courses.filter(c => c.category === 'django').length },
    { id: 'php', name: 'PHP', count: courses.filter(c => c.category === 'php').length },
    { id: 'laravel', name: 'Laravel', count: courses.filter(c => c.category === 'laravel').length }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Active Students" },
    { icon: BookOpen, value: "15+", label: "Expert Courses" },
    { icon: Award, value: "98%", label: "Success Rate" },
    { icon: TrendingUp, value: "4.8", label: "Average Rating" }
  ];

  const features = [
    {
      icon: Code,
      title: "Hands-On Projects",
      description: "Build real-world applications while learning"
    },
    {
      icon: Sparkles,
      title: "Expert Instructors",
      description: "Learn from industry professionals"
    },
    {
      icon: CheckCircle,
      title: "Certificates",
      description: "Earn verified completion certificates"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join our active learning community"
    }
  ];

  const filteredCourses = activeTab === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4" onClick={() => setShowVideoModal(false)}>
          <div className="relative w-full max-w-4xl aspect-video bg-slate-900 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-slate-800/80 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Course Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800' : 'bg-transparent'
      }`}>
        <div className="mx-auto px-6 sm:px-8 lg:px-12 max-w-[1400px]">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">ALFAIIT</h1>
                <p className="text-xs text-slate-400 font-mono">Alfa Institute of IT</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#courses" className="text-slate-300 hover:text-white transition-colors">Courses</a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a href="#contact" className="px-4 py-2 text-slate-300 hover:text-white transition-colors">
                Get in Touch
              </a>
              <a href="#courses" className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all shine">
                Browse Courses
              </a>
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
              <a href="#courses" onClick={() => setIsMenuOpen(false)} className="block text-slate-300 hover:text-white transition-colors">Courses</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-slate-300 hover:text-white transition-colors">About</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-slate-300 hover:text-white transition-colors">Contact</a>
              <a href="#courses" onClick={() => setIsMenuOpen(false)} className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium text-center">
                Browse Courses
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 sm:px-8 lg:px-12 overflow-hidden">
        <div className="curve-shape"></div>
        
        <div className="blob w-96 h-96 bg-blue-500 top-0 left-0"></div>
        <div className="blob w-96 h-96 bg-purple-500 top-20 right-0"></div>
        <div className="blob w-96 h-96 bg-pink-500 bottom-0 left-1/2"></div>

        <div className="mx-auto relative z-10 max-w-[1400px]">
          <div className="text-center mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900/50 border border-slate-700 rounded-full mb-10 scroll-fade-in">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-slate-300">Join 500+ students learning with us</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight scroll-fade-in stagger-1 px-4">
              Master Programming at
              <span className="gradient-text"> Alfa Institute of IT</span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-12 mx-auto max-w-2xl scroll-fade-in stagger-2 px-4">
              From iOS development to Python, Django, PHP, and Laravel. Learn from industry experts and build real-world projects in Bangladesh.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20 scroll-fade-in stagger-3 px-4">
              <a href="#courses" className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/40 transition-all flex items-center gap-2 shine">
                <span>Explore Courses</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <button 
                onClick={() => setShowVideoModal(true)}
                className="px-10 py-4 bg-slate-800 rounded-full text-white font-semibold text-lg hover:bg-slate-700 transition-all flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 scroll-fade-in stagger-4 px-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-4">
                    <stat.icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-slate-400 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 sm:px-8 lg:px-12 bg-slate-900/30">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">About ALFAIIT</h2>
              <h3 className="text-2xl text-blue-400 mb-6">Alfa Institute of Information Technology</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                ALFAIIT is a premier institute dedicated to providing quality IT education in Bangladesh. We specialize in modern programming languages and frameworks, helping students build successful careers in technology.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Our expert instructors bring real-world industry experience to the classroom, ensuring our students learn practical skills that are in high demand in today's job market.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-slate-300">Industry-experienced instructors with practical knowledge</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-slate-300">Hands-on projects and real-world applications</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-slate-300">Flexible learning schedules for working professionals</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-slate-300">Career guidance and job placement support</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="gradient-border p-8 bg-slate-900 rounded-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80" 
                  alt="Students learning at ALFAIIT"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 relative">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-5">Why Choose ALFAIIT?</h2>
            <p className="text-slate-400 text-lg lg:text-xl">Everything you need to succeed in your learning journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="gradient-border p-8 bg-slate-900 rounded-3xl card-hover">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-5">
                  <feature.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-5">Popular Courses</h2>
            <p className="text-slate-400 text-lg lg:text-xl">Start learning from our expert-curated courses</p>
          </div>

          <div className="mx-auto mb-16 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search for courses..."
                className="w-full pl-14 pr-6 py-5 bg-slate-900 border border-slate-700 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors text-base"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-7 py-3.5 rounded-full font-medium transition-all text-sm lg:text-base ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="gradient-border bg-slate-900 rounded-3xl overflow-hidden card-hover group">
                <div className="relative overflow-hidden h-52">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-5 right-5 px-4 py-2 bg-slate-950/80 backdrop-blur-sm rounded-full text-xs font-semibold text-yellow-400 flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="absolute top-5 left-5 px-4 py-2 bg-blue-600 rounded-full text-xs font-semibold uppercase">
                    {course.category}
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-slate-400 font-mono">{course.level}</span>
                    <span className="text-2xl font-bold gradient-text">৳{course.price.toLocaleString()}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-2.5 group-hover:text-blue-400 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-5">{course.subtitle}</p>
                  
                  <p className="text-sm text-slate-300 mb-5 line-clamp-2 leading-relaxed">{course.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {course.topics.slice(0, 3).map((topic, topicIdx) => (
                      <span key={topicIdx} className="px-3 py-1.5 bg-slate-800 rounded-lg text-xs text-slate-300">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-5 border-t border-slate-800">
                    <div className="flex items-center gap-5 text-sm text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4" />
                        <span>{course.students}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleEnrollClick(course.title, course.price)}
                    className="w-full mt-5 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-2 shine"
                  >
                    <span>Enroll via WhatsApp</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 sm:px-8 lg:px-12 bg-slate-900/30">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-5">Get in Touch</h2>
            <p className="text-slate-400 text-lg lg:text-xl">Have questions? We'd love to hear from you</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="space-y-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Address</h3>
                    <p className="text-slate-400">Alfa Institute of Information Technology<br />Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <p className="text-slate-400">+880 1234-567890</p>
                    <button 
                      onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
                      className="mt-2 text-green-400 hover:text-green-300 flex items-center gap-2"
                    >
                      <span>WhatsApp Us</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-slate-400">info@alfaiit.com</p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 bg-slate-900 rounded-2xl">
                <h3 className="font-semibold text-lg mb-3">Office Hours</h3>
                <div className="space-y-2 text-slate-400">
                  <p>Saturday - Thursday: 9:00 AM - 8:00 PM</p>
                  <p>Friday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="gradient-border p-8 bg-slate-900 rounded-3xl">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="+880 1234-567890"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                {formStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400">
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="curve-shape"></div>
        <div className="mx-auto text-center relative z-10 max-w-4xl">
          <div className="gradient-border p-14 bg-slate-900 rounded-3xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-5">Ready to Start Learning?</h2>
            <p className="text-slate-400 text-lg lg:text-xl mb-10 mx-auto leading-relaxed max-w-xl">
              Join hundreds of students already learning at ALFAIIT. Get instant access to quality IT education.
            </p>
            <a 
              href="#courses"
              className="inline-flex px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/40 transition-all items-center gap-2 shine"
            >
              <span>Browse Our Courses</span>
              <ArrowRight className="w-5 h-5" />
            </a>
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
                <li><a href="#courses" className="hover:text-white transition-colors">iOS Development</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors">Python</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors">Django</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors">PHP & Laravel</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-5">Quick Links</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors">All Courses</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Support</a></li>
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

export default CoursePlatform;