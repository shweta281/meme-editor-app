import { useState } from "react";

export default function FormPractice() {
  const [details, setDetails] = useState({
    email: "",
    password: "",
    confirm: "",
    newsletter: false,
  });
  console.log(details);

  function eventHandle(event) {
    const { name, value, checked, type } = event.target;
    setDetails((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandle(event) {
    event.preventDefault();
    let message =
      details.password == details.confirm
        ? details.newsletter
          ? "Succesfully logged in and thank you for signing newsletter"
          : "Succesfully logged in"
        : "passwords don't match";
    console.log(message);
  }
  return (
    <div>
      <center
        style={{
          boxSizing: "border-box",
          margin: "50px",
          padding: "10px",
          border: "1px solid black",
        }}
      >
        <form onSubmit={submitHandle}>
          <input
            type="email"
            value={details.email}
            onChange={eventHandle}
            name="email"
            placeholder="Email"
          />
          <input
            type="password"
            value={details.password}
            onChange={eventHandle}
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            value={details.confirm}
            onChange={eventHandle}
            name="confirm"
            placeholder="Confirm Password"
          />
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <input
              type="checkbox"
              value={details.newsletter}
              onChange={eventHandle}
              name="newsletter"
              id="newsletter"
            />
            <label htmlFor="newsletter">I want a newsletter</label>
          </div>
          <button onChange={submitHandle}>Submit</button>
        </form>
      </center>
    </div>
  );
}
