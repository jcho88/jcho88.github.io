import React from "react";
import { useState } from "react";
import styles from "./Header.module.css";
import prefix from "../public/prefix";

const Header: React.FC = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className="pl-2 pr-4 pt-2 pb-4 lg:px-4 lg:pt-4 lg:pb-8">
            <div className="flex flex-row items-center justify-between lg:justify-around">
                <img
                    src={`${prefix}/../../images/hi_icon.png`}
                    alt="logo"
                    width="50"
                    height="50"></img>
                <nav>
                    <section className="flex lg:hidden">
                        <div
                            className="space-y-2"
                            onClick={() => setIsNavOpen((prev) => !prev)}>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        </div>

                        <div
                            className={
                                isNavOpen
                                    ? `${styles.navMenu}`
                                    : `${styles.hide}
                            `
                            }>
                            <div
                                className="absolute top-0 right-0 px-8 py-8"
                                onClick={() => setIsNavOpen(false)}>
                                <svg
                                    className="h-8 w-8 text-gray-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <ul className="flex flex-col items-center justify-between min-h-[250px]">
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <a href="/about">About me</a>
                                </li>
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <a href="/portfolio">Portfolio</a>
                                </li>
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <a href="/tools">Tools</a>
                                </li>
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <a href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <ul className="hidden space-x-8 lg:flex">
                        <li>
                            <a href="/about">About me</a>
                        </li>
                        <li>
                            <a href="/portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="/tools">tools</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
