"use client";

import SharedLayout from '@/components/SharedLayout';
import { Clock, Users, Star, CheckCircle, BookOpen, Play, ChevronRight, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function IOSCoursePage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPart, setSelectedPart] = useState<any>(null);
  const WHATSAPP_NUMBER = "8801234567890";

  const handleEnrollClick = (part: any) => {
    setSelectedPart(part);
    setShowModal(true);
  };

  const handleWhatsAppEnroll = () => {
    if (selectedPart) {
      const message = `Hi! I'm interested in enrolling in iOS Development Masterclass - ${selectedPart.title} (৳${selectedPart.price.toLocaleString()}). Can you provide more details?`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
      setShowModal(false);
    }
  };

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
          lessons: [
            "Setting up Xcode and Development Environment",
            "Swift Playground - Your First Steps",
            "Building Your First iOS App",
            "Understanding iOS Architecture and MVC"
          ]
        },
        {
          title: "Swift Programming Basics",
          lessons: [
            "Variables, Constants, and Data Types",
            "Operators and Expressions",
            "Control Flow - If/Else and Switch",
            "Loops - For, While, Repeat-While",
            "Functions and Closures",
            "Optionals and Optional Binding"
          ]
        },
        {
          title: "SwiftUI Fundamentals",
          lessons: [
            "Views and Modifiers",
            "Text, Image, and Button Components",
            "Stacks - VStack, HStack, ZStack",
            "State and Binding",
            "Lists and ScrollView",
            "Navigation and NavigationView",
            "Forms and User Input",
            "Basic Animations"
          ]
        },
        {
          title: "Building Your First Apps",
          lessons: [
            "Todo List App - Part 1",
            "Todo List App - Part 2",
            "Weather App with SF Symbols",
            "Calculator App",
            "Working with User Defaults",
            "Image Picker and Camera Integration",
            "Basic Networking Introduction",
            "App Icons and Launch Screens"
          ]
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
          lessons: [
            "Custom View Modifiers",
            "ViewBuilder and Custom Containers",
            "GeometryReader and Preferences",
            "Advanced Animations and Transitions",
            "Gestures - Tap, Drag, Pinch, Rotate",
            "Custom Shapes and Paths",
            "Canvas and Drawing",
            "MatchedGeometryEffect"
          ]
        },
        {
          title: "UIKit Integration",
          lessons: [
            "UIKit Basics and View Controllers",
            "UITableView and Custom Cells",
            "UICollectionView and Layouts",
            "Auto Layout Programmatically",
            "UINavigationController and Segues",
            "Bridging UIKit to SwiftUI",
            "UIViewRepresentable Protocol",
            "Coordinator Pattern"
          ]
        },
        {
          title: "Data Persistence with Core Data",
          lessons: [
            "Core Data Stack Setup",
            "Entities, Attributes, and Relationships",
            "NSManagedObject and CRUD Operations",
            "Fetch Requests and Predicates",
            "Sorting and Filtering Data",
            "Core Data with SwiftUI",
            "Migrations and Versioning",
            "Performance Optimization"
          ]
        },
        {
          title: "Networking and APIs",
          lessons: [
            "URLSession and Data Tasks",
            "REST API Integration",
            "JSON Parsing with Codable",
            "Async/Await in Swift",
            "Error Handling and Retry Logic",
            "Image Downloading and Caching",
            "Alamofire Framework Introduction",
            "Building a News App with APIs"
          ]
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
          lessons: [
            "MVVM Pattern in SwiftUI",
            "View Models and Observable Objects",
            "Combine Framework Basics",
            "Publishers and Subscribers",
            "Dependency Injection",
            "Clean Architecture Principles"
          ]
        },
        {
          title: "Advanced Features",
          lessons: [
            "Push Notifications - Local and Remote",
            "Core Location and MapKit",
            "Camera and Photo Library",
            "Background Tasks and App Refresh",
            "WidgetKit and Home Screen Widgets",
            "App Clips Introduction"
          ]
        },
        {
          title: "Testing and Debugging",
          lessons: [
            "Unit Testing with XCTest",
            "Writing Testable Code",
            "UI Testing Basics",
            "Debugging Tools and Instruments",
            "Performance Profiling",
            "Memory Leak Detection"
          ]
        },
        {
          title: "App Store Deployment",
          lessons: [
            "Apple Developer Program",
            "Code Signing and Certificates",
            "Provisioning Profiles",
            "TestFlight Beta Testing",
            "App Store Connect Setup",
            "App Submission Process",
            "App Store Optimization (ASO)",
            "Handling App Reviews and Updates"
          ]
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
    experience: "8+ years"
  };

  const totalPrice = courseParts.reduce((sum, part) => sum + part.price, 0);
  const totalLessons = courseParts.reduce((sum, part) => sum + part.lessons, 0);
  const totalDuration = courseParts.reduce((sum, part) => sum + parseInt(part.duration), 0);

  return (
    <SharedLayout>
      {/* WhatsApp Enrollment Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4" onClick={() => setShowModal(false)}>
          <div className="relative w-full max-w-md bg-slate-900 rounded-3xl p-8" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-bold mb-4">Enroll Now</h3>
            
            {selectedPart && (
              <>
                <div className="mb-6 p-4 bg-slate-800 rounded-xl">
                  <span className="text-sm text-slate-400">Course Part</span>
                  <h4 className="text-lg font-bold mt-1">{selectedPart.title}</h4>
                  <div className="flex items-center gap-4 mt-3 text-sm text-slate-400">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {selectedPart.lessons} lessons
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {selectedPart.duration}
                    </span>
                  </div>
                  <div className="text-2xl font-bold gradient-text mt-3">
                    ৳{selectedPart.price.toLocaleString()}
                  </div>
                </div>

                <button
                  onClick={handleWhatsAppEnroll}
                  className="w-full px-6 py-4 bg-green-600 hover:bg-green-700 rounded-xl text-white font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Continue with WhatsApp</span>
                </button>

                <p className="text-xs text-slate-400 text-center mt-4">
                  You'll be redirected to WhatsApp to complete your enrollment
                </p>
              </>
            )}
          </div>
        </div>
      )}

      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
            ← Back to Home
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

              <div className="flex flex-wrap gap-2 mb-12">
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

                <div className="space-y-3 pt-6 border-t border-slate-800">
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Lifetime access</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Source code included</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>Community support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Instructor Section */}
          <div className="mt-16 gradient-border p-8 bg-slate-900 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6">Your Instructor</h2>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img 
                src={instructor.avatar}
                alt={instructor.name}
                className="w-24 h-24 rounded-2xl object-cover flex-shrink-0"
              />
              
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{instructor.name}</h3>
                <p className="text-blue-400 mb-4">{instructor.title}</p>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Sarah is a senior iOS developer with 8+ years of experience building production apps. She has worked at leading tech companies and published multiple apps on the App Store.
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
                </div>

                <Link 
                  href="/instructor/sarah-chen"
                  prefetch={false}
                  className="relative z-10 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  <span>View full instructor profile</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Course Parts with Complete Lessons */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-4">Course Curriculum</h2>
            <p className="text-slate-400 text-lg mb-12">Three comprehensive parts covering beginner to advanced iOS development</p>

            <div className="space-y-8">
              {courseParts.map((part) => (
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
                        onClick={() => handleEnrollClick(part)}
                        className="relative z-10 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2"
                      >
                        <span>Enroll Part {part.id}</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Complete Lesson List */}
                  <div className="space-y-4 pt-6 border-t border-slate-800">
                    {part.topics.map((topic, topicIdx) => (
                      <div key={topicIdx} className="p-5 bg-slate-800/50 rounded-xl">
                        <h4 className="font-semibold mb-4 flex items-center gap-2 text-lg">
                          <Play className="w-5 h-5 text-blue-400" />
                          {topic.title}
                        </h4>
                        <div className="space-y-2 ml-7">
                          {topic.lessons.map((lesson, lessonIdx) => (
                            <div key={lessonIdx} className="flex items-start gap-3 text-sm text-slate-300 py-2">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
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

          {/* What You'll Learn */}
          <div className="mt-16">
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
                <div key={idx} className="flex items-start gap-3 p-4 bg-slate-900 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Requirements</h2>
            
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
        </div>
      </section>
    </SharedLayout>
  );
}