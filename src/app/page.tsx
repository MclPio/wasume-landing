'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    ml: any;
  }
}

export default function LandingPage() {
  useEffect(() => {
    // Initialize MailerLite form after component mounts
    if (window.ml) {
      window.ml('show', {
        campaign: "mTgMHn",
      });
    }
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 py-20 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Land interviews with AI
          </h1>
          <p className="text-xl text-white mb-8">
            Wasume crafts tailored resumes and answers all your job application questions
          </p>
          
          {/* MailerLite Form will be injected here */}
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
          <h2 className="text-3xl font-bold text-center mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Feature 1', 'Feature 2', 'Feature 3'].map((feature) => (
              <div key={feature} className="text-center p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-gray-600">
                  Describe your feature's benefit here.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center text-gray-600">
          © 2024 Wasume. All rights reserved.
        </div>
      </footer>
    </main>
  );
}