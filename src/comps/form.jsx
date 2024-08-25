import { useState } from "react"
import "./form.css"

export default function form(){
    const [ detail, setDetail ]= useState({ firstname:"", lastname:"", email:"", comments:""})

    console.log(detail);

    function eventHandle(e){
        setDetail(()=> {
            return {
                ...detail,
                [e.target.name]: e.target.value
            }
        } )
    }
    return (
        <div className="form">
            <form>
                <h1>form</h1>
                <input type="text" placeholder="First Name" onChange={ eventHandle } name="firstname" value={detail.firstname}/>
                <input type="text" placeholder="Last Name" onChange={ eventHandle } name="lastname" value={detail.lastname}/>
                <input type="email" placeholder="email" onChange={ eventHandle} name="email" value={detail.email}/>
                <textarea value={detail.comments} name="comments" placeholder="Comments..." onChange={ eventHandle}/>
            </form>
        </div>
    )
}