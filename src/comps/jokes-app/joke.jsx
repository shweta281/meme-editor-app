import { useState } from "react"


export default function joke(props){
    const [isShown, setIsShown] = useState(false);

    function toggle(){
        setIsShown(prevState => !prevState);
        console.log(isShown);
    }
    return (
        <div>
            <center>
                <h1>{props.setup}</h1>
                {/* {isShown? <p>{props.punchline}</p> : null} */}
                {isShown && <p>{props.punchline}</p>}
                {/* {isShown?<button onClick={toggle}>hide</button>: <button onClick={toggle}>show</button>} */}
                <button onClick={toggle}> {isShown? "hide" : "show"} </button>
                <hr></hr>
            </center>
            
        </div>
    )
}