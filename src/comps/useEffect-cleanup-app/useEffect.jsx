import { useState } from "react"
import WindowTracker from "../Window-Tracker.jsx"

export default function Effect(){
    
    const [show, setShow]= useState(true);

    function toggle(){
        setShow(prevState => !prevState)
    }
    return (
        <div>
            <button onClick={toggle}>
                Toggle window tracker
            </button>
            {show && <WindowTracker/>}     
        </div>
    )
}