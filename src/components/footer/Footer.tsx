import React from 'react'

function Footer() {

let footerComponent

{
footerComponent = (
    <>
    <div className="flex justify-center bg-blue-900 text-slate-200">
        <div className="container flex flex-col items-center py-4">
        <p className='text-xl font-bold'>DaniFarma - Generation | Copyright: 2024</p>
        </div>
    </div>
    </>
)
}

return (
<>
    {footerComponent}
</>
)
}

export default Footer;