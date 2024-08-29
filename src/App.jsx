
import Header from "./comps/Header.jsx"
import Body from "./comps/Body.jsx"
import Jokes from "./comps/jokes-app/joke.jsx"
import data from "./comps/jokes-app/jokedata.js"
import Messages from "./comps/message-app/messages.jsx"
import Form from "./comps/form-app/form.jsx"
import FormPractice from "./comps/form-app/form-practice.jsx"
import Fetch from "./comps/fetch-api-app/fetch.jsx"
import Effect from "./comps/useEffect-cleanup-app/useEffect.jsx"

export default function App(){
  return (
    <div>
      <Header />
      <Body />
    </div>
  )
};