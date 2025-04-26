export const metadata = {
    title: "Work in progress",
};

import Image from "next/image";

const WorkInProgress = () => {
    return (
        <div className="container mx-auto min-h-[60vh] h-full flex flex-col justify-center items-center">
            <h1 className="mx-5 text-3xl text-center text-accent mb-[30px]">Ooops!</h1>
            <p className="mx-5 text-2xl text-center text-white mb-[50px]">
                I'm currently working on this section.
            </p>
            <div className="flex items-center justify-center group">
                <a
                    href="/"
                    className=" font-semibold text-white flex items-center justify-center gap-6"
                >
                    Go back home
                    <span
                        aria-hidden="true"
                        className="text-xl text-white group-hover:text-accent transition-all duration-500"
                    >
                        &rarr;
                    </span>
                </a>
            </div>
        </div>
    );
};

export default WorkInProgress;
