import React from "react";
import Sidebar from "@/components/Sidebar";
import ChatHistory from "@/components/ChatHistory";
import InfoForm from "@/components/InfoForm";
import Image from "next/image";
import ChatManager from "@/components/ChatManager";


const Page = () => {
    return (
        <main>
            <div className="relative flex h-screen overflow-hidden">
                {/*Logout Button*/}
                <button className="absolute top-4 right-4">
                    <Image src="exit-svgrepo-com.svg" alt="exit" height="40" width="40"/>
                </button>

                {/*<Sidebar/>*/}
                <ChatManager/>
            </div>

        </main>

    );
};

export default Page;
