"use client";
import React from "react";

const courses = [
  {
    title: "International Networking Engineer and Cyber Security",
    institution: "Sunrise Institute",
    duration: "Jan 2025 - Present",
    description: "In-depth study of Cisco CCNA curriculum, including routing, switching, and network security protocols.",
  },
  {
    title: "UIDD Course (User Interface & Design)",
    institution: "Royal University of Phnom Penh",
    duration: "Jan 2022 - Jun 2022",
    description: "Focused on user-centered design principles, wireframing, and interactive prototyping.",
  },
  {
    title: "Web Frontend Course",
    institution: "Etec Center",
    duration: "Dec 2021 - Feb 2022",
    description: "Comprehensive training in HTML, CSS, and JavaScript for building responsive web interfaces.",
  },
  {
    title: "Basic / Advance Java / SQL Server",
    institution: "Etec Center",
    duration: "Dec 2021 - Feb 2022",
    description: "Backend development fundamentals including object-oriented programming in Java and database management with SQL Server.",
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-12">
      <h1 className="my-10 text-center font-bold text-4xl text-gray-900 dark:text-white">
        Courses
        <hr className="w-6 h-1 mx-auto my-4 bg-yellow-500 border-0 rounded"></hr>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
        {courses.map((course, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{course.title}</h2>
            <div className="flex justify-between text-sm text-yellow-600 dark:text-yellow-500 font-semibold mb-3">
              <span>{course.institution}</span>
              <span>{course.duration}</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              {course.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;