import React from "react";

export default function AboutMe() {
  return (
    <div className="bg-slate-200 dark:bg-slate-800 py-12 px-6 md:px-12 lg:px-24 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold  mb-4">About Me</h2>
      <p className="text-lg  leading-relaxed mb-4">
        Hi, I&apos;m <span className="font-semibold ">Arash Salehkhah</span>, a
        passionate Software Developer with over 5 years of professional
        experience. My tech journey began with C/C++, paving the way to
        expertise in JavaScript and backend development using Node.js.
      </p>
      <p className="text-lg  leading-relaxed mb-4">
        I specialize in creating robust REST APIs, crafting Telegram bots, and
        developing scalable backend solutions with pure Node.js and various
        frameworks. On the frontend, I thrive in building sleek, interactive web
        applications using React and Next.js, leveraging its server-side
        capabilities for optimal performance.
      </p>
      <p className="text-lg  leading-relaxed">
        Currently, I’m advancing my expertise by pursuing a Master’s degree in
        Computer Engineering, with a focus on{" "}
        <span className="font-semibold 00">AI & Robotics</span>. My commitment
        to innovation and problem-solving drives me to create impactful,
        efficient software solutions.
      </p>
    </div>
  );
}
