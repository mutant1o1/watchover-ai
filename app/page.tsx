"use client";
import { ModeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

type Props = {};

const HomePage = (props: Props) => {
    const webcamRef = useRef<Webcam>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    //state
    const [mirrored, setmirrored] = useState<boolean>(false);
    return (
        <div className="flex h-screen">
            {/* Left division - webcam and Canvas */}
            <div className="relative">
                <div className="relative h-screen w-full">
                    <Webcam
                        ref={webcamRef}
                        mirrored={mirrored}
                        className="h-full w-full object-contain p-2"
                    />
                    <canvas
                        ref={canvasRef}
                        className="absolute top-0 left-0 h-full w-full object-contain"
                    ></canvas>
                </div>
            </div>

            {/* Right division - container for button panel and wiki section */}

            <div className="flex flex-row flex-1">
                <div className="border-primary/5 border-2 mx-w-xs flex flex-col gap-2 justify-between shadow-md rounded-md p-4">
                    {/* top section */}
                    <div className="flex flex-col gap-2">
                      <ModeToggle />
                      <Separator/>
                    </div>
                    {/* middle section */}

                    <div className="flex flex-col gap-2">

                    <Separator/>
                    <Separator/>
                    </div>



                    {/* bottom section */}
                    <div className="flex flex-col gap-2">

                    <Separator/>
                    <Separator/>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default HomePage;
