import React, { ReactElement, useRef, useEffect, useState } from "react";

type ChildProps = {
    id: string,
    title: string,
    file: string
};

const Task5Solution: React.FunctionComponent<ChildProps> = (props: ChildProps): ReactElement => {
    const placeholderRefTask5 = useRef<HTMLInputElement>(null);
    const timelineplaceholderRef = useRef<HTMLInputElement>(null);
    const [listOfWaveforms,setListOfWaveforms] = useState<String[]>([]);

    const initializeSurfer = () => {
        const WaveSurferTask5 = require('wavesurfer.js');
        const RegionsPlugin = require('wavesurfer.js/dist/plugin/wavesurfer.regions');
        const TimelinePluginTask5 = require('wavesurfer.js/dist/plugin/wavesurfer.timeline');
        let waveSurferInstanceRefTask5 = WaveSurferTask5.create({
            container: placeholderRefTask5.current,
            waveColor: '#C83A22',
            progressColor: '#FC5536',
            backend: 'MediaElement',
            plugins: [
                TimelinePluginTask5.create({
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
        waveSurferInstanceRefTask5.load(props.file);

        waveSurferInstanceRefTask5.on('ready', function () {
            setListOfWaveforms([]);
            console.log(waveSurferInstanceRefTask5.regions.list);
            let i = 0;
            for (const property in waveSurferInstanceRefTask5.regions.list) {
                i++;
                listOfWaveforms.push(`Annotation ${i}: ${waveSurferInstanceRefTask5.regions.list[property].start} - ${waveSurferInstanceRefTask5.regions.list[property].end}`);
              }
              console.log(listOfWaveforms);
              setListOfWaveforms(listOfWaveforms);
        });
        return (() => {
            waveSurferInstanceRefTask5.destroy();
        })
    };

    useEffect(initializeSurfer, []);

    return (<>
                <div id="task5" ref={placeholderRefTask5} style={{ width: "100%", height: "100%" }}></div>
                <div id="task5placeholderref" ref={timelineplaceholderRef} style={{ width: "100%", height: "50px" }}></div>
                <div id="listofwaveforms">List of Waveforms: {listOfWaveforms} </div>
            </>);
}

export default Task5Solution;