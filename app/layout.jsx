import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import BackgroundGradient from "@/components/BackgroundGradient";

const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-jetBrainsMono",
});

export const metadata = {
    title: "Francesco Rolando",
    description: "Personal portfolio for web development.",
    other: {
        "apple-mobile-web-app-title": "F.R.",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={jetBrainsMono.variable}>
                <BackgroundGradient />
                <Header />

                <StairTransition />
                <PageTransition>{children}</PageTransition>
            </body>
        </html>
    );
}
