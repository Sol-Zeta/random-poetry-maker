import React, { useState, useEffect } from 'react'
import LoaderGif from './assets/loader-gif.gif'
import './Loader.css'

const audioLinks = [
    'https://freesound.org/data/previews/364/364393_6548898-lq.mp3',
    'https://freesound.org/data/previews/535/535839_10403690-lq.mp3',
    'https://freesound.org/data/previews/361/361540_914016-lq.mp3',
    'https://freesound.org/data/previews/172/172876_985466-lq.mp3',
    'https://freesound.org/data/previews/377/377221_3768893-lq.mp3',
    'https://freesound.org/data/previews/444/444452_3269005-lq.mp3',
    'https://freesound.org/data/previews/380/380074_23-lq.mp3',
    'https://freesound.org/data/previews/513/513957_9996727-lq.mp3',
    'https://freesound.org/data/previews/346/346201_2285686-lq.mp3',
    'https://freesound.org/data/previews/255/255875_4062622-lq.mp3',
    'https://freesound.org/data/previews/536/536128_3797507-lq.mp3',
    'https://freesound.org/data/previews/387/387233_2155630-lq.mp3',
    'https://freesound.org/data/previews/22/22670_85829-lq.mp3',
    'https://freesound.org/data/previews/402/402629_7761353-lq.mp3',
    'https://freesound.org/data/previews/175/175543_1818637-lq.mp3'
]

export default function Loader() {
    const [audio, setAudio] = useState('')

    useEffect(() => {
        const random = Math.floor(Math.random() * (audioLinks.length - 1 + 1))
        setAudio(audioLinks[random])
    }, [])
    
    useEffect(() => {
        if(audio){
            const audioToPlay = new Audio(audio)
            audioToPlay.play()
        }
    }, [audio])



    return (
        <div className="loader-container">
            <img src={LoaderGif} alt="loader" className="loader-img"/>
        </div>
    )
}
