"use client";

const BackgroundGradient = () => {
    return (
        <div className="fixed inset-0 flex flex-col sm:flex-row justify-evenly items-center z-[-999] overflow-hidden pointer-events-none">
            <div className="bg-accent-blue opacity-20 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] blur-[100px] rounded-[9999px] relative animate-one"></div>
            <div className="bg-accent-blue opacity-20 w-[300px] h-[300px] sm:w-[550px] sm:h-[550px] blur-[120px] rounded-[9999px] relative animate-two"></div>
        </div>
    );
};

export default BackgroundGradient;
