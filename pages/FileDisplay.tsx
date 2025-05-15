import React from "react";
import { PenLine } from "lucide-react";

export default function FileDisplay( props: { handleAudioReset: any; file: any; audioStream: any; } ) {
    const { handleAudioReset, file, audioStream } = props
    return (
        <main className={'flex-1 p-4 flex flex-col justify-center gap-3 text-center sm:gap-4 md:gap-5 pb-20 w-fit max-w-full mx-auto'}>
            <h1 className={'font-bold text-4xl sm:text-5xl md:text-7xl font-poppins'}>Your File</h1>
            <div className="flex flex-col text-left my-4">
                <h3 className="font-semibold font-lato text-2xl">Name:</h3>
                <p className="font-lato text-xl">{file ? file?.name : "Custom audio"}</p>
            </div>
            <div className="flex items-center justify-between gap-4">
                    <button onClick={handleAudioReset} className="text-white text-lg hover:text-yellow-600 duration-200 font-lato font-semibold">Reset</button>
                    <button className="specialButton flex py-2 px-3 rounded-lg font-semibold font-lato items-center gap-2"><p>Transcribe</p><PenLine></PenLine></button>
            </div>
        </main>
    )   
}