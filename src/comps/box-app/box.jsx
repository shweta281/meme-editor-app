import { useState } from "react"
import data from "../boxdata.js"
import Sq from "./sq.jsx"
// import "./box.css"

export default function box(){
    // const styles= props.darkmode? { backgroundColor: "black"} : {backgroundColor: "white"};
    // const styles= {
    //     backgroundColor: value.on? "black" : "white"
    // }
    // function flip(){
    //     setBox(prevState=> {
    //         return {
    //             ...prevState,
    //             on:on^1
    //         }
    //     })
    // }
    // function handleClick(id){
    //     console.log(id,box[id-1].on^1);
        // setFlip(flip^1)
        // setBox( prevState => {
        //     const newarr=[];
        //     for (let i=0; i<prevState.length; i++){
        //         const currstate=prevState[i];
        //         if(currstate.id===id){
    //                 const updatecurrstate={
    //                     ...currstate,
    //                     on: !currstate.on
    //                 }
    //                 newarr.push(updatecurrstate)
    //             }
    //             else{
    //                 newarr.push(currstate)
    //             }
    //         }
    //         return newarr;
    //     })

    // }

    const [box, setBox]= useState(data)
    function handleClick(id){
        setBox( prevState => {
            return prevState.map((value) => {
                return value.id===id? {...value, on: value.on^1}: value 
            })
        })
    }
    const returnable = box.map( (value) =>(
        <Sq key={value.id} id={value.id} on={value.on} toggle={handleClick}/>
    ))

    return (
        <div>
            {returnable}
        </div>
    )
}