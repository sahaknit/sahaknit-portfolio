"use client";
import React from "react";
import Image from "next/image";
import { HiDownload } from "react-icons/hi";

const workExperience = [
  {
    company: "NAKCREATE",
    role: "Founder & Lead Developer (Freelance)",
    duration: "2025 - Present",
    location: "Kampong Chhnang, Cambodia",
    logo: "/NAKCREATE_logo.png",
    description: [
      "Founded NAKCREATE, a freelance initiative focused on delivering high-quality web and design solutions.",
      "Collaborated with the Ministry of Information in Kampong Chhnang Province to design and develop their official news portal.",
      "Developed a custom WordPress website featuring a responsive UI/UX designed in Figma, ensuring accessibility and ease of use for the local community.",
    ],
  },
  {
    company: "Codebodia",
    role: "UI/UX Designer (Freelance)",
    duration: "July 2023 - 2024",
    location: "Phnom Penh, Cambodia",
    logo: "/codebodia.jpg",
    description: [
      "Collaborated within a freelance development team to design intuitive and user-centered interfaces for diverse projects.",
      "Created comprehensive wireframes, high-fidelity prototypes, and design systems to ensure visual consistency.",
      "Focused on enhancing user engagement through modern aesthetic designs and seamless navigation flows.",
    ],
  },
  {
    company: "MYFM News",
    role: "IT Support / Technical Support",
    duration: "Jan 2025 - Jan 2026",
    location: "Kampong Chhnang, Cambodia",
    description: [
      "Provided technical assistance and maintenance for broadcasting equipment, ensuring uninterrupted transmission.",
      "Resolved IT-related issues and supported studio operations by managing audiovisual setups.",
      "Collaborated with on-air teams to deliver high-quality radio programming and technical reliability.",
    ],
  },
  {
    company: "Sunrise Institute (CCNA Practical Lab)",
    role: "Network Architecture Specialist",
    duration: "Aug 2025",
    location: "Phnom Penh, Cambodia",
    description: [
      "Designed and deployed a multi-tier enterprise network with logical segmentation using VLANs for HR, Marketing, and IT.",
      "Configured high-availability protocols (HSRP) and redundant default gateways to ensure continuous connectivity.",
      "Implemented dynamic routing with OSPF and secured internet access using NAT with ACLs.",
      "Established secure remote access using RSA keys and local authentication databases for encrypted SSH.",
    ],
    attachments: [
      {
        name: "HSRP Guideline",
        file: "/01_Guideline CCNA2 FHRP (HSRP) updated.pdf",
      },
      {
        name: "ACL + NAT Configuration",
        file: "/CYG128C3_Vong_Sahaknit-ACL+NAT-AS-01.pdf",
      },
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="experience" className="py-12">
      <h1 className="my-10 text-center font-bold text-4xl text-gray-900 dark:text-white">
        Work Experience
        <hr className="w-6 h-1 mx-auto my-4 bg-yellow-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-8 max-w-4xl mx-auto">
        {workExperience.map((exp, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
              <div className="flex items-start gap-4">
                {exp.logo && (
                  <div className="flex-shrink-0">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={60}
                      height={60}
                      className="rounded-lg shadow-sm"
                    />
                  </div>
                )}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.role}</h2>
                  <h3 className="text-xl text-yellow-600 dark:text-yellow-500 font-semibold">{exp.company}</h3>
                </div>
              </div>
              <div className="text-left md:text-right">
                <p className="text-gray-600 dark:text-gray-400 font-medium">{exp.duration}</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">{exp.location}</p>
              </div>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            
            {exp.attachments && (
              <div className="flex flex-wrap gap-4 mt-4">
                {exp.attachments.map((file, i) => (
                  <a
                    key={i}
                    href={file.file}
                    download
                    className="inline-flex items-center px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-bold rounded-lg transition-colors shadow-md"
                  >
                    <HiDownload className="mr-2" size={18} />
                    {file.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;