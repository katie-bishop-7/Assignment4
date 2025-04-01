import React, { useState } from 'react';
import Key from './Key.jsx';
function Keyboard() {

    // const [phrase, setPhrase] = useState("Coding is both a practical skill and a creative outlet for building innovative solutions.")
    // const [typedPhrase, setTypedPhrase] = useState("")

    // function keydown(e) {
    //     if (e.repeat) return; // keydown event trigger rapidly if you hold the key, we only want to detect keydown once.
    //     // if key is the same as the one in the phrase, we want to add it to the typedPhrase
    //     e.key.className = "pressed"
    //     if (e.key === phrase[typedPhrase.length]) {
    //         setTypedPhrase = [...typedPhrase, e.key]
    //         if (e.key === phrase[phrase.length - 1]){
    //             setPhrase("done") // almost certainly wrong
    //         }
    //     }


    //     console.log(e.key + " was pressed!")
    // }
    // window.addEventListener("keydown", keydown);

    // function keyup(e) {
    //     console.log(e.key + " was lifted!")
    // }

    // window.addEventListener("keyup", keyup);



    return (
        <main className="content">
            <div className="phrase">
                <span className="typed-phrase"></span><span className="pointer">C</span>oding is both a practical skill and a creative outlet for building innovative solutions.
            </div>
            <div className="keyboard">
                <div className="keyboard-row">
                    <Key value="`" class="" />
                    <Key value="1" class="" />
                    <Key value="2" class="" />
                    <Key value="3" class="" />
                    <Key value="4" class="" />
                    <Key value="5" class="" />
                    <Key value="6" class="" />
                    <Key value="7" class="" />
                    <Key value="8" class="" />
                    <Key value="9" class="" />
                    <Key value="0" class="" />
                    <Key value="-" class="" />
                    <Key value="=" class="" />
                </div>
                <div className="keyboard-row">
                    <Key value="q" class="" />
                    <Key value="w" class="" />
                    <Key value="e" class="" />
                    <Key value="r" class="" />
                    <Key value="t" class="" />
                    <Key value="y" class="" />
                    <Key value="u" class="" />
                    <Key value="i" class="" />
                    <Key value="o" class="" />
                    <Key value="p" class="" />
                    <Key value="[" class="" />
                    <Key value="]" class="" />
                    <Key value="\" class="" />
                </div>
                <div className="keyboard-row">
                    <Key value="a" class="" />
                    <Key value="s" class="" />
                    <Key value="d" class="" />
                    <Key value="f" class="" />
                    <Key value="g" class="" />
                    <Key value="h" class="" />
                    <Key value="j" class="" />
                    <Key value="k" class="" />
                    <Key value="l" class="" />
                    <Key value=";" class="" />
                    <Key value="'" class="" />
                </div>
                <div className="keyboard-row">
                    <Key value="Shift" class=" shift" />
                    <Key value="z" class="" />
                    <Key value="x" class="" />
                    <Key value="c" class="" />
                    <Key value="v" class="" />
                    <Key value="b" class="" />
                    <Key value="n" class="" />
                    <Key value="m" class="" />
                    <Key value="," class="" />
                    <Key value="." class="" />
                    <Key value="/" class="" />
                    <Key value="Shift" class=" shift" />
                </div>
                <div className="keyboard-key space-bar"></div>
            </div>
        </main>
    )
}

export default Keyboard;