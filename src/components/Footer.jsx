import React from 'react';
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const AnimatedFooter = () => {
  const sizes = ['10px', '15px', '20px', '25px', '30px'];

  return (
    <footer className="relative bg-slate-500 text-white p-8 overflow-hidden">
      <div className="wave absolute top-0 left-0 w-full overflow-hidden rotate-360">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-indigo-600"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-black"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-indigo-600"
          ></path>
        </svg>
      </div>
      <div className="wave absolute top-0 right-0 w-full overflow-hidden rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-indigo-600"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-black"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-indigo-950"
          ></path>
        </svg>
      </div>
      <div className="wave absolute bottom-0 left-0 w-full overflow-hidden rotate-360">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-indigo-600"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-black"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-indigo-600"
          ></path>
        </svg>
      </div>
      <div className="wave absolute top-0 bottom-0 w-full overflow-hidden rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-indigo-600"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-black"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-indigo-950"
          ></path>
        </svg>
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        {Array.from({ length: 40 }).map((_, index) => {
          const size = sizes[Math.floor(Math.random() * sizes.length)];
          const opacity = Math.random() * 0.5 + 0.5;

          return (
            <div
              key={index}
              className="ball bg-white rounded-full"
              style={{
                width: size,
                height: size,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity,
                animationDelay: `${Math.random() * 2}s`,
                transform: 'translate(-50%, -50%)',
                position: 'absolute',
                animation: 'bounce 2s infinite',
              }}
            ></div>
          );
        })}
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-3xl font-bold mb-4 md:mb-0 animate-bounce">
          Harsh Sharma
        </h2>
        <nav>
          <ul className="flex space-x-6">
          </ul>
        </nav>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        {[
          { href: 'https://x.com/Harsh_j_Sharma', icon: <FaTwitter size={24} /> },
          { href: 'https://github.com/Tech-killer?tab=overview&from=2024-07-01&to=2024-07-31', icon: <FaGithub size={24} /> },
          { href: 'https://www.instagram.com/harsh.jsharma/?igsh=MWo3bDZ3OWszMzE1dw%3D%3D', icon: <FaInstagram size={24} /> },
          { href: 'https://www.linkedin.com/in/harsh-sharma-8b4a0828b/', icon: <FaLinkedin size={24} /> },
        ].map((social, index) => (
          <a
            key={index}
            href={social.href}
            className="text-white hover:text-indigo-200 transition-colors duration-300 transform hover:scale-110"
          >
            {social.icon}
          </a>
        ))}
      </div>
      <p className="text-center mt-8 animate-pulse">
        Harsh Sharma | © Copyright All rights reserved
      </p>
      <style >{`
        @keyframes waveAnimation {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .wave path {
          animation: waveAnimation 10s ease-in-out infinite;
        }
        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-15px);
          }
          60% {
            transform: translateY(-7px);
          }
        }
        .ball {
          animation: bounce 2s infinite;
        }
      `}</style>
    </footer>
  );
};

export default AnimatedFooter;
