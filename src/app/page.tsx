'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';

declare global {
  interface Window {
    ml: any;
  }
}
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] });

export default function LandingPage() {
  useEffect(() => {
    if (window.ml) {
      window.ml('show', {
        campaign: "mTgMHn",
      });
    }
  }, []);

  const features = [
    {
      title: "AI Resume Builder",
      description: "Create ATS-friendly resumes tailored to each job posting",
      imagePath: "/feature1.svg"
    },
    {
      title: "RAG-Powered Q&A",
      description: "Generate responses to random application questions using your information",
      imagePath: "/feature2.svg"
    },
    {
      title: "User Focused Design",
      description: "Eliminate all unnecessary clicks so you can focus on applying",
      imagePath: "/feature3.svg"
    }
  ];


  return (
    // Wrapper div to enable sticky footer
    <div className="flex flex-col min-h-screen">
      {/* Main content wrapper */}
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="px-4 py-20 bg-gradient-to-r from-blue-500 to-purple-500">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-4xl font-bold text-white mb-6 ${playfair.className}`}>
              Land interviews with AI
            </h1>
            <p className="text-xl text-white mb-8">
              Wasume crafts tailored resumes and answers all your job application questions
            </p>
            <div
              className="ml-embedded"
              data-account="1188403"
              data-form="mTgMHn"
            ></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Key Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
                  <div className="mb-6 flex justify-center">
                    <div className="relative w-48 h-48">
                      <Image
                        src={feature.imagePath}
                        alt={feature.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-700">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* How it works Section */}
        <section className="px-4 py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              How it works
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Enter Details",
                  description: "Provide your personal and professional information."
                },
                {
                  step: "2",
                  title: "Generate Resume",
                  description: "Create a tailored resume optimized for ATS."
                },
                {
                  step: "3",
                  title: "Answer Questions",
                  description: "Get AI-generated responses to job application queries."
                },
                {
                  step: "4",
                  title: "Land Interviews",
                  description: "Submit polished applications and secure interviews."
                }
              ].map(({ step, title, description }) => (
                <div key={step} className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-bold text-blue-500 mb-4">
                    {step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
                  <p className="text-gray-700">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full px-4 py-8 bg-gray-100 mt-auto">
        <div className="max-w-4xl mx-auto text-center text-gray-600">
          © 2024 Wasume. All rights reserved.
        </div>
      </footer>
    </div>
  );
}