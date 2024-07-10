import React from 'react'
import homeLogo from '../assets/Logo1.png'
import './Home.css'

function Home() {
return (
    <>
    <div className="bg-blue-800 flex justify-center">
        <div className='container grid grid-cols-2 text-slate-200'>
        <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>DaniFarma</h2>
            <p className='text-xl'>Os melhores preços e produtos</p>

            <div className="flex justify-around gap-4">
            
            
            </div>
        </div>

        <div className="flex justify-center ">
            <img src={homeLogo} alt="" className='w-2/3' />
    
        </div>
        </div>
    </div>
    
    </>
);
}

export default Home;