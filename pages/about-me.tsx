import React from "react";
import Image from "next/image";

const AboutMe: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-xl">Justin Cho</h1>
            <p className="max-w-xl">
                Hello, I am a full-stack developer with a passion for building
                beautiful web applications powered by scalable distributed
                systems.
            </p>
        </div>
    );
};

export default AboutMe;
