import React, {useState} from "react"
import "../styles/Body.css"
import memedata from "./memeData.js"
import Counter from "./Counter.jsx"

export default function Body(){
    // const [things, setthings]= React.useState(["thing1", "thing2"])

    // function addthings(){
    //     const newthing="thing"+(things.length+1)
    //     setthings(prevState=> [...prevState, newthing])
    // }
    
    // const a= React.useState();
    // console.log(a);

    // const [counter, setCounter]= React.useState(0);
    
    // function increment(){
    //     setCounter(prevState=> prevState+1);
    // }
    // function decrement(){
    //     setCounter(prevState=>prevState-1);
    // }
    // const url=memedata.data.memes[Math.floor(Math.random()*memedata.data.memes.length)].url
    // const [image, getImage]= React.useState("")
    // function getMeme(){
    //     getImage( prevState=> url)
    // }
    // const [isgoingout, setIsgoinout]=React.useState(true);
    // function going(){
    //     setIsgoinout( prevState=> isgoingout^true )
    // }
    // let answer= isgoingout?"YES":"NO"

    // const [arr, setArr] =useState(["thing1", "thing2"]);
    
    // function going(){
    //     setArr( prevState=> [...prevState, "thingy"])
    // }

    // const [a,seta] = React.useState({
    //     searchtext: "Search",
    //     iconState: true
    // })
    // let newicon=a.iconState?"^~^":"0_0" 
    // function func(){
    //     seta(prevState=> {
    //         return {
    //             ...prevState,
    //             iconState: prevState.iconState^true

    //     }})
    // }
    // console.log(a);

    const [meme, setMeme]= useState({ randomImage: "https://i.imgflip.com/30b1gx.jpg",
                                      topText: "toptext",
                                      bottomText: "bottomText"
                                    })
    const [allMemes, setAllMemes]= useState(memedata)
    
    function getMeme(){
        const url=memedata.data.memes[Math.floor(Math.random()*memedata.data.memes.length)].url
        setMeme( prevState=> ({
            ...prevState, 
            randomImage: url
            
        }))
    }

    return (
        <div className="main">
            {/* <h1>{yes}</h1> */}
            {/* <h1>{arr}</h1> */}
            {/* <button onClick={func}>{a.searchtext} {newicon}</button> */}

            <div className="form" >
                <input type="text" placeholder="top text" className="form--input"/>
                <input type="text" placeholder="bottom text" className="form--input"/> 
                <button className="submit--button" onClick={increment}>+</button>
                <button className="submit--button" onClick={decrement}>-</button>
                <Counter number={counter} />
                {/* <button className="submit--button" onClick={getMeme}>Search</button> */}
            </div>
            {/* <div>
                <h1 className="meme--text">{meme.topText}</h1>
                <img src={meme.randomImage} className="meme--image"/>
                <h1 className="meme--text">{meme.bottomText}</h1>
            </div> */}
            
        </div>
    )
}