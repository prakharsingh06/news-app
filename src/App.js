import { useState } from 'react';

//components
import Header from './components/Header';
import MainSection from "./components/MainSection";

function App() {
  const [text,setText] = useState("");
  const [flag,setFlag] = useState(1);
  return (
    <>
    <Header flag={flag} setText={setText}/>
    <MainSection flag={flag} setFlag={setFlag} setText={setText} text={text}/>
    </>
  );
}

export default App;
