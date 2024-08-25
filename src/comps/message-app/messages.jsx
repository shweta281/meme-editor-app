import { useState } from "react"

export default function messages(){
    const [messages, setMessages]=useState(["a", "b"])

    return (
        <div>
            <h1>
                { messages.length===0? <h1>You're all caught up</h1> : 
                    <h1>You have {messages.length} unread {messages.length===1? "message": "messages"}</h1>}
            </h1>
        </div>
    )
}