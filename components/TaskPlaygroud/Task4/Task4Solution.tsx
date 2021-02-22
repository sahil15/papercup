import React, { ReactElement, useRef, useEffect } from "react";

type ChildProps = {
    id: string,
    title: string,
    file: string
};

const Task4Solution: React.FunctionComponent<ChildProps> = (props: ChildProps): ReactElement => {
    const placeholderRefTask4 = useRef<HTMLInputElement>(null);
    const timelineplaceholderRef = useRef<HTMLInputElement>(null);
    const playPauseBtnRef = useRef<HTMLButtonElement>(null);

    const initializeSurfer = () => {
        const WaveSurferTask3 = require('wavesurfer.js');
        const RegionsPlugin = require('wavesurfer.js/dist/plugin/wavesurfer.regions');
        const TimelinePluginTask4 = require('wavesurfer.js/dist/plugin/wavesurfer.timeline');
        let waveSurferInstanceRefTask4 = WaveSurferTask3.create({
            container: placeholderRefTask4.current,
            waveColor: '#C83A22',
            progressColor: '#FC5536',
            backend: 'MediaElement',
            plugins: [
                TimelinePluginTask4.create({
                    container: timelineplaceholderRef.current
                    
                }),
                RegionsPlugin.create({
                    regions: [
                        {
                            start: 5,
                            end: 9,
                            loop: false,
                            color: 'hsla(200, 50%, 70%, 0.4)',
                            minLength:1
                        },
                        {
                            start: 17,
                            end: 30,
                            loop: false,
                            color: 'hsla(200, 50%, 70%, 0.4)',
                            minLength:1
                        },
                        {
                            start: 35,
                            end: 45,
                            loop: false,
                            color: 'hsla(200, 50%, 70%, 0.4)',
                            minLength:1
                        }
                    ],
                    dragSelection: {
                        slop: 5
                    }
                    
                })
              ]
            
        });
        waveSurferInstanceRefTask4.load(props.file);

        waveSurferInstanceRefTask4.on('ready', function () {
            playPauseBtnRef.current!.onclick = () => waveSurferInstanceRefTask4.playPause();;
        });
        return (() => {
            waveSurferInstanceRefTask4.destroy();
        })
    };

    useEffect(initializeSurfer, []);

    return (<>
                <div id="task4" ref={placeholderRefTask4} style={{ width: "100%", height: "100%" }}></div>
                <div id="task4placeholderref" ref={timelineplaceholderRef} style={{ width: "100%", height: "50px" }}></div>
                <button type="button" ref={playPauseBtnRef} className="text-white bg-brand border-0 py-2 px-8 focus:outline-none hover:bg-blue-400 rounded text-lg">Play/Pause</button>
            </>);
}

export default Task4Solution;