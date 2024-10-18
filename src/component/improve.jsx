import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Improve = () => {
    const navigate=useNavigate();
    useEffect(()=>{
        console.log(navigate("/"))
    },[])
    return (
        <>
            <div className="h-[100vh] w-[100vw] bg-[#1E1E1E]">
                <div className="w-[100vw] flex justify-center flex-col">

                    <div className="h-[10vh] w-[90vw] flex items-center justify-between ">
                        <div className="flex items-center justify-between w-[45vw]">
                            <div className=" ">
                                <div className="relative">
                                    <img src="/src/assets/hero/logo.png" alt="" className="h-[7vh]  z-[0] mt-10 rounded-t-[0.6rem]" />
                                    <div className="text-[white] font-bold text-[1.7rem] absolute bottom-[-10px] rounded-t-[2rem] left-[-2px]  ">Lv.1</div>
                                </div>
                                <div className="bg-[#424454] w-[18.116vw] h-[1rem] rounded-br-[0.6rem] rounded-bl-[0.6rem]">
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

                    <div className="flex justify-around h-[8vh] items-center">
                        <div className="text-[#B2BDCD] text-[1.4rem]">Personal</div>
                        <div className="text-[#B2BDCD] text-[1.4rem]" >Office</div>
                        <div className="text-[#B2BDCD] text-[1.4rem]">Minning</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Improve