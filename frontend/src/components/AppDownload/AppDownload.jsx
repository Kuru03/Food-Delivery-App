import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download mx-auto my-auto mt-[100px] text-[max(3vw,20px)] font-[500] text-center' id="app-download">
        <p>For Better Experience <br/> Tomato App</p>
        <div className="app-download-platform
        flex justify-center gap-[max(2vw,10px)]
        mt-10">
            <img className="max-w-[180px] duration-500 cursor-pointer w-[max(30vw,120px)] hover:scale-105" src={assets.play_store}
             alt="" />
             <img className="max-w-[180px] duration-500 cursor-pointer w-[max(30vw,120px)] hover:scale-105" src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default AppDownload
