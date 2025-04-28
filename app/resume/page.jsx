"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPhp } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiPhp } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { motion } from "framer-motion";

// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

// experience data
const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description:
        "List of my main work experiences in web development, communication and academic teaching.",
    items: [
        {
            company: "Physical therapy studio",
            position: "Communication and web development",
            duration: "2024 - Present",
        },
        {
            company: "Web editorial - UniTo",
            position: "Web and content development",
            duration: "2025 - Present",
        },
        {
            company: "Genitori Sempre Lessona",
            position: "Web development",
            duration: "2024 - 2025",
        },
        {
            company: "University of Turin",
            position: "Data Analysis Teaching Assistant",
            duration: "2024 - 2025",
        },
        {
            company: "Web editorial - UniTo",
            position: "Web and content development",
            duration: "2023 - 2024",
        },
        {
            company: "City of Candelo (BI)",
            position: "Customer reception",
            duration: "2019 - 2020",
        },
    ],
};

// education data
const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description: "List of my main academic and educational experiences. ",
    items: [
        {
            institution: "Master's degree - UniTo",
            degree: "Communication, ICTs and Media",
            duration: "2024-2026",
        },
        {
            institution: "Bachelor's degree - UniTo",
            degree: "ICTs",
            duration: "2021 - 2024",
        },
        {
            institution: "Manhattan College NYC",
            degree: "English course",
            duration: "2022",
        },
        {
            institution: "Rotary Club",
            degree: "Intercultural exchange - Argentina",
            duration: "2019",
        },
        {
            institution: "ILC School Varese",
            degree: "Spanish course",
            duration: "2018",
        },
        {
            institution: "Highschool siploma",
            degree: "Liceo Linguistico",
            duration: "2016 - 2021",
        },
    ],
};

// skills data
const skills = {
    title: "My Skills",
    description: "An overview of the tools I use most for my projects.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiPhp />,
            name: "php",
        },
        {
            icon: <TbSql />,
            name: "sql",
        },
        {
            icon: <FaFigma />,
            name: "figma",
        },
    ],
};

// about data
const about = {
    title: "About me",
    description: "Here are some infos about myself.",
    info: [
        {
            fieldName: "Name:",
            fieldValue: "Francesco Rolando",
        },
        {
            fieldName: "Phone:",
            fieldValue: "+39 329 1133841",
        },
        {
            fieldName: "Experience:",
            fieldValue: "4 Years",
        },
        {
            fieldName: "LinkedIn:",
            fieldValue: "francescorolando",
        },
        {
            fieldName: "Nationality:",
            fieldValue: "Italian",
        },
        {
            fieldName: "Email:",
            fieldValue: "work@francescorolando.com",
        },
        {
            fieldName: "Freelance:",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages:",
            fieldValue: "Italian, English, Spanish",
        },
    ],
};

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 w-full max-w-[380px] sm:max-w-[600px] xl:max-w-[380px] mx-auto xl:mx-0 gap-6 xl:self-start">
                        {/* <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6"> */}
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    {/* duration */}
                                                    <span className="text-accent">
                                                        {item.duration}
                                                    </span>
                                                    {/* position */}
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                    {/* company */}
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">
                                                            {item.company}
                                                        </p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    {/* duration */}
                                                    <span className="text-accent">
                                                        {item.duration}
                                                    </span>
                                                    {/* position */}
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.degree}
                                                    </h3>
                                                    {/* company */}
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">
                                                            {item.institution}
                                                        </p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 md:grid-cols-5 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        {/* logo */}
                                                        <TooltipTrigger className="w-[85%] sm:w-[80%] md:w-full h-[150px] md:h-[130px] bg-[#232329] rounded-xl flex justify-center items-center group mx-auto">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        {/* testo del tooltip */}
                                                        <TooltipContent>
                                                            <p className="capitalize">
                                                                {skill.name}
                                                            </p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left ">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="flex items-start justify-start gap-4"
                                            >
                                                <span className="text-white/60">
                                                    {item.fieldName}
                                                </span>
                                                <span className="">{item.fieldValue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
