import React, { useEffect, useState } from "react";
import "../styles/Body.css";
// import memedata from "./memeData.js";

export default function Body() {
const [allMeme, setAllMeme]= useState([]);

// useEffect(() => {
//     fetch("https://api.imgflip.com/get_memes")
//       .then((res) => res.json())
//       .then((data) => setAllMeme(data.data.memes));
//   }, []);

useEffect( ()=> {
  async function getWidth(){
    const res= await fetch("https://api.imgflip.com/get_memes");
    const data= await res.json();
    // console.log(data);
    setAllMeme(data.data.memes);
  }
  getWidth();
}, [])

  const [meme, setMeme] = useState({
    randomImage: "https://i.imgflip.com/1bij.jpg",
    topText: "",
    bottomText: "",
  });
  // console.log(allMeme);

  function getMeme() {
    const url =
      allMeme[
        Math.floor(Math.random() * allMeme.length)
      ].url;
    setMeme((prevState) => ({
      ...prevState,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="main">
      <div className="form">
        <input
          type="text"
          placeholder="top text"
          className="form--input"
          onChange={handleChange}
          value={meme.topText}
          name="topText"
        />
        <input
          type="text"
          placeholder="bottom text"
          className="form--input"
          onChange={handleChange}
          value={meme.bottomText}
          name="bottomText"
        />
        <button className="submit--button" onClick={getMeme}>
          Search
        </button>
      </div>
      <div className="meme">
        <h1 className="top--text">{meme.topText}</h1>
        <img src={meme.randomImage} className="meme--image" />
        <h1 className="bottom--text">{meme.bottomText}</h1>
      </div>
    </div>
  );
}
