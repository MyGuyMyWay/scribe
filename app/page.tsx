'use client'
import HomePage from "@/pages/HomePage";
import Header from "@/pages/Header";
import Image from "next/image";
import FileDisplay from "@/pages/FileDisplay";
import { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState(null);
  const [audioStream, setAudioStream] = useState(null);

  const isAudioAvailable = file || audioStream;

  function handleAudioReset() {
    setFile(null);
    setAudioStream(null);
  }

  return (
    <div className={'flex flex-col max-w-[1000px] mx-auto w-full'}>
      <section className={'min-h-screen flex flex-col'}>
        <Header />
        {isAudioAvailable ? ( <FileDisplay file={file} audioStream={audioStream} handleAudioReset={handleAudioReset} />) : 
        (<HomePage setFile={setFile} setAudioStream={setAudioStream} />)}
      </section>
    </div>
  );
}

// 3:36:13
