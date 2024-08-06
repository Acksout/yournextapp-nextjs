import React from "react";
import Sidebar from "@/components/Sidebar";
import ChatHistory from "@/components/ChatHistory";
import InfoForm from "@/components/InfoForm";
import Image from "next/image";
import ChatManager from "@/components/ChatManager";
import {signIn} from "next-auth/react";
import {SignInButton} from "@clerk/nextjs";
import {Button} from "@/components/ui/button.jsx";
import Link from "next/link.js";


// import React from 'react';

const Page = () => {
    return (
        <div className="flex min-h-screen flex-col bg-white text-black dark:bg-black dark:text-white">
            <header className="relative border-b border-gray-200 py-6 dark:border-gray-800">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-2xl font-bold">Your Next App Idea!</h1>
                </div>
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                    <Button>
                        <SignInButton/>
                    </Button>
                    <Button>
                        <Link href="/main">
                            Go to App
                        </Link>

                    </Button>
                </div>
            </header>

            <main className="container mx-auto flex flex-grow flex-col items-center justify-center px-4 py-8">
                <section className="mb-8 text-center">
                    <h2 className="mb-4 text-xl font-semibold">Welcome</h2>
                    <p className="max-w-md text-gray-700 dark:text-gray-300">
                        Will try to find you a next app idea! 🚀
                    </p>
                </section>

                <section className="text-center">
                    <h2 className="mb-4 text-xl font-semibold">Ahem.. Ahem.</h2>
                    <ul className="list-none text-gray-700 dark:text-gray-300">
                        <li>Still under development. 🚧</li>
                        <li>Logic is ready to go. 🚀</li>
                        <li>So, You can try the app!</li>
                    </ul>
                </section>
            </main>

            <footer className="border-t border-gray-200 py-4 dark:border-gray-800">
                <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400">
                    Made with 💙 by Rakshit
                </div>
            </footer>
        </div>
    );
};

export default Page;