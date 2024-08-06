"use client";

import React, {useState} from "react";
import ChatHistory from "@/components/ChatHistory";
import InfoForm from "@/components/InfoForm";

const ChatManager = () => {
    const [oldResponses, setOldResponses] = useState([]);
    const addResponse = (newResponse) => {
        setOldResponses((prevHistory) => [...prevHistory, newResponse]);
    };
    return (
        <div className="flex flex-1 flex-col items-center justify-end">

            <ChatHistory oldResponse={oldResponses}/>

            <InfoForm addResponse={addResponse}/>


        </div>
    );
};

export default ChatManager;