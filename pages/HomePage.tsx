import React from "react";

export default function HomePage() {
    return (
        <main className={'flex-1 p-4 flex flex-col justify-center gap-3 text-center sm:gap-4 md:gap-5 pb-10'}>
            <h1 className={'font-semibold text-5xl sm:text-6xl md:text-7xl'}>Scriber</h1>
            <h3 className="font-medium">Record <span className="text-white">&rarr;</span> Scribe it!</h3>
        </main>
    )
}