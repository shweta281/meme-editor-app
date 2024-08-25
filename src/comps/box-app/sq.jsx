import { useState } from "react"
import "./box.css"

export default function sq(props){
    
    // const [flip, setFlip] = useState(props.on); 
    const styles={
        backgroundColor: props.on?"white":"black"
    }
    return (
        <div className="box--area" key={props.id} style={styles} onClick={()=>props.toggle(props.id)}></div>
    )
}