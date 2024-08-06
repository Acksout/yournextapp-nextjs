"use client";
import React, {useState} from "react";
import {marked} from "marked";

const ChatHistory = ({oldResponse}) => {
    return (
        // <div className="flex max-h-screen w-1/2 flex-1 flex-row items-center justify-end overflow-y-scroll">
        //     <div className="bottom-2 border-solid border-black">
        //         {oldResponse.length === 0 ? (
        //             <p></p>
        //         ) : (
        //             oldResponse.map((response, index) => (
        //                 <div key={index} className="mb-2 flex w-full items-center rounded border-2 border-black p-2">
        //                     <div dangerouslySetInnerHTML={{__html: marked(response.text)}}/>
        //                 </div>
        //             ))
        //         )}
        //     </div>
        //
        // </div>
        <div className="flex max-h-screen w-3/4 flex-col items-center justify-start overflow-y-scroll p-4">
            <div className="w-full border-solid border-black">
                {oldResponse.length === 0 ? (
                    <p></p>
                ) : (
                    oldResponse.map((response, index) => (
                        <div key={index} className="mb-4 flex w-full items-start rounded border-2 border-black p-4">
                            <div dangerouslySetInnerHTML={{__html: marked(response.text)}}/>
                        </div>
                    ))
                )}
            </div>
        </div>


    );
};

export default ChatHistory;