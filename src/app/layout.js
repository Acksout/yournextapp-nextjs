import {Rubik} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";

const rubik = Rubik({subsets: ["latin"],});

export const metadata = {
    title: "Your NEXT App!",
    description: "Just Build Something!",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={cn("antialiased {rubik.className}")}>{children}</body>
        </html>
    );
}
