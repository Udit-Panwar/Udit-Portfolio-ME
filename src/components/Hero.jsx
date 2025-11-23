import React from "react";
import profileImg from "../assets/img.webp";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center px-6 py-20 relative overflow-hidden">

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">

        {/* Left Side - Text Content with Modern Design */}
        <div className="flex-1 flex flex-col justify-center space-y-6 animate-fade-in-left">

          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-full px-4 py-2 w-fit">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-red-300 text-sm font-medium">Available for opportunities</span>
          </div>

          {/* Main Heading with Gradient */}
          <h1 className="text-6xl lg:text-7xl font-black leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 animate-gradient">
              Hello & Welcome
            </span>
            <br />
            <span className="text-white">I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Udit Panwar
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 font-light max-w-xl">
           
            AutoCAD Designer | Creating precise technical drawings and 2D/3D designs
          </p>

          {/* Description Card with Glass Effect */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:border-purple-500/30 group">
            {/* <p className="text-gray-200 leading-relaxed"> 
              Passionate Java Full Stack student with a love for <span className="text-purple-400 font-semibold">problem-solving</span> and <span className="text-red-400 font-semibold">innovation</span>. 
              Skilled in building dynamic, responsive, and efficient web applications using modern technologies like <span className="text-blue-400">React</span>, <span className="text-yellow-400">JavaScript</span>, and <span className="text-orange-400">Core Java</span>.
              <br /><br />
              Constantly exploring new tools and frameworks to improve development efficiency. Enthusiastic learner who enjoys working on real-world projects and turning creative ideas into working solutions.
            </p> */}
            <p className="text-gray-200 leading-relaxed">
              Dedicated AutoCAD Designer with 2+ years of hands-on experience in <span className="text-purple-400 font-semibold">technical drafting</span> and <span className="text-red-400 font-semibold">design precision</span>.
              Skilled in creating detailed 2D/3D drawings, architectural layouts, and mechanical designs using <span className="text-blue-400">AutoCAD</span>, <span className="text-yellow-400">design documentation</span>, and <span className="text-orange-400">CAD workflows</span>.
              <br /><br />
              Constantly refining my design techniques and exploring advanced CAD tools to enhance productivity and accuracy. Passionate about translating client requirements into precise, production-ready drawings and collaborating on real-world design projects that bring visions to life.
            </p>
          </div>


        </div>

        {/* Right Side - Image with 3D Effect */}
        <div className="flex-1 flex justify-center items-center animate-fade-in-right">
          <div className="relative group">

            {/* Rotating Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 animate-spin-slow"></div>

            {/* Image Container */}
            <div className="relative w-80 h-96 lg:w-96 lg:h-[500px]">
              <img
                src={profileImg}
                alt="Udit Panwar"
                className="relative w-full h-full rounded-3xl shadow-2xl object-cover border-4 border-white/10 group-hover:scale-105 transition-transform duration-500"
              />

              {/* Floating Stats Cards */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-4 shadow-xl animate-float">
                <p className="text-white text-sm font-semibold">Mechanical</p>
                <p className="text-white text-2xl font-bold">Designer</p>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl p-4 shadow-xl animate-float animation-delay-1000">
                <p className="text-white text-sm font-semibold">Problem</p>
                <p className="text-white text-2xl font-bold">Solver</p>
              </div>
            </div>

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
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-fade-in-left {
          animation: fade-in-left 1s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
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