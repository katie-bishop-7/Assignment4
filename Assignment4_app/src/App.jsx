import { useCallback, useState } from 'react'
import './App.css'
import Keyboard from './Keyboard.jsx'


export function App() {
  const [phrase, setPhrase] = useState("Coding is both a practical skill and a creative outlet for building innovative solutions.")
  const [typedPhrase, setTypedPhrase] = useState("")
  
  function handleKeyPress(key){
    if (key === phrase[typedPhrase.length]){
      if (typedPhrase.length === phrase.length - 1){
        setPhrase("Done")
      } else {
        setTypedPhrase(typedPhrase + key)
      }
    }
  }
  return (
    <>
      <div className="phrase">
        <span className="typed-phrase"></span><span className="pointer">C</span>oding is both a practical skill and a creative outlet for building innovative solutions.
      </div>
      <Keyboard onKeyPress={handleKeyPress}/>
    </>
  )
}
