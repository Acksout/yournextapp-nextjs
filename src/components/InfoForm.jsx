"use client";

import React, {useState} from "react";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import mongoose from "../app/api/db/route.js";
import ChatHistoryModel from "@/models/ChatHistoryModel.js";

const InfoForm = ({addResponse}) => {
    const [text, setText] = useState("");

    const handleTextArea = (event) => {
        setText(event.target.value);
        console.log(text);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (text === "") {
            alert("Input is empty");
        } else {
            try {
                const response = await fetch("api/google", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",

                    },
                    body: JSON.stringify({prompt: text}),
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    // Pushing the response to DB

                    // MONGODB STUFF HERE
                    fetch("/api/db", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({userPrompt: text, response: data}),
                    })
                        .then(response => response.json())
                        .then(data => console.log(data))
                        .catch(error => console.error(error));


                    addResponse(data); // Updating parent state
                    // Work with the data
                } else {
                    console.log("Error:", response.statusText);
                    // Throw error as needed
                }
            } catch (error) {
                console.log("Error:", error);
                // Handle the error as needed
            }
        }
    };

    return (
        <div className="flex w-1/2 flex-row items-center justify-center">
            <Textarea
                onChange={handleTextArea}
                placeholder="Enter 'keywords' or the 'tech stack'."
                className="mt-2 mb-4 h-24 w-full resize-none border-2 border-black"
            />
            <Button onClick={handleSubmit} variant="outline" className="mt-2 mb-4 ml-2">SEND</Button>
        </div>
    );
};

export default InfoForm;