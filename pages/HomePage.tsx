import React from "react";
import { Mic } from "lucide-react";

export default function HomePage( props: { setAudioStream: any; setFile: any; } ) {
    const { setAudioStream , setFile } = props

    return (
        <main className={'flex-1 p-4 flex flex-col justify-center gap-3 text-center sm:gap-4 md:gap-5 pb-10'}>
            <h1 className={'font-bold text-5xl sm:text-6xl md:text-7xl font-poppins'}>Scriber</h1>
            <button className="flex items-center text-base justify-between gap-4 mx-auto w-30 max-w-full my-4 p-3 rounded-lg specialButton">
                <p className="font-lato font-bold">Record</p>
                <Mic></Mic>
            </button>
            <p className="font-lato text-base">Or <label className="cursor-pointer text-yellow-300 hover:text-yellow-600 duration-200">upload 
                    <input onChange={(e) => {
                        const tempFile = e.target.files[0]
                        setFile(tempFile)}}
                        className="hidden" type="file" accept=".mp3, .wav, .flac"></input>
                </label> an audio file
            </p>
        </main>
    )
}