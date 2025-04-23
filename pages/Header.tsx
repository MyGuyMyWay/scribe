import React from "react";
import { Plus } from "lucide-react";

export default function Header() {
    return (
        <header className={'flex items-center justify-between gap-4 p-4'}>
          <h1 className={'font-lato font-semibold'}>
            Scriber
          </h1>
          <button className='flex items-center gap-2 rounded-md p-1.5 font-lato font-semibold bg-white text-black hover:bg-transparent hover:text-white'>
            <div>New</div>
            <Plus></Plus>
          </button>
        </header>
    )
}