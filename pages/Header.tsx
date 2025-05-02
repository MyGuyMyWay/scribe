import React from "react";
import { Plus } from "lucide-react";

export default function Header() {
    return (
        <header className={'flex items-center justify-between gap-4 p-4'}>
          <h1></h1>
          <button className='flex items-center gap-2 rounded-md py-1 px-1.5 font-lato font-semibold specialButton'>
            <div>New</div>
            <Plus></Plus>
          </button>
        </header>
    )
}