import React from "react";
import { Plus } from "lucide-react";

export default function Header() {
    return (
        <header className={'flex items-center justify-between gap-4 p-4'}>
          <h1></h1>
          <button className='flex border-2 border-yellow-300 items-center gap-2 rounded-md p-1.5 font-lato font-semibold hover:bg-transparent hover:text-white bg-yellow-300 text-black'>
            <div>New</div>
            <Plus></Plus>
          </button>
        </header>
    )
}