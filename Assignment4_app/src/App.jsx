import { useEffect, useState } from 'react'
import './App.css'
import Keyboard from './Keyboard.jsx'


export function App() {
  const phrase = ("Coding is both a practical skill and a creative outlet for building innovative solutions.")
  const [typedPhrase, setTypedPhrase] = useState("")
  // const [nextKey, setNextKey] = useState(phrase[0])
  const [pressedKeys, setPressedKeys] = useState({});
  const [shiftUp, setShiftUp] = useState(true);
  const [highlighedKeys, setHighlightedKeys] = useState({"Shift": true, "C" : true});
  const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "`", "-", "=", "[", "]", "\'", ";", "'", ",", ".", "/"];

  

  useEffect(() => {
    function keydown(e) {
      if (e.repeat) return;
      setPressedKeys((prev) => ({ ...prev, [e.key]: true })); // Copilot assisted
      if (e.key === "Shift") {
        setShiftUp(false)
      }
      if (e.key === phrase[typedPhrase.length]) { // correct key was typed 
        setTypedPhrase((oldTypedPhrase) => {
          return (oldTypedPhrase + e.key)
        })
      }
      if (phrase.slice(typedPhrase.length, typedPhrase.length + 1) in lowercaseLetters) {
        setHighlightedKeys({...highlighedKeys, "Shift" : false, [e.key] : true})
      } else {
        setHighlightedKeys({...highlighedKeys, "Shift" : true, [e.key.toUpperCase()] : true})
      }
    }

    function keyup(e) {
      setPressedKeys((prev) => ({ ...prev, [e.key]: false })) // Copilot assisted
      if (e.key === "Shift") {
        setShiftUp(true)
      }
    }

    window.addEventListener("keydown", keydown);
    window.addEventListener("keyup", keyup);

    return () => {
      window.removeEventListener("keydown", keydown);
      window.removeEventListener("keyup", keyup);
    };
  }, [typedPhrase, phrase]); // Copilot assisted


  return (
    <>
      <div className="phrase">
        <span className="typed-phrase">
          {typedPhrase}
        </span>
        <span className="pointer">
          {phrase.slice(typedPhrase.length, typedPhrase.length + 1)}
        </span>
        {phrase.slice(typedPhrase.length + 1)}
      </div>
      <Keyboard shiftUp={shiftUp} pressedKeys={pressedKeys} highlighted={highlighedKeys} />
    </>
  )
}
