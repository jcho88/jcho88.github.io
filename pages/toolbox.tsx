import React from "react";
import styles from "../pages/styles/Toolbox.module.css";

const ToolBox = () => {
    return (
        <>
            <div className="text-center p-2 pb-8">
                <div className="text-3xl p-2">Toolbox</div>
                <div>
                    Welcome to my toolbox, here you will find a variety of tools
                    I utilize to be an{" "}
                    <span className={styles.gradient}>effective engineer</span>.
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col p-6">
                    <a href="/toolbox/shortcuts">
                        <svg
                            className="fill-white m-auto mb-2"
                            xmlns="http://www.w3.org/2000/svg"
                            height="48"
                            width="48">
                            <path d="M19.95 42 22 27.9H14.7Q14.15 27.9 13.9 27.4Q13.65 26.9 13.9 26.45L26.15 6H28.2L26.15 20.05H33.35Q33.9 20.05 34.175 20.55Q34.45 21.05 34.2 21.5L22 42Z" />
                        </svg>
                    </a>
                    <a href="/toolbox/shortcuts">Shortcuts</a>
                </div>
            </div>
        </>
    );
};

export default ToolBox;
