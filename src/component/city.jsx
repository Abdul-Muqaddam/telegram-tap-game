import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const City = () => {
    const [highLight, setHightLight] = useState(false);
    const [time, setTime] = useState(30);
    const [fallingStars, setFallingStars] = useState([]);
    const [fallingAsteroids, setFallingAsteroids] = useState([]);
    const [score ,setScore]=useState(0)
    const [gameOver,setGameOver]=useState(false)



    useEffect(()=>{
        if(!gameOver){

            const spawStar=setInterval(()=>{
                const star={
                    id:Date.now(),
                    xPosition:Math.random() * (window.innerWidth-100),
                    yPosition:0,
                    speed:Math.random() * 20 + 5
                }
                setFallingStars(prev=>[...prev,star]) 
            },300)
            return () => clearInterval(spawStar)
        }
    },[gameOver])

    useEffect(()=>{
        if(!gameOver){

            const spawAsteriod= setInterval(()=>{
                const asteriod={
                    id:Date.now()+1,
                    xPosition:Math.random() * (window.innerWidth-100),
                    yPosition:0,
                    speed:Math.random()*20+5   
                }
                setFallingAsteroids(prev=> [...prev,asteriod])
            },2000)
            return () => clearInterval(spawAsteriod)
        }
    },[gameOver])
        
    useEffect(() => {
        const countDown = setInterval(() => {
            setTime(prev => {
                if (prev > 0) {
                    return prev - 1
                }
                else {
                    clearInterval(countDown);
                    setGameOver(true)
                    return 0;
                }
            })
        }, 1000)
    }, [])

    useEffect(()=>{
        if(!gameOver){
            const updateYPosition=setInterval(()=>{
                setFallingStars(prev=>
                    prev.map(star=>({
                        ...star,
                        yPosition:star.yPosition+star.speed,
                    }))
                )
                setFallingAsteroids(prev=>
                    prev.map(asteriod=>(
                        {
                            ...asteriod,
                            yPosition:asteriod.yPosition+asteriod.speed,
                        }
                    ))
                    
                )
                
            },50)
            return ()=> clearInterval(updateYPosition)
        }
    },[gameOver])

    useEffect(()=>{
        const cleanupinterval=setInterval(()=>{
            setFallingStars(prev=>prev.filter(star=>(star.yPosition<window.innerHeight)))
            setFallingAsteroids(prev=>prev.filter(asteriod=>(asteriod.yPosition<window.innerHeight)))
        },100)
        return ()=>clearInterval(cleanupinterval)
    },[])

    useEffect(() => {
        if (location.pathname === "/city") {
            setHightLight(true);
        }
    }, [location.pathname]);

    const handleStarScore=(starId)=>{
        setScore(score+1)
        setFallingStars(fallingStars.filter(star=>(star.id!==starId)))
    }
    const handleAsteriodScore=(asteroidId)=>{
        setScore(0)
        setFallingAsteroids(fallingAsteroids.filter(asteroid=>(asteroid.id!==asteroidId)))
    }
    const navigate = useNavigate();

    const handleNavigate=()=>{

        let newScore= Number(window.localStorage.getItem("score"));
        newScore=newScore+score
        window.localStorage.setItem("score",newScore);
        navigate("/hero")
    }

    return (
        <div className="bg-custom-city-picture bg-cover h-[100vh] w-[100vw]">
            <div className="border-[2px] border-[white] h-[7vh] absolute rounded-[3rem] font-bold w-[25vw] flex items-center justify-center text-[1.3rem] top-[1rem] left-[1rem] text-[white] Orbitron">
                00:<div>{time}</div>
            </div>
            <div className="text-white absolute right-5 top-3 Orbitron text-[3rem]">
                {score}
            </div>
            <div className="game-area">
                <div className={`h-[100vh] w-[100vw] bg-transparent  z-10 ${time==0?"absolute":"hidden"}`}></div>
                <div>
                    <div className={`h-[50vh] w-[80vw] backdrop-blur-sm absolute left-[2.8rem] top-[12rem] z-[11] rounded-[1rem] ${time==0?"absolute":"hidden"}`}>
                        <div className=" Orbitron flex flex-col justify-evenly items-center h-[50vh] w-[80vw]">
                            <div className="text-white font-bold text-[2.2rem]">
                            Your are on Fire
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="src/assets/hero/coin.png" alt="" className="h-[8vh] animate-upDown" />
                                <div className="text-white text-[3rem] font-bold">
                                    {score}
                                </div>
                            </div>
                            <button className="bg-white w-[70vw] h-[7vh] text-[2rem] animate-shadowFadeInOut" onClick={handleNavigate}>
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
                {fallingStars.map(star => (
                    <div
                        key={star.id}
                        className="absolute"
                        style={{
                            left: `${star.xPosition}px`,
                            top: `${star.yPosition}px`,

                        }}
                    >
                        <img src="/src/assets/city/drop game/star.webp" alt="star" className="h-[10vh]" onClick={()=>handleStarScore(star.id)}/>
                    </div>
                ))}
                {fallingAsteroids.map(asteroid => (
                    <div
                        key={asteroid.id}
                        className=" absolute"
                        style={{
                            left: `${asteroid.xPosition}px`,
                            top: `${asteroid.yPosition}px`,
                        }}
                    >
                        <img src="/src/assets/city/drop game/asteriod.webp" alt="asteroid" className="h-[10vh]" onClick={()=>handleAsteriodScore(asteroid.id)}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default City;