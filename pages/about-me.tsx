import React from "react";
import prefix from "../public/prefix";

const AboutMe: React.FC = () => {
    return (
        <div className="min-h-fit">
            <div className="px-20 pt-20 pb-5">
                <img
                    className="w-60 h-60 rounded-full border-2 border-slate-400 flex"
                    src={`${prefix}/../../images/justy.jpeg`}
                    alt="about-me-img"></img>
            </div>
            <div className="flex flex-col items-center p-4">
                <h1 className="text-3xl pb-5">Justin Cho</h1>
                <p className="max-w-xl">
                    Hello, I am a full-stack developer with a passion for
                    building beautiful web applications powered by scalable
                    distributed systems.
                </p>
            </div>
            <div className="left-1/2 -translate-x-1/2 fixed bottom-0">
                <ul className="flex flex-col items-center">
                    <li className="flex p-2">
                        <img
                            className="pr-2"
                            src={`${prefix}/../../images/github_logo.png`}
                            alt="github_logo"
                            width="25"
                            height="25"></img>
                        <a href="https://github.com/jcho88" target="_blank">
                            @jcho88
                        </a>
                    </li>
                    <li className="flex p-2">
                        <img
                            className="pr-2"
                            src={`${prefix}/../../images/linkedin_logo.png`}
                            alt="linkedin_logo"
                            width="25"
                            height="25"></img>
                        <a
                            href="https://www.linkedin.com/in/justinmyungcho/"
                            target="_blank">
                            justinmyungcho
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AboutMe;
