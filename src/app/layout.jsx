import {Rubik} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from "@clerk/nextjs";


const rubik = Rubik({subsets: ["latin"],});

export const metadata = {
    title: "Your NEXT App!",
    description: "Just Build Something!",
};

export default function RootLayout({children}) {
    return (
        <ClerkProvider>
            <html lang="en">
            <body className={cn("antialiased {rubik.className}")}>
            {/*<SignedIn>*/}
            {/*    <UserButton/>*/}
            {/*</SignedIn>*/}
            {children}
            </body>
            </html>
        </ClerkProvider>
    );

}
