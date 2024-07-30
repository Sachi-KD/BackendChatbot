import { useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

 async function generateAnswer(){
  setAnswer("loading");
  const response =await axios({
     url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAHourGI4um3wLcLun1pPuHfY5oSMeu4pQ",
     method: "post",
     data:{
      "contents":[
        {"parts":[{"text":question}]},
      ],
    },

  });
 
    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);

 
}


  return (
    <>
      <h1>AI Chat</h1>
      <textarea value={question} onChange={(e)=>setQuestion(e.target.value)} cols="30" rows="10"></textarea>
      <button onClick={generateAnswer}>Answer me</button>
      <p>{answer}</p>
    </>
  )
}

export default App
