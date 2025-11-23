import React from "react";

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 flex flex-col items-center justify-center px-10 py-20 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-rose-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-4xl w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <span className="text-6xl">📧</span>
            <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 animate-gradient">
              Contact Me
            </h2>
          </div>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Let's connect! Feel free to reach out for collaborations, opportunities, or just to say hi!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="space-y-6 mb-12">
          
          {/* Email Card */}
          <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 hover:scale-105 hover:border-pink-500/30 animate-fade-in-up animation-delay-200">
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">✉️</span>
              </div>
              <div className="flex-1">
                <p className="text-gray-400 text-sm font-medium mb-1">Email Address</p>
                <a 
                  href="mailto:uditpanwar08816@gmail.com"
                  className="text-white text-xl font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-400 hover:to-rose-400 transition-all duration-300"
                >
                  uditpanwar08816@gmail.com
                </a>
              </div>
              <div className="hidden sm:block">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-pink-500/20 group-hover:border-pink-500/50 transition-all duration-300">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl hover:shadow-rose-500/20 transition-all duration-300 hover:scale-105 hover:border-rose-500/30 animate-fade-in-up animation-delay-400">
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-rose-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📱</span>
              </div>
              <div className="flex-1">
                <p className="text-gray-400 text-sm font-medium mb-1">Phone Number</p>
                <a 
                  href="tel:+917668105755"
                  className="text-white text-xl font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-400 hover:to-purple-400 transition-all duration-300"
                >
                  +91-7668105755
                </a>
              </div>
              <div className="hidden sm:block">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-rose-500/20 group-hover:border-rose-500/50 transition-all duration-300">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-500/30 animate-fade-in-up animation-delay-600">
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">💼</span>
              </div>
              <div className="flex-1">
                <p className="text-gray-400 text-sm font-medium mb-1">LinkedIn Profile</p>
                <a 
                  href="https://www.linkedin.com/in/udit-panwar-306a272ab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300 break-all"
                >
                  linkedin.com/in/udit-panwar-306a272ab
                </a>
              </div>
              <div className="hidden sm:block">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">↗</span>
                </div>
              </div>
            </div>
          </div>


          {/* <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-500/30 animate-fade-in-up animation-delay-600">
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">💼</span>
              </div>
              <div className="flex-1">
                <p className="text-gray-400 text-sm font-medium mb-1">Github Profile</p>
                <a 
                  href="https://github.com/Udit-Panwar?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300 break-all"
                >
                 github.com/Udit-Panwar?tab=repositories
                </a>
              </div>
              <div className="hidden sm:block">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">↗</span>
                </div>
              </div>
            </div>
          </div> */}

        </div>

        {/* Social Media Links */}
        <div className="text-center animate-fade-in-up animation-delay-800">
          <p className="text-gray-300 text-lg mb-6">Or connect with me on social media</p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://github.com/Udit-Panwar?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-500/20 hover:to-purple-500/20 hover:border-pink-500/50 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
              title="GitHub"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">💻</span>
            </a>
            <a 
              href="https://x.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center hover:bg-gradient-to-br hover:from-rose-500/20 hover:to-pink-500/20 hover:border-rose-500/50 hover:scale-110 hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300"
              title="Twitter"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">🐦</span>
            </a>
            <a 
              href="https://www.instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 hover:border-purple-500/50 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
              title="Instagram"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">📸</span>
            </a>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center animate-fade-in-up animation-delay-1000">
          <div className="inline-block bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-pink-500/30 transition-all duration-300">
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision. 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-semibold"> Let's build something amazing together!</span>
            </p>
          </div>
        </div>

      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}