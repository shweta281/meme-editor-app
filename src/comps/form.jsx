import { useState } from "react";
import "./form.css";

export default function form() {
  const [detail, setDetail] = useState({
    firstname: "",
    lastname: "",
    email: "",
    comments: "",
    is: false,
    market: "",
    favcolor: ""
  });

  console.log(detail.favcolor);

  function eventHandle(e) {
    // console.log(e.target);
    const { name, value, type, checked } = e.target;
    setDetail(() => {
      return {
        ...detail,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log(event, detail)

  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit} >
        <h1>form</h1>
        <input
          type="text"
          placeholder="First Name"
          onChange={eventHandle}
          name="firstname"
          value={detail.firstname}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={eventHandle}
          name="lastname"
          value={detail.lastname}
        />
        <input
          type="email"
          placeholder="email"
          onChange={eventHandle}
          name="email"
          value={detail.email}
        />
        <textarea
          value={detail.comments}
          name="comments"
          placeholder="Comments..."
          onChange={eventHandle}
        />
        <input
          type="checkbox"
          if="is"
          name="is"
          onChange={eventHandle}
          checked={detail.is}
        />
        <label htmlFor="is">Are you ready?</label>
        <br></br>
        <br></br>
        <fieldset>
          <legend>The market is going down</legend>
          <input
            type="radio"
            checked={detail.market === "yes"}
            onChange={eventHandle}
            name="market"
            value="yes"
            id="yes"
          />
          <label htmlFor="yes">yes</label>
          <input
            type="radio"
            checked={detail.market === "no"}
            onChange={eventHandle}
            name="market"
            value="no"
            id="no"
          />
          <label htmlFor="no">no</label>
          <input
            type="radio"
            checked={detail.market === "maybe"}
            onChange={eventHandle}
            name="market"
            value="maybe"
            id="maybe"
          />
          <label htmlFor="maybe">maybe</label>
        </fieldset>
        <br></br>
        <br></br>
        <label htmlFor="favcolor">What is your favcolor</label>
        <br></br>
        <br></br>
        <select id="favcolor" value={detail.favcolor} onChange={eventHandle} name="favcolor" >
            <option value="">Choose</option>
            <option value="blue">blue</option>
            <option value="pink">pink</option>
            <option value="red">red</option>
            <option value="black">black</option>
            <option value="white">white</option>
        </select>
        <br></br>
        <br></br>
        <button>Submit</button>
        <br></br>
        <br></br>
      </form>
    </div>
  );
}
