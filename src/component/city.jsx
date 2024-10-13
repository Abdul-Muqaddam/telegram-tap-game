import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const City = () => {
    const [highLight,setHightLight]= useState(false)
    useEffect(()=>{
        if(location.pathname=="/city"){
            setHightLight(true)
        }
    },[location.pathname])
    const navigate=useNavigate()
    const handleImprove=()=>{
        navigate("/improve")
    }
    const handleCity=()=>{
        navigate("/city")
    }
    const handleMinning=()=>{
        navigate("/hero")
    }
    const handleFriends=()=>{
        navigate("/friends")
    }
    const  handleQuest=()=>{
        navigate("/quests")
    }
    return (
        <>
            <div className="bg-custom-city-picture h-[100vh] w-[100vw]">
                <div className="flex justify-center h-20">
                    <div className="h-[10vh] w-[90vw] flex items-center justify-between ">
                        <div className="flex items-center justify-between w-[45vw]">
                            <div className=" ">
                                <div className="relative">
                                    <img src="/src/assets/hero/logo.png" alt="" className="h-[7vh]  z-[0] mt-10 rounded-t-[0.6rem]" />
                                    <div className="text-[white] font-bold text-[1.7rem] absolute bottom-[-10px] rounded-t-[2rem] left-[-2px]  ">Lv.1</div>
                                </div>
                                <div className="bg-[#424454] w-[18.116vw] h-[1rem] rounded-br-[0.6rem] ">
                                    <div className="w-[15.7vw] h-[1rem] text-[0.7rem]  rounded-bl-[0.6rem] bg-gradient-to-r from-[#FFCA54] to-[#fddb92] pl-2">79%</div>
                                </div>
                            </div>
                            <div className="mt-[1.3rem]">
                                <div className="text-[#d2d4d8]">
                                    Coin per Hour
                                </div>
                                <div className="flex items-center">
                                    <img src="/src/assets/hero/coin-upgrade.png" alt="" className="h-[2.8vh] " />
                                    <div className="text-[white] font-bold text-[1.2rem]">+3.7k</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between w-[34vw] mt-8 h-[7rem]">
                            <div>

                            <div className="text-[#d2d4d8]">
                                Coin 
                            </div>
                            <div className="flex items-center">
                                <img src="/src/assets/hero/coin.png" alt="" className="h-[2.8vh] " />
                                <div className="text-[white] font-bold text-[1.2rem]">+3.7k</div>
                            </div>
                            </div>
                            <div className="mb-4">
                            <img src="/src/assets/hero/hamburger.png" alt="" className="h-[4vh] mt-[2rem]" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src="/src/assets/city/lock.png" alt=""  className="absolute h-[8.5vh] right-5 top-52 "/>
                        <div className="text-white absolute right-10 top-[17.89rem] bg-[#6C6C6C] w-[20vw] flex items-center justify-center rounded-tl-lg rounded-br-lg text-[1.1rem]">Trade NFT</div>
                    </div>
                    <div>
                        <img src="/src/assets/city/bull.png" alt=""  className="absolute left-10 h-[8.5vh] top-64 bg-[#2D2D2B] rounded-[3rem] border-[4px] border-white border-b-transparent"/>
                        <div className="text-white absolute left-7 top-[20rem] bg-[#067FDC] w-[23.5vw] flex items-center justify-center rounded-tl-lg rounded-br-lg text-[1.1rem]">Investments</div>
                    </div>
                    <div>
                        <img src="/src/assets/city/tede bear.png" alt=""  className="absolute h-[8.5vh] right-[7rem] top-[25.5rem] border-[4px] border-[#C5F4FF] rounded-[3rem] border-b-transparent "/>
                        <div className="text-white absolute right-[5.8rem] top-[29.6rem] bg-[#067FDC] w-[28.5vw] flex items-center justify-center rounded-tl-lg rounded-br-lg text-[1.1rem]">Premium store</div>
                    </div>
                    <div>
                        <img src="/src/assets/city/telegram.png" alt=""  className="absolute h-[8.5vh] right-14 top-[42.5rem] border-[4px] border-[#C5F4FF] rounded-[3rem] border-b-transparent "/>
                        <div className="text-white absolute right-8 top-[46.5rem] bg-[#067FDC] w-[28.5vw] flex items-center justify-center rounded-tl-lg rounded-br-lg text-[1.1rem]">Communities</div>
                    </div>
                    <div>
                        <img src="/src/assets/city/gift.png" alt=""  className=" bg-[#242422] absolute h-[8.5vh] left-[6rem] top-[40.5rem] border-[4px] border-[#C5F4FF] rounded-[3rem] border-b-transparent "/>
                        <div className="text-white absolute left-[5.3rem] top-[44.5rem] bg-[#067FDC] w-[22.5vw] flex items-center justify-center rounded-tl-lg rounded-br-lg text-[1.1rem]">Lucky Box</div>
                    </div>
                    <div>
                        <img src="/src/assets/city/signing.png" alt=""  className=" bg-[#242422] absolute h-[8.5vh] left-16 top-[30.5rem] border-[4px] border-[#C5F4FF] rounded-[3rem] border-b-transparent "/>
                        <div className="text-white absolute left-[3.3rem] top-[34.5rem] bg-[#067FDC] w-[24.5vw] flex items-center justify-center rounded-tl-lg rounded-br-lg text-[1.1rem]">Hype Zone</div>
                    </div>
                </div>
                <footer className=" bg-gradient-to-b from-[#2C3B62] to-[#354672] border-t-2 border-[#5074d2] h-[9vh] mt-[48rem] flex ">
                    

                        <button className="w-[20vw] flex items-center justify-center flex-col" onClick={handleImprove} >
                            <img src="/src/assets/hero/fire.png" className="h-[4.5vh]" />
                            <div className="text-[#B2BECE]">Improve</div>
                        </button>

                        <button className={` w-[20vw] flex items-center justify-center flex-col ${highLight?"bg-gradient-to-b from-[#f5b026a9] to-[#f5b02600]":""}`} onClick={handleCity}>
                            <img src="/src/assets/hero/store.png" alt="" className="h-[4.5vh]" />
                            <div className="text-[#B2BECE]">City</div>
                        </button>
                        
                            <button className={`w-[20vw] flex items-center justify-center flex-col` } onClick={handleMinning}>
                                <img src="/src/assets/hero/elon_musk_half_body.png" alt="" className={`h-[7.5vh] left-[11.2rem] border-4 border-[#305084] bg-[#2F447A] rounded-[3rem] px-1 absolute bottom-[2rem]  `} onClick={handleMinning} />
                                <div className={`text-[#B2BECE] mt-10 `} onClick={handleMinning}>Mining</div>
                            </button>
                            <button  className={` w-[20vw] flex items-center justify-center flex-col `} onClick={handleFriends}>   
                                <img src="/src/assets/hero/invite.png" alt="" className="h-[4.5vh]" />
                                <div className="text-[#B2BECE]">Friends</div>
                            </button>

                            <button className="w-[20vw] flex items-center justify-center flex-col" onClick={handleQuest}>
                                <img src="/src/assets/hero/todo.png" alt="" className="h-[4.5vh]" />
                                <div className="text-[#B2BECE]">Quests</div>
                            </button>
                        
                    
                </footer>
            </div>
        </>
    )
}
export default City