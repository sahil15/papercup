import React, { ReactElement, useRef, useEffect } from "react";

type ChildProps = {
    id: string,
    title: string,
    file: string
};

const Task3Solution: React.FunctionComponent<ChildProps> = (props: ChildProps): ReactElement => {
    const placeholderRefTask3 = useRef<HTMLInputElement>(null);
    const timelineplaceholderRef = useRef<HTMLInputElement>(null);
    const playPauseBtnRef = useRef<HTMLButtonElement>(null);

    const initializeSurfer = () => {
        const WaveSurferTask3 = require('wavesurfer.js');
        const TimelinePluginTask3 = require('wavesurfer.js/dist/plugin/wavesurfer.timeline');
        let waveSurferInstanceRefTask3 = WaveSurferTask3.create({
            container: placeholderRefTask3.current,
            waveColor: '#C83A22',
            progressColor: '#FC5536',
            plugins: [
                TimelinePluginTask3.create({
                    container: timelineplaceholderRef.current
                    
                })
              ]
            
        });
        waveSurferInstanceRefTask3.load(props.file);

        waveSurferInstanceRefTask3.on('ready', function () {
            playPauseBtnRef.current!.onclick = () => waveSurferInstanceRefTask3.playPause();;
        });
        return (() => {
            waveSurferInstanceRefTask3.destroy();
        })
    };

    useEffect(initializeSurfer, []);

    return (<>
                <div id="task3" ref={placeholderRefTask3} style={{ width: "100%", height: "100%" }}></div>
                <div id="task3placeholderref" ref={timelineplaceholderRef} style={{ width: "100%", height: "50px" }}></div>
                <button type="button" ref={playPauseBtnRef} className="text-white bg-brand border-0 py-2 px-8 focus:outline-none hover:bg-blue-400 rounded text-lg">Play/Pause</button>
            </>);
}

export default Task3Solution;