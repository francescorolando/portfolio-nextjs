"use client";

import { motion } from "framer-motion";

// export const metadata = {
//     title: "404 - Not Found",
// };

const NotFound = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[75vh] xl:min-h-[65vh] flex items-start justify-center py-12 xl:py-0"
        >
            <main className="container mx-auto text-center">
                <p className="text-3xl font-semibold text-accent">404</p>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                    Page not found
                </h1>
                <p className="mt-6 text-lg font-medium text-balance text-white/80 sm:text-xl/8">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="/"
                        className="rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold text-primary shadow-xs hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Go back home
                    </a>
                    <a href="/contact" className="text-sm font-semibold text-white group">
                        Contact me{" "}
                        <span
                            aria-hidden="true"
                            className="group-hover:text-accent transition-all duration-300"
                        >
                            &rarr;
                        </span>
                    </a>
                </div>
            </main>
        </motion.div>
    );
};

export default NotFound;
