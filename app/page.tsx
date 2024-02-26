"use client";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { beep } from "@/utils/audio";
import {
    Camera,
    FlipHorizontal,
    PersonStanding,
    Video,
    Volume,
    Volume2,
} from "lucide-react";
import { Be_Vietnam_Pro } from "next/font/google";
import React, { useRef, useState } from "react";
import { Rings } from "react-loader-spinner";
import Webcam from "react-webcam";
import { toast } from "sonner";

type Props = {};

const HomePage = (props: Props) => {
    const webcamRef = useRef<Webcam>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    //state
    const [mirrored, setmirrored] = useState<boolean>(false);
    const [isRecording, setisRecording] = useState<boolean>(false);
    const [autoRecordEnabled, setautoRecordEnabled] = useState<boolean>(false);
    const [volume, setvolume] = useState(0.8)
    
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
                        <Button
                            variant={"outline"}
                            size={"icon"}
                            onClick={() => setmirrored((prev) => !prev)}
                        >
                            <FlipHorizontal />
                        </Button>
                        <Separator className="my-2" />
                    </div>

                    {/* middle section */}
                    <div className="flex flex-col gap-2">
                        <Separator className="my-2" />
                        <Button
                            variant={"outline"}
                            size={"icon"}
                            onClick={userPromptScreenshot}
                        >
                            <Camera />
                        </Button>

                        <Button
                            variant={isRecording ? "destructive" : "outline"}
                            size={"icon"}
                            onClick={userPromptRecord}
                        >
                            <Video />
                        </Button>
                        <Separator className="my-2" />

                        <Button
                            variant={
                                autoRecordEnabled ? "destructive" : "outline"
                            }
                            size={"icon"}
                            onClick={toggleAutoRecord}
                        >
                            {autoRecordEnabled ? (
                                <Rings color="white" height={45} />
                            ) : (
                                <PersonStanding />
                            )}
                            <Video />
                        </Button>
                    </div>

                    {/* bottom section */}
                    <div className="flex flex-col gap-2">
                        <Separator className="my-2" />

                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant={"outline"} size={"icon"}>
                                    <Volume2 />
                                </Button>
                            </PopoverTrigger>

                            <PopoverContent>
                              <Slider max={1} min={0} step={0.2}
                              defaultValue={[volume]}
                              onValueCommit={(val) => {
                                setvolume(val[0]);
                                beep(val[0]);
                              }}/>
                            </PopoverContent>
                        </Popover>
                        <Separator className="my-2" />
                    </div>
                </div>

                

                </div>
            </div>
        </div>
    );

    // handler functions

    function userPromptScreenshot() {
        //take picture
        //save it to downloads
    }

    function userPromptRecord() {
        //check if recording
        // then stop recording
        //and save it to downloads
        //if not recording then start recording
    }

    function toggleAutoRecord() {
        if (autoRecordEnabled) {
            setautoRecordEnabled(false);
            toast("Auto Record Disabled");
            // show toast to user to notify the change
        } else {
            setautoRecordEnabled(true);
            toast("Auto Record Enabled");

            //show toast
        }
    }
};

export default HomePage;
