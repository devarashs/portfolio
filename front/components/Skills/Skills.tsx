import React from "react";

export default function Skills() {
  return (
    <div className="flex flex-col gap-5">
      <div className="dark:bg-slate-900 p-5 rounded-md flex flex-col gap-5">
        <h3 className="font-bold text-2xl p-3 md:ml-20">Skills</h3>
        <p className="dark:bg-slate-800 p-5 rounded-md transition-all scale-95 hover:scale-100 duration-500 cursor-pointer">
          I am a dedicated and experienced software developer specializing in
          Node.js for both backend and frontend applications. Over the years, I
          have honed my expertise in building scalable and efficient solutions
          using tools like Express, MongoDB, and Mongoose to develop robust
          RESTful APIs and server-side architectures.
        </p>
        <p className="dark:bg-slate-800 p-5 rounded-md transition-all scale-95 hover:scale-100 duration-500 cursor-pointer">
          On the frontend, I leverage the power of Next.js, React, and Vite to
          craft responsive, high-performance user interfaces tailored to modern
          web standards. My approach emphasizes efficiency, clean design, and
          delivering seamless user experiences.
        </p>
        <p className="dark:bg-slate-800 p-5 rounded-md transition-all scale-95 hover:scale-100 duration-500 cursor-pointer">
          Beyond development, I am skilled in DevOps and server management, with
          extensive experience deploying Node.js applications in production
          environments. I am proficient in CI/CD pipelines, ensuring
          streamlined, reliable deployments and efficient workflows.
        </p>
        <p className="dark:bg-slate-800 p-5 rounded-md transition-all scale-95 hover:scale-100 duration-500 cursor-pointer">
          Whether it&apos;s architecting backend systems, building dynamic
          user-facing applications, or managing cloud-based infrastructure, I
          bring a comprehensive skill set to deliver end-to-end solutions that
          meet and exceed expectations.
        </p>
      </div>
      <div className="dark:bg-slate-900 p-5 rounded-md flex flex-col gap-5">
        <h3 className="font-bold text-2xl p-3 md:ml-20">My Journey</h3>
        <p className="dark:bg-slate-800 p-5 rounded-md transition-all scale-95 hover:scale-100 duration-500 cursor-pointer">
          My journey in software development began with building simple
          applications in C++ during the early days of my bachelor&apos;s degree
          in Computer Engineering. This foundational experience sparked my
          passion for programming, and I haven’t looked back since.
        </p>
        <p className="dark:bg-slate-800 p-5 rounded-md transition-all scale-95 hover:scale-100 duration-500 cursor-pointer">
          I carved out a niche for myself in the industry through Node.js, a
          versatile and widely-adopted JavaScript framework that enables the
          creation of fast and scalable applications. Its efficiency and
          flexibility allowed me to deliver diverse solutions, solidifying my
          place in the market.
        </p>
        <p className="dark:bg-slate-800 p-5 rounded-md transition-all scale-95 hover:scale-100 duration-500 cursor-pointer">
          Learning and growth have always been central to my career. As I pursue
          a master’s degree in Computer Engineering with a focus on AI and
          Robotics, I am also exploring new frontiers in server-side
          development. Currently, I am expanding my expertise by learning Go
          (Golang) to build ultra-fast APIs and servers, ensuring I stay at the
          cutting edge of technology.
        </p>
      </div>
    </div>
  );
}
