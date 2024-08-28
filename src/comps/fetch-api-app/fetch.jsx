import { useState } from "react";
import { useEffect } from "react";

export default function Fetch() {
  const [data, setData] = useState({});
  const [count, setCount] = useState(1);
  useEffect(() => {
    fetch("https://swapi.dev/api/people/"+count)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [count]);

    function get(){
        setCount(count+1);
    }
  return (
    <div>
        <button onClick= {get}> get character</button>
      <h1>{JSON.stringify(data, null, 2)}</h1>
    </div>
  );
}
