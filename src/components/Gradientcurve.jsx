import React from 'react';

const GradientCurve = () => {
  return (
    <div className="relative w-screen h-24 bg-black">
      {/* Curve SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="curve-gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#ff1b6b" />
            <stop offset="100%" stopColor="#45caff" />
          </linearGradient>
        </defs>

        {/* Curved Stroke Only (No Fill) */}
        <path
          d="M0 80C320 40 480 0 720 0C960 0 1120 40 1440 80"
          fill="none"
          stroke="url(#curve-gradient)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Glow Effect */}
        <path
          d="M0 80C320 40 480 0 720 0C960 0 1120 40 1440 80"
          fill="none"
          stroke="url(#curve-gradient)"
          strokeWidth="6"
          strokeOpacity="0.3"
          className="blur-md"
        />
      </svg>
    </div>
  );
};

export default GradientCurve;
