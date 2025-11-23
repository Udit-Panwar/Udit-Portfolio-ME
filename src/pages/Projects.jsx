import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Hotel Website",
      description: "Welcome to our hotel, where comfort meets elegance and every stay is a memorable experience. Here, you can explore our beautifully designed rooms, world-class amenities, and exceptional services tailored to meet your needs. Each space is carefully curated to ensure a perfect blend of luxury and functionality. We are dedicated to providing an experience that combines relaxation with impeccable hospitality. Our commitment to excellence reflects in every detail, from our cuisine to our personalized services. Feel free to explore our offerings, make reservations, and discover the warmth of our hospitality. This website is not just an introduction to our hotel, but a reflection of our passion for creating unforgettable moments. We hope it inspires you to choose us for your next stay and experience true comfort and care.",
      link: "https://hotel-website-five-lac.vercel.app",
      github: "https://github.com/Udit-Panwar/Hotel-Website",
      icon: "🏨",
      color: "from-orange-500 to-red-500",
      hoverColor: "orange"
    },
    {
      title: "E-commerce App",
      description: "Welcome to our e-commerce platform, where shopping is made simple, fast, and secure. Explore a wide range of products across multiple categories, all curated to meet your needs and lifestyle. Enjoy a seamless browsing experience with easy navigation and detailed product descriptions. Our secure payment system ensures that your transactions are safe and hassle-free. Benefit from fast and reliable delivery straight to your doorstep. Stay updated with the latest deals, offers, and discounts to get the best value for your money. Our responsive customer support is always ready to assist you with any queries. Shop anytime, anywhere, on any device with our fully optimized platform. Experience convenience, reliability, and satisfaction with every purchase. Make your online shopping journey effortless and enjoyable with us.",
      link: "https://e-commerce-gray-phi-51.vercel.app",
      github: "https://github.com/Udit-Panwar/E-Commerce",
      icon: "🛒",
      color: "from-green-500 to-emerald-500",
      hoverColor: "green"
    },
    {
      title: "Car Racing",
      description: "Welcome to my JavaScript Car Game — an interactive racing experience that demonstrates my skills in game logic, animation, and browser APIs. This project showcases dynamic vehicle controls, collision detection, procedurally generated tracks, and responsive UI built with plain JavaScript and the Canvas API. Each level and mechanic was designed to highlight performance-aware coding, modular architecture, and attention to user experience. The game reflects my iterative learning process: from optimizing frame updates to polishing input handling and sound integration. You'll find code that balances readability with efficiency, plus documentation on how features were implemented and the tools used. I built this game to combine creativity with technical problem-solving, and it's a snapshot of my ability to deliver engaging interactive experiences.",
      link: "https://car-game-pi-rose.vercel.app",
      github: "https://github.com/Udit-Panwar/Car-Game",
      icon: "🏎️",
      color: "from-yellow-500 to-amber-500",
      hoverColor: "yellow"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 flex flex-col items-center px-10 py-20 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <span className="text-6xl">💼</span>
            <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 animate-gradient">
              My Projects
            </h2>
          </div>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Explore my latest work showcasing creativity, innovation, and technical expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105 hover:border-emerald-500/30 flex flex-col overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.2}s`, opacity: 0, animationFillMode: 'forwards' }}
            >
              {/* Gradient Header */}
              <div className={`p-6 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-5xl drop-shadow-lg">{project.icon}</span>
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">✨</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-green-400 transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6 line-clamp-6 group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="mt-auto space-y-3">
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300 group/btn"
                    >
                      <span>View Project</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                  )}
                  
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 hover:border-emerald-500/50 hover:scale-105 transition-all duration-300 group/github"
                    >
                      <span className="text-xl">💻</span>
                      <span>View Code</span>
                      <span className="group-hover/github:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-600">
          <div className="inline-block bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300">
            <p className="text-gray-300 text-lg mb-4">
              Want to see more? Check out my GitHub for additional projects!
            </p>
            <a 
              href="https://github.com/Udit-Panwar?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300"
            >
              <span className="text-2xl">💻</span>
              <span>Visit GitHub</span>
            </a>
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

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .line-clamp-6 {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}