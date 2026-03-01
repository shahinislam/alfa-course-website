"use client";

import SharedLayout from '@/components/SharedLayout';
import { Star, Users, BookOpen, Award } from 'lucide-react';
import Link from 'next/link';

export default function InstructorPage() {
  return (
    <SharedLayout>
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8">
            ← Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop"
                alt="Sarah Chen"
                className="w-full rounded-3xl mb-6"
              />
              
              <div className="gradient-border p-6 bg-slate-900 rounded-2xl">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Rating</span>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-semibold">4.9</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Students</span>
                    <span className="font-semibold">150</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Courses</span>
                    <span className="font-semibold">2</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold mb-2">Sarah Chen</h1>
              <p className="text-blue-400 text-xl mb-6">Senior iOS Developer & Tech Educator</p>
              
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Sarah is a passionate iOS developer with over 8 years of experience in the tech industry. 
                She specializes in Swift, SwiftUI, and UIKit, having built multiple successful applications 
                for the App Store. Sarah believes in practical, hands-on learning and is dedicated to helping 
                students master iOS development.
              </p>

              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <div className="space-y-4 mb-8">
                <div className="p-6 bg-slate-900 rounded-2xl">
                  <h3 className="font-bold text-lg">Master of Science in Computer Science</h3>
                  <p className="text-blue-400">Stanford University</p>
                  <p className="text-sm text-slate-400">2014 - 2016</p>
                </div>
                <div className="p-6 bg-slate-900 rounded-2xl">
                  <h3 className="font-bold text-lg">Bachelor of Science in Software Engineering</h3>
                  <p className="text-blue-400">MIT</p>
                  <p className="text-sm text-slate-400">2010 - 2014</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Experience</h2>
              <div className="space-y-4">
                <div className="p-6 bg-slate-900 rounded-2xl">
                  <h3 className="font-bold text-lg">Senior iOS Developer</h3>
                  <p className="text-blue-400">Apple Inc.</p>
                  <p className="text-sm text-slate-400 mb-2">2019 - 2023</p>
                  <p className="text-slate-300">Led development of key features for iOS native apps.</p>
                </div>
                <div className="p-6 bg-slate-900 rounded-2xl">
                  <h3 className="font-bold text-lg">iOS Developer</h3>
                  <p className="text-blue-400">Uber Technologies</p>
                  <p className="text-sm text-slate-400 mb-2">2017 - 2019</p>
                  <p className="text-slate-300">Developed and maintained Uber's iOS application.</p>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Courses</h2>
                <Link 
                  href="/course/ios-development-masterclass"
                  className="block p-6 bg-slate-900 rounded-2xl hover:bg-slate-800 transition-colors"
                >
                  <h3 className="font-bold text-lg mb-2">iOS Development Masterclass</h3>
                  <p className="text-slate-400 mb-4">Complete SwiftUI & UIKit Course</p>
                  <div className="flex gap-4 text-sm">
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      150 students
                    </span>
                    <span className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      4.9
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SharedLayout>
  );
}