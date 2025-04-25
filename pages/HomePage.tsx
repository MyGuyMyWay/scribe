import React from "react";
import { Mic } from "lucide-react";

export default function HomePage() {
    return (
        <main className={'flex-1 p-4 flex flex-col justify-center gap-3 text-center sm:gap-4 md:gap-5 pb-10'}>
            <h1 className={'font-bold text-5xl sm:text-6xl md:text-7xl font-poppins'}>Scriber</h1>
            <button className="flex items-center text-base justify-between gap-4 mx-auto w-30 max-w-full my-4 bg-yellow-300 hover:bg-transparent border-yellow-300 border-2 p-3 rounded-lg hover:text-white text-black">
                <p className="font-lato font-bold">Record</p>
                <Mic></Mic>
            </button>
            <p className="font-lato text-base">Or <label className="cursor-pointer text-yellow-300 hover:text-yellow-600 duration-200">upload 
                    <input className="hidden" type="file" accept=".mp3, .wav, .flac"></input>
                </label> an audio file
            </p>
        </main>
    )
}