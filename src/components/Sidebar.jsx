import React from "react";
import {Button} from "@/components/ui/button";

const Sidebar = () => {
    return (
        <div className="h-full w-1/6 border-r-2 border-solid border-black">
            <h1 className="text-center text-3xl">History</h1>
            <div>
                <Button className="mx-auto my-1 flex w-4/5 items-center justify-center gap-1" variant="default">
                    Button
                </Button>
                <Button className="mx-auto my-1 flex w-4/5 items-center justify-center gap-1" variant="default">
                    Button
                </Button>
                <Button className="mx-auto my-1 flex w-4/5 items-center justify-center gap-1" variant="default">
                    Button
                </Button>
            </div>
        </div>
    );
};

export default Sidebar;
