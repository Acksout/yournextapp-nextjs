"use client";

import React from "react";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";

const Page = () => {
    const [text, setText] = React.useState("");
    const handleTextArea = (event) => {
        setText(event.target.value);
        console.log(text);
    };
    return (
        // Sidebar
        <div className="flex h-screen overflow-hidden">
            <div className="h-full w-1/6 border-r-2 border-solid border-black">
                <h1 className="text-center text-3xl">History</h1>
                <div>
                    <Button className="mx-auto my-1 flex w-4/5 items-center justify-center gap-1"
                            variant="default">Button</Button>
                    <Button className="mx-auto my-1 flex w-4/5 items-center justify-center gap-1"
                            variant="default">Button</Button>
                    <Button className="mx-auto my-1 flex w-4/5 items-center justify-center gap-1"
                            variant="default">Button</Button>
                </div>
            </div>

            // Chat History
            <div className="flex flex-1 flex-col items-center justify-end">
                <div className="flex flex-1 flex-col items-center justify-end">
                    <div className="mb-2 flex w-1/2 items-center rounded border-2 border-black p-2">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="mb-2 flex w-1/2 items-center rounded border-2 border-black p-2">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="mb-2 flex w-1/2 items-center rounded border-2 border-black p-2">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                // Text Area
                <div className="flex flex-row items-center justify-center">
                    <Textarea

                        placeholder="Enter keywords or the tech stack. Just keywords for better response."
                        className="mt-2 mb-4 h-24 w-1/2 resize-none border-2 border-black"
                    />
                    <Button className="m-2" onClick={handleTextArea}>SEND</Button>
                </div>

            </div>
        </div>
    );
};

export default Page;
