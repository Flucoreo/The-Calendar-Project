"use client";

import React from 'react'
import DayBox from './dayBox'

import { useState } from 'react'

export default function Calendar(){
    const [calDays, setCalDays] = useState(Array.from({ length: 35 }, (_, index) => index + 1))

    const days = calDays.map((i) => (
        <DayBox key={i}/>
    ))
    
    return (
        <div className='h-[calc(100dvh-3.5rem-2rem)] py-10'>

            <div className='h-8 flex justify-center'>
                <div className='grid grid-cols-7 grid-rows-1 w-[70%]'>
                    <div className='flex justify-center'>
                        <h1>Sunday</h1>
                    </div>
                    <div className='flex justify-center'> 
                        <h1>Monday</h1>
                    </div>
                    <div className='flex justify-center'> 
                        <h1>Tuesday</h1>
                    </div>
                    <div className='flex justify-center'>
                        <h1>Wednesday</h1>
                    </div>
                    <div className='flex justify-center'>
                        <h1>Thursday</h1>
                    </div>
                    <div className='flex justify-center'>
                        <h1>Friday</h1>
                    </div>
                    <div className='flex justify-center'>
                        <h1>Saturday</h1>
                    </div>
                </div>
            </div>

            <div className='h-full flex justify-center'>
                <main className='grid grid-cols-7 grid-rows-5 h-full w-[70%]'>
                   {days}
                </main>
            </div>
        </div>
    )
}