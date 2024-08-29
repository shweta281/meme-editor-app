import { useState, useEffect} from "react"

export default function win(){
    const [windowWidth, setWindowWidth]=useState(window.innerWidth);
//memory leak
//useEffect clean up

    useEffect(()=>{
        function watchWidth(){
            console.log("setup");
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", watchWidth);

        return function(){
            console.log("cleaning up");
            window.removeEventListener("resize", watchWidth)
            
        }
    }, [])


    return (
        <div>
            <h1>window width : {windowWidth} </h1>
        </div>
    )
}