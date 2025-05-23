import React from "react";

export default function Transcribing(props: { downloading: any; }) {
    const { downloading } = props

    return (
        <div className="flex items-center flex-1 flex-col justify-center gap-10 md:gap-14 text-center pb-24 p-4">
            <div className="flex flex-col gap-2 sm:gap-4"> 
                <h1 className="font-semibold font-lato text-4xl sm:text-5xl md:text-6xl">
                Scribing
                </h1>
                <p>{!downloading ? "warming up cylinders": "core cylinders engaged"}</p>
            </div>
            <div className="flex flex-col gap-2 sm:gap-4 max-w-[400px] mx-auto w-full">
                {[0,1,2].map(val => {
                    return (
                        <div key={val} className={'rounded-full h-2 sm:h-3 bg-yellow-300 loading ' + `loading${val}`}></div>
                    )
                })}
                    
            </div>
        </div>
    )
}