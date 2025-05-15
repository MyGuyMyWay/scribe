import React, {useState} from "react";

export default function Information() { 
    const [tab, setTab] = useState('transcription')
    return (
        <main className={'flex-1 p-4 flex flex-col justify-center gap-3 text-center sm:gap-4 md:gap-5 pb-20 w-fit mx-auto'}>
            <h1 className={'font-bold text-3xl sm:text-4xl md:text-6xl font-poppins'}>
                Your Transcription
            </h1>
            
            <div className="grid grid-cols-2 mx-auto items-center border-2 overflow-hidden rounded-full border-yellow-300">
                <button onClick={() => setTab('transcription')} className={"px-4 py-1 font-semibold font-lato duration-200" + 
                    (tab === 'transcription' ? "text-2xl text-black bg-yellow-300" : "text-white hover:text-yellow-600 duration-200")}>
                    Transcription</button>
                <button onClick={() => setTab('translation')} className={"px-4 py-1 font-semibold font-lato duration-200" +
                    (tab === 'translation' ? "text-2xl bg-yellow-300 text-black" : "text-white hover:text-yellow-600 duration-200")}>
                    Translation</button>
            </div>
        </main>
    )
}