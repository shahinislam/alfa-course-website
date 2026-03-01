"use client";

import React from 'react';
import { ArrowLeft, Star, Users, BookOpen, Award, Mail, Linkedin, Github, MapPin, Briefcase, GraduationCap, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const InstructorProfile = () => {
  const instructor = {
    name: "Sarah Chen",
    title: "Senior iOS Developer & Tech Educator",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop",
    location: "Dhaka, Bangladesh",
    rating: 4.9,
    totalStudents: 150,
    totalCourses: 2,
    totalReviews: 48,
    
    bio: "Sarah is a passionate iOS developer and educator with over 8 years of experience in the tech industry. She specializes in Swift, SwiftUI, and UIKit, having built and shipped multiple successful applications to the App Store. Sarah believes in practical, hands-on learning and is dedicated to helping students master iOS development through real-world projects.",
    
    education: [
      {
        degree: "Master of Science in Computer Science",
        institution: "Stanford University",
        year: "2014 - 2016",
        description: "Specialized in Mobile Computing and Human-Computer Interaction"
      },
      {
        degree: "Bachelor of Science in Software Engineering",
        institution: "MIT",
        year: "2010 - 2014",
        description: "Focus on iOS Development and User Interface Design"
      }
    ],
    
    experience: [
      {
        title: "Senior iOS Developer",
        company: "Apple Inc.",
        period: "2019 - 2023",
        description: "Led development of key features for iOS native apps. Mentored junior developers and conducted code reviews. Implemented SwiftUI components for major product releases."
      },
      {
        title: "iOS Developer",
        company: "Uber Technologies",
        period: "2017 - 2019",
        description: "Developed and maintained Uber's iOS application. Worked on real-time location features and payment integration. Improved app performance by 40%."
      },
      {
        title: "Junior iOS Developer",
        company: "Startup Tech Solutions",
        period: "2016 - 2017",
        description: "Built iOS applications from scratch. Collaborated with designers to implement pixel-perfect UIs. Integrated RESTful APIs and third-party services."
      }
    ],
    
    skills: [
      { name: "Swift", level: 95 },
      { name: "SwiftUI", level: 90 },
      { name: "UIKit", level: 95 },
      { name: "Core Data", level: 85 },
      { name: "Combine", level: 80 },
      { name: "iOS Architecture", level: 90 },
      { name: "Git & Version Control", level: 90 },
      { name: "REST APIs", level: 85 }
    ],
    
    achievements: [
      "Published 15+ apps on the App Store",
      "Apps featured by Apple 3 times",
      "Speaker at iOS Developer Conference 2022",
      "Contributed to open-source iOS libraries",
      "Mentored 150+ students to successful iOS careers",
      "Certified Apple Developer"
    ],
    
    courses: [
      {
        id: 1,
        title: "iOS Development Masterclass",
        subtitle: "SwiftUI & UIKit Complete Guide",
        students: 150,
        rating: 4.9,
        price: 12000,
        image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=800&h=500&fit=crop&q=80",
        link: "/course/ios-development-masterclass"
      },
      {
        id: 2,
        title: "Advanced Swift Programming",
        subtitle: "Protocol-Oriented Programming & Design Patterns",
        students: 89,
        rating: 4.8,
        price: 10000,
        image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&h=500&fit=crop&q=80",
        comingSoon: true
      }
    ],
    
    socialLinks: {
      email: "sarah.chen@alfaiit.com",
      linkedin: "https://linkedin.com/in/sarahchen",
      github: "https://github.com/sarahchen"
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
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
            <span>Back to Home</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="gradient-border p-8 bg-slate-900 rounded-3xl sticky top-24">
                <img 
                  src={instructor.avatar}
                  alt={instructor.name}
                  className="w-full aspect-square rounded-2xl object-cover mb-6"
                />
                
                <h1 className="text-2xl font-bold mb-2">{instructor.name}</h1>
                <p className="text-blue-400 mb-4">{instructor.title}</p>
                
                <div className="flex items-center gap-2 text-slate-400 mb-6">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{instructor.location}</span>
                </div>

                <div className="space-y-4 mb-6 pb-6 border-b border-slate-800">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="text-sm text-slate-400">Rating</span>
                    </div>
                    <span className="font-semibold">{instructor.rating}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-400" />
                      <span className="text-sm text-slate-400">Students</span>
                    </div>
                    <span className="font-semibold">{instructor.totalStudents}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-purple-400" />
                      <span className="text-sm text-slate-400">Courses</span>
                    </div>
                    <span className="font-semibold">{instructor.totalCourses}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-pink-400" />
                      <span className="text-sm text-slate-400">Reviews</span>
                    </div>
                    <span className="font-semibold">{instructor.totalReviews}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <a 
                    href={`mailto:${instructor.socialLinks.email}`}
                    className="flex items-center gap-3 p-3 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span className="text-sm">Email</span>
                  </a>
                  
                  <a 
                    href={instructor.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-blue-400" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  
                  <a 
                    href={instructor.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors"
                  >
                    <Github className="w-5 h-5 text-purple-400" />
                    <span className="text-sm">GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-12">
              {/* About */}
              <div>
                <h2 className="text-3xl font-bold mb-6">About {instructor.name}</h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  {instructor.bio}
                </p>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-blue-400" />
                  Education
                </h2>
                <div className="space-y-6">
                  {instructor.education.map((edu, idx) => (
                    <div key={idx} className="gradient-border p-6 bg-slate-900 rounded-2xl">
                      <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                      <p className="text-blue-400 mb-2">{edu.institution}</p>
                      <p className="text-sm text-slate-400 mb-3">{edu.year}</p>
                      <p className="text-slate-300">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Briefcase className="w-8 h-8 text-purple-400" />
                  Professional Experience
                </h2>
                <div className="space-y-6">
                  {instructor.experience.map((exp, idx) => (
                    <div key={idx} className="gradient-border p-6 bg-slate-900 rounded-2xl">
                      <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                      <p className="text-blue-400 mb-2">{exp.company}</p>
                      <p className="text-sm text-slate-400 mb-3">{exp.period}</p>
                      <p className="text-slate-300">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {instructor.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Award className="w-8 h-8 text-yellow-400" />
                  Achievements & Certifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {instructor.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-slate-900 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-slate-900/30">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-3xl font-bold mb-12">Courses by {instructor.name}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {instructor.courses.map((course) => (
              <div key={course.id} className="gradient-border bg-slate-900 rounded-3xl overflow-hidden card-hover group">
                <div className="relative overflow-hidden h-52">
                  <img 
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {course.comingSoon && (
                    <div className="absolute inset-0 bg-slate-950/80 flex items-center justify-center">
                      <span className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  {!course.comingSoon && (
                    <>
                      <div className="absolute top-5 right-5 px-4 py-2 bg-slate-950/80 backdrop-blur-sm rounded-full text-xs font-semibold text-yellow-400 flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5 fill-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="p-7">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Users className="w-4 h-4" />
                      <span>{course.students} students</span>
                    </div>
                    {!course.comingSoon && (
                      <span className="text-2xl font-bold gradient-text">৳{course.price.toLocaleString()}</span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-2.5 group-hover:text-blue-400 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-5">{course.subtitle}</p>

                  {course.comingSoon ? (
                    <button 
                      disabled
                      className="w-full px-6 py-3.5 bg-slate-800 rounded-xl text-slate-500 font-semibold cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  ) : (
                    <Link 
                      href={course.link}
                      className="block w-full px-6 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all text-center"
                    >
                      View Course Details
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstructorProfile;