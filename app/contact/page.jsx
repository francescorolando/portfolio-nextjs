"use client";

import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone:",
        description: "+39 329 1133841",
    },
    {
        icon: <FaEnvelope />,
        title: "E-mail:",
        description: "work@francescorolando.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Where:",
        description: "Biella / Turin, Italy",
    },
];

const Contact = () => {
    // 1. crea un Ref per l'elemento input "Firstname"
    const firstNameInputRef = useRef(null);

    // 2. usa useEffect per eseguire il codice dopo il mount del componente
    useEffect(() => {
        // controlla se l'hash nell'URL corrisponde all'ID che ci interessa
        if (window.location.hash === "#firstname-input") {
            // se il ref è stato collegato all'elemento input...
            if (firstNameInputRef.current) {
                // ...applica il focus a quell'elemento!
                firstNameInputRef.current.focus();
            }
        }
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:items-start gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form
                            action="/work-in-progress"
                            className="flex flex-col gap-6 p-10 bg-primary-lighter rounded-xl"
                        >
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">Fill out the form and contact me!</p>

                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* 3. aggiungi l'ID e collega il Ref all'input "Firstname" */}
                                <Input
                                    ref={firstNameInputRef} // collega il ref
                                    id="firstname-input" // aggiungi l'ID corrispondente all'hash
                                    type="firstname"
                                    placeholder="Firstname"
                                />
                                <Input type="lastname" placeholder="Lastname" />
                                <Input type="email" placeholder="Email address" />
                                <Input type="phone" placeholder="Phone number" />
                            </div>

                            {/* select */}
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="est">Web Development</SelectItem>
                                        <SelectItem value="cst">UI/UX Design</SelectItem>
                                        <SelectItem value="mst">SEO</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            {/* textarea */}
                            <Textarea className="h-[200px]" placeholder="Type your message here." />

                            {/* btn */}
                            <Button size="md" className="max-w-40">
                                Send message
                            </Button>
                        </form>
                    </div>

                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mt-6 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-primary-lighter text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="xl:text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
