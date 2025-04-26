"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num: "01",
        title: "Web Development",
        description:
            "Development of performant and responsive websites using secure and modern web standards.",
        href: "/work-in-progress",
    },
    {
        num: "02",
        title: "UI/UX Design",
        description:
            "Design of intuitive user interfaces (UI) and optimal user experiences (UX) for digital products.",
        href: "/work-in-progress",
    },
    {
        num: "03",
        title: "Copywriting",
        description:
            "Writing effective marketing and advertising copy designed to persuade, inform, and engage target audiences.",
        href: "/work-in-progress",
    },
    {
        num: "04",
        title: "SEO",
        description:
            "Search engine optimization (SEO) focused on improving website rankings and organic traffic acquisition.",
        href: "/work-in-progress",
    },
];

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div
                                key={index}
                                className="flex-1 flex flex-col justify-center gap-6 group group-services"
                            >
                                {/* top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent transition-all duration-500">
                                        {service.num}
                                    </div>
                                    <Link
                                        href={service.href}
                                        className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                    >
                                        <BsArrowDownRight className="text-primary text-3xl" />
                                    </Link>
                                </div>

                                {/* title */}
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                    {service.title}
                                </h2>

                                {/* description */}
                                <p className="text-white/60">{service.description}</p>

                                {/* border */}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
