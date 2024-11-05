import React, { useEffect,useRef } from "react";
import { useNavigate } from "react-router-dom";
const Loading =()=>{
    const navigate=useNavigate();
    const progressref=useRef(null);
    useEffect(()=>{
        const handleRedirect=()=>{
            navigate("/hero")
        }
        const secondAnimation=progressref.current
        if(secondAnimation){
            secondAnimation.addEventListener("animationend",handleRedirect)
        }
        return ()=>{
            if(secondAnimation){
                secondAnimation.removeEventListener("animationend",handleRedirect)
            }
        }
        
    },[navigate])
    return(
        <>
        <div className='bg-custome-picture-loading h-[100vh] w-[100vw]  bg-cover bg-center  overflow-hidden'>
        {/* <div className='h-[0px] w-[0px] absolute top-[180px] border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[35px] border-b-[#0096F5] rotate-[180deg] left-44'></div>
        <div className='h-[0px] w-[0px] absolute top-[245px] border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[35px] border-b-[#0096F5] left-44'></div>
        <div className='h-[30px] w-[50px] absolute top-[190px] bg-[#E6E8E7] left-[8.2rem] transform skew-x-[40deg]'></div>
        <div className='h-[30px] w-[50px] absolute top-[190px] bg-[#E6E8E7] right-[9.8rem] transform -skew-x-[40deg]'></div>
        <div className='h-[30px] w-[50px] absolute top-[240px] bg-[#E6E8E7] left-[8.2rem] transform -skew-x-[40deg]'></div>
        <div className='h-[30px] w-[50px] absolute top-[240px] bg-[#E6E8E7] right-[9.8rem] transform skew-x-[40deg]'></div> */}
        <img src="/loading/musk_bro.png" alt="" className="absolute top-[8rem] right-[3.5rem] h-[50vh]"  />
        <div className>
            {/* <div className='text-[white] relative bottom-52 left-16 font-bold text-[2rem] briller'>IT'S YOUR </div>
            <div className='text-[white] relative bottom-[13.8rem] left-10 font-bold text-[3rem] briller'>EMPIRE</div> */}
        <div className='text-[#55F9E9] absolute bottom-12 left-[10.5rem] animate-fallIn'>
          <span className='letter'>L</span>
          <span className='letter'>o</span>
          <span className='letter'>a</span>
          <span className='letter'>d</span>
          <span className='letter'>i</span>
          <span className='letter'>n</span>
          <span className='letter'>g</span>
          <span className='letter'>.</span>
          <span className='letter'>.</span>
          <span className='letter'>.</span>
          </div>
        <div ref={progressref} className='h-[1vh] w-[35vw] absolute left-[8rem] bg-[#55F9E9]  rounded-[1rem] bottom-8 animate-progress '></div>
        </div>
      </div>

        </>
    )
}
export default Loading 