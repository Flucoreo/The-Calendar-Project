import React from 'react'

export default function DayBox(){
    return (
        <div className='h-full border-1 border-black p-2' style={{ border: "1px solid black" }}>

            <div className='flex items-center'>
                <div className='flex flex-col'>
                    <div className="p-2 bg-[#458385] w-4 mb-1 rounded-lg"></div>
                    <div className="p-2 bg-[#EB7C69] w-4 rounded-lg"></div>
                </div>
                <div className="p-2 bg-[#FDA638] w-4 h-4 rounded-lg ml-1"></div>
            </div>

        </div>        
    )
}