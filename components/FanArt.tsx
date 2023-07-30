"use client"

import {useState} from 'react'

const FanArt = () => {
    const [value, setValue] = useState(90);
    const count = 64
    const size = 100
    const animationSlack = 14 // span of animated sticks 

    const config = {
        count,
        spread: 180 / (count - 1),
    }
    const styleFanContainer = (i: number) => ({
        height: `${size * 3}px`,
        transform: `translate(calc(-50% + ${size / 2}px), calc(-100% + ${size / 2}px)) rotate(${config.spread * i - 90}deg)`,
        transformOrigin: 'bottom',
        // top: `${size/2}px`,
        // left: `${size / 2}px`,
        // left: `-${size}`//`calc(50% - ${size}}px)`,
    })
    const styleFanSection = (i: number) => {
        return ({
            borderTopWidth: `${size * 2}px`, // stick length
            borderLeftWidth: `${(size/count) * Math.PI}px`,
            borderRightWidth: `${(size/count)* Math.PI}px`,
            width: `${(size/count)*10}px`
        })
    }

    const trapezBorder = ` \ 
border-r-transparent border-l-transparent border-t-red-600 \
before:content-[''] before:absolute before:bottom-0 before:w-8 before:h-10 before:bg-transparent`

    return (
        <>
            <div className={`__FANART flex justify-center items-end h-[400px] w-[600px] m-auto`}>
                <div style={{ height: `${size}px`, width: `${size}px`, marginBottom: `${(-size/2)+24}px` }} className={`__CENTER rounded-full relative bg-transparent pointer-events-none`}>
                    {[...Array(config.count).keys()].map(i => {
                        const r/*otation*/ = config.spread * i - 90
                        const active = (r >= value - 90 - animationSlack && r <= value - 90 + animationSlack) ? (r >= value - 90 - animationSlack * .5 && r <= value - 90 + animationSlack * .5) ? (r >= value - 90 - animationSlack * .1 && r <= value - 90 + animationSlack * .1) ? 3 : 2 : 1 : 0;
                        return <div 
                            style={styleFanContainer(i)} 
                            className={`absolute `} 
                        key={i}>
                            <div 
                            style={styleFanSection(i)} 
                                className={`__TRAPEZ \ 
                                ${active === 3 ? 'scale-x-[.7]' : active === 2 ? 'scale-x-[.6]' : active === 1 ? 'scale-x-[.5]' : 'scale-x-[.3]'} \
                                ${trapezBorder} transition-all flex justify-center items-center`}  />
                        </div>
                    })}
                </div>
            </div>
            <div>CONTROLS: {value}deg
                <div className='flex gap-2'>
                {/* <button className={`px-4 py-2 rounded bg-blue-400 text-white`} onClick={() => setValue(0)}>0deg</button>
                <button className={`px-4 py-2 rounded bg-blue-400 text-white`} onClick={() => setValue(45)}>45deg</button>
                <button className={`px-4 py-2 rounded bg-blue-400 text-white`} onClick={() => setValue(90)}>90deg</button>
                <button className={`px-4 py-2 rounded bg-blue-400 text-white`} onClick={() => setValue(135)}>135deg</button>
                <button className={`px-4 py-2 rounded bg-blue-400 text-white`} onClick={() => setValue(180)}>180deg</button> */}
                <input value={value} onChange={(e) => setValue(Number(e.target.value))} type="range"  min="0" max="180" />
                </div>
            </div>
        </>
    )
}

export default FanArt