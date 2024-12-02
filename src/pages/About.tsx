import React, { useEffect } from 'react';
import { Rocket, Users, Target, Calendar, ArrowRight, FileCheck, Lightbulb, Code, Layers } from 'lucide-react';
import { SignupForm } from '../components/SignupForm';
import { Link, useNavigate } from 'react-router-dom';

export function About() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="absolute top-4 left-4">
        <Link 
          to="/" 
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div 
              className="flex items-center justify-center mb-8 cursor-pointer"
              onClick={() => navigate('/')}
            >
              <FileCheck className="h-12 w-12 text-blue-600" />
              <span className="ml-2 text-3xl font-bold text-gray-900">BilldFlow</span>
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Revolutionizing Construction Billing
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              We're an ambitious startup on a mission to transform how the construction industry handles billing and payments.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Journey</h2>
            <p className="mt-4 text-lg text-gray-500">
              Building the future of construction payment management
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="relative p-6 bg-white rounded-lg border border-gray-200">
                <div className="absolute -top-4 left-6">
                  <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <Rocket className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Pre-Launch Phase</h3>
                <p className="mt-2 text-gray-500">
                  Currently gathering early adopters and refining our platform based on industry feedback
                </p>
              </div>

              <div className="relative p-6 bg-white rounded-lg border border-gray-200">
                <div className="absolute -top-4 left-6">
                  <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Q2 2024</h3>
                <p className="mt-2 text-gray-500">
                  Targeted beta launch with select partners and continued platform development
                </p>
              </div>

              <div className="relative p-6 bg-white rounded-lg border border-gray-200">
                <div className="absolute -top-4 left-6">
                  <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <Target className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Q4 2024</h3>
                <p className="mt-2 text-gray-500">
                  Full platform launch with comprehensive features and industry partnerships
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-500">
              Industry experts passionate about solving construction billing challenges
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {[
                {
                  name: 'Derek Burns',
                  role: 'CEO & Founder',
                  icon: Lightbulb,
                  bio: 'Transforming construction finance with 18 years of expertise. Building the future of seamless payments.',
                },
                {
                  name: 'Chief Technology Officer',
                  role: 'CTO',
                  icon: Code,
                  bio: 'Leading our technical innovation and platform development',
                },
                {
                  name: 'Head of Product',
                  role: 'Product',
                  icon: Layers,
                  bio: 'Shaping the future of construction payment solutions',
                },
              ].map((member) => (
                <div key={member.role} className="text-center">
                  <div className="space-y-4">
                    <div className="mx-auto h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center">
                      <member.icon className="h-12 w-12 text-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3 className="text-gray-900">{member.name}</h3>
                        <p className="text-blue-600">{member.role}</p>
                      </div>
                      <p className="text-gray-500">{member.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Early Access Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Join Our Early Access Program</h2>
            <p className="mt-4 text-lg text-gray-500">
              Be among the first to experience the future of construction billing
            </p>
          </div>

          <div className="mt-12 max-w-lg mx-auto">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
}