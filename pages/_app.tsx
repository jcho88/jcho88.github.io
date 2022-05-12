import "./styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <div>
                <style global jsx>{`
                    body {
                        background: #202023;
                    }
                `}</style>
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default MyApp;
