import React from "react";
import Image from "next/image";
import prefix from "../public/prefix";

const AboutMe: React.FC = () => {
    return (
        <div className="min-h-max">
            <div className="fixed h-2/6 p-20">
                <img
                    className="w-60 h-60 rounded-full border-2 border-slate-400 flex justify-center items-center"
                    src={`${prefix}/../../images/justy.jpeg`}
                    alt="logo"></img>
            </div>
            <div className="fixed h-full p-4 flex flex-col items-center justify-center">
                <h1 className="text-3xl pb-5">Justin Cho</h1>
                <p className="max-w-xl">
                    Hello, I am a full-stack developer with a passion for
                    building beautiful web applications powered by scalable
                    distributed systems.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
