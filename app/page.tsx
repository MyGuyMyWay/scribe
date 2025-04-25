'use client'
import HomePage from "@/pages/HomePage";
import Header from "@/pages/Header";
import Image from "next/image";
import { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState(null);
  const [audioStream, setAudioStream] = useState(null);

  const isAudioAvailable = file || audioStream;

  return (
    <div className={'flex flex-col max-w-[1000px] mx-auto w-full'}>
      <section className={'min-h-screen flex flex-col'}>
        <Header />
        <HomePage />
      </section>
    </div>
  );
}
