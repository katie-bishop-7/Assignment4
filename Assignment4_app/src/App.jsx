import { use, useEffect, useState } from 'react'
import './App.css'
import Keyboard from './Keyboard.jsx'


export function App() {
  const typingPhrases = [
    "Math is the language the universe whispers in.",
    "Bananas are curvier when no one is watching.",
    "Type fast, but don’t let the letters escape.",
    "Every number hides a secret waiting to be solved.",
    "Why do cats ignore gravity? Ask Newton.",
    "Coding is just arguing with the compiler politely.",
    "Raindrops tap Morse code on the window pane.",
    "Zebras wear stripes to confuse your eyes.",
    "The keyboard holds more power than a sword."
  ];
  
  const [phrase, setPhrase] = useState("Coding is both art and science.")
  const [typedPhrase, setTypedPhrase] = useState("")
  const [nextKey, setNextKey] = useState(phrase[0])
  const [pressedKeys, setPressedKeys] = useState({});
  const [shiftUp, setShiftUp] = useState(true);
  const [highlightedKeys, setHighlightedKeys] = useState({});
  const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "`", "-", "=", "[", "]", "\'", ";", "'", ",", ".", "/", " ", "Shift"];



  useEffect(() => {
    function keydown(e) {
      if (e.repeat) return;

      // set the dictionary of pressed keys every time keys are pressed
      setPressedKeys((prev) => ({ ...prev, [e.key]: true })); // Copilot assisted

      // if the key is shift, set the shiftUp to false
      if (e.key === "Shift") {
        setShiftUp(false)
      }

      // if the key is the nextKey, set the typedPhrase to the old typedPhrase + the new key and set the next key
      if (e.key === nextKey) {
        setTypedPhrase((oldTypedPhrase) => {
          return (oldTypedPhrase + e.key)
        })
        if (typedPhrase.length + 1 === phrase.length) { // if the phrase is complete, set the next phrase to a random phrase
          setPhrase(typingPhrases[Math.floor(Math.random() * typingPhrases.length)])
        }
        setNextKey(phrase[typedPhrase.length + 1]) // set the next key to the next key in the phrase
      }
    }

    function keyup(e) {
      // reset the setPressedKeys to false when the key is released
      setPressedKeys((prev) => ({ ...prev, [e.key]: false })) // Copilot assisted

      // if the key is shift, set the shiftUp to true
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


  useEffect(() => {
    // set the highlighted keys to the next key

    // if the next key is a lowercase letter, set the highlighted keys to the next key
    if (lowercaseLetters.includes(nextKey)) {
      setHighlightedKeys({ [nextKey]: true })
    } else {
      // if the next key is an uppercase letter, highlight shift as well
      setHighlightedKeys({"Shift": true, [nextKey] : true})
    }
  }, [nextKey]);

  // every time the phrase changes, set the next key to the beginning of the phrase and reset the typed phrase
  useEffect(() => {
    setNextKey(phrase[0])
    setTypedPhrase("")
  }
  , [phrase]);


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
      <Keyboard shiftUp={shiftUp} pressedKeys={pressedKeys} highlighted={highlightedKeys} />
    </>
  )
}
