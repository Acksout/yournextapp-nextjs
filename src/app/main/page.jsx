"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import ChatManager from "@/components/ChatManager";
import {RedirectToSignIn, SignedIn, SignedOut, UserButton} from "@clerk/nextjs";


const Page = () => {

    return (
        <div>
            <SignedIn>
                <main>
                    <div className="relative flex h-screen overflow-hidden">
                        {/*Logout Button*/}
                        {/*<button className="absolute top-4 right-4">*/}
                        {/*    <Image src="exit-svgrepo-com.svg" alt="exit" height="40" width="40"/>*/}
                        {/*</button>*/}
                        {/*<button>Chat Page Button</button>*/}

                        {/*<Sidebar/>*/}
                        <SignedIn>
                            <div className="absolute top-4 right-4">
                                <UserButton/>
                            </div>
                        </SignedIn>

                        <ChatManager/>


                    </div>

                </main>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn/>
            </SignedOut>;
        </div>


    );

};

export default Page;
