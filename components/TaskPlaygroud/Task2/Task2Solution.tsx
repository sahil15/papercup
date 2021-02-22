import React, { ReactElement, useRef, useEffect, useState } from "react";

type ChildProps = {
    id: string,
    title: string,
    file: string
};

const Task2Solution: React.FunctionComponent<ChildProps> = (props: ChildProps): ReactElement => {
    const placeholderRef = useRef<HTMLInputElement>(null);
    const playPauseBtnRef = useRef<HTMLButtonElement>(null);

    const initializeSurfer = () => {
        const WaveSurfer = require('wavesurfer.js');
        let waveSurferInstanceRef = WaveSurfer.create({
            container: placeholderRef.current,
            waveColor: '#C83A22',
            progressColor: '#FC5536'
        });
        waveSurferInstanceRef.load(props.file);

        waveSurferInstanceRef.on('ready', () => {
            playPauseBtnRef.current!.onclick = () => waveSurferInstanceRef.playPause();;
        });
        return (() => {
            waveSurferInstanceRef.destroy();
        })
    };

    const playPauseWave = () => {
        
    }

    useEffect(initializeSurfer, []);

    return (
            <>
            <div id="task2" ref={placeholderRef} style={{ width: "100%", height: "100%" }}></div>
            <button type="button" ref={playPauseBtnRef} className="text-white bg-brand border-0 py-2 px-8 focus:outline-none hover:bg-blue-400 rounded text-lg">Play/Pause</button>
            </>
            
    );
}

export default Task2Solution;