import React, { useState, useEffect, useRef } from "react";
import { Mic } from "lucide-react";

export default function HomePage( props: { setAudioStream: any; setFile: any; } ) {
    const { setAudioStream , setFile } = props
    const [recordingStatus, setRecordingStatus] = useState('inactive')
    const [audioChunks, setAudioChunks] = useState([])
    const [duration, setDuration] = useState(0)
    
    const mediaRecorder = useRef(null)
    const mimeType = 'audio/webm'

    async function startRecording() {
        let tempStream
        console.log('Start recording')

        try {
            const streamData = await navigator.mediaDevices.getUserMedia({audio: true, video: false})
            tempStream = streamData
        }
            catch (error) {
                console.error(error.message)
                return
            }

        setRecordingStatus('recording')

        const media = new MediaRecorder(tempStream, { mimeType: mimeType })
        mediaRecorder.current = media
        mediaRecorder.current.start()
        let localAudioChunks = []

        mediaRecorder.current.ondataavailable = (event) => {
            if (typeof event.data === 'undefined') { return }
            if (event.data.size === 0) { return }
            localAudioChunks.push(event.data)
        }
        setAudioChunks(localAudioChunks)

    }

    async function stopRecording() {
        setRecordingStatus('inactive')
        console.log('Stop recording')

        mediaRecorder.current.stop()
        mediaRecorder.current.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: mimeType})
            setAudioStream(audioBlob)
            setAudioChunks([])
            setDuration(0)
        }

    }

    useEffect(() => {
        if (recordingStatus === 'inactive') {return}
        const interval = setInterval(() => {
            setDuration(curr => curr + 1)
        }, 1000)

        return () => clearInterval(interval)
    })

    return (
        <main className={'flex-1 p-4 flex flex-col justify-center gap-3 text-center sm:gap-4 md:gap-5 pb-10'}>
            <h1 className={'font-bold text-5xl sm:text-6xl md:text-7xl font-poppins'}>Scriber</h1>
            <button onClick={recordingStatus === 'recording' ? stopRecording : startRecording} className="flex items-center text-base justify-between gap-4 mx-auto max-w-full my-4 p-3 rounded-lg specialButton">
                <p className="font-lato font-bold">{recordingStatus === 'inactive' ? 'Record' : `Stop recording`}</p>
                <div className="flex items-center gap-2">
                    {duration !== 0 && (
                        <p className="text-sm">{duration}s</p>
                    )}
                    <Mic></Mic>
                </div>
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