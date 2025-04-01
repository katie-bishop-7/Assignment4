import React, { useEffect, useState } from 'react';
import Key from './Key.jsx';
function Keyboard({onKeyPress : handleKeyPress}) {

    const [pressedKeys, setPressedKeys] = useState({});

    useEffect(() => {
        function keydown(e) {
            if (e.repeat) return;
            setPressedKeys((prev) => ({ ...prev, [e.key]: true })); // Copilot assisted
            handleKeyPress(e.key)
            // if (e.key === "Shift"){

            // }
            console.log(e.key)
        }

        function keyup(e) {   
            setPressedKeys((prev) => ({ ...prev, [e.key]: false })) // Copilot assisted
        }
       
        window.addEventListener("keydown", keydown);
        window.addEventListener("keyup", keyup);

        return () => {
            window.removeEventListener("keydown", keydown);
            window.removeEventListener("keyup", keyup);
        };
    }, [])


  




    return (
        <main className="content">
           
            <div className="keyboard">
                <div className="keyboard-row">
                    <Key value="`" class="" pressed={pressedKeys["`"]} />
                    <Key value="1" class="" pressed={pressedKeys["1"]} />
                    <Key value="2" class="" pressed={pressedKeys["2"]} />
                    <Key value="3" class="" pressed={pressedKeys["3"]} />
                    <Key value="4" class="" pressed={pressedKeys["4"]} />
                    <Key value="5" class="" pressed={pressedKeys["5"]} />
                    <Key value="6" class="" pressed={pressedKeys["6"]} />
                    <Key value="7" class="" pressed={pressedKeys["7"]} />
                    <Key value="8" class="" pressed={pressedKeys["8"]} />
                    <Key value="9" class="" pressed={pressedKeys["9"]} />
                    <Key value="0" class="" pressed={pressedKeys["0"]} />
                    <Key value="-" class="" pressed={pressedKeys["-"]} />
                    <Key value="=" class="" pressed={pressedKeys["="]} />
                </div>
                <div className="keyboard-row">
                    <Key value="q" class="" pressed={pressedKeys["q"]} />
                    <Key value="w" class="" pressed={pressedKeys["w"]} />
                    <Key value="e" class="" pressed={pressedKeys["e"]} />
                    <Key value="r" class="" pressed={pressedKeys["r"]} />
                    <Key value="t" class="" pressed={pressedKeys["t"]} />
                    <Key value="y" class="" pressed={pressedKeys["y"]} />
                    <Key value="u" class="" pressed={pressedKeys["u"]} />
                    <Key value="i" class="" pressed={pressedKeys["i"]} />
                    <Key value="o" class="" pressed={pressedKeys["o"]} />
                    <Key value="p" class="" pressed={pressedKeys["p"]} />
                    <Key value="[" class="" pressed={pressedKeys["["]} />
                    <Key value="]" class="" pressed={pressedKeys["]"]} />
                    <Key value="\" class="" pressed={pressedKeys["\'"]} />
                </div>
                <div className="keyboard-row">
                    <Key value="a" class="" pressed={pressedKeys["a"]} />
                    <Key value="s" class="" pressed={pressedKeys["s"]} />
                    <Key value="d" class="" pressed={pressedKeys["d"]} />
                    <Key value="f" class="" pressed={pressedKeys["f"]} />
                    <Key value="g" class="" pressed={pressedKeys["g"]} />
                    <Key value="h" class="" pressed={pressedKeys["h"]} />
                    <Key value="j" class="" pressed={pressedKeys["j"]} />
                    <Key value="k" class="" pressed={pressedKeys["k"]} />
                    <Key value="l" class="" pressed={pressedKeys["l"]} />
                    <Key value=";" class="" pressed={pressedKeys[";"]} />
                    <Key value="'" class="" pressed={pressedKeys["'"]} />
                </div>
                <div className="keyboard-row">
                    <Key value="Shift" class="shift" pressed={pressedKeys["Shift"]} />
                    <Key value="z" class="" pressed={pressedKeys["z"]} />
                    <Key value="x" class="" pressed={pressedKeys["x"]} />
                    <Key value="c" class="" pressed={pressedKeys["c"]} />
                    <Key value="v" class="" pressed={pressedKeys["v"]} />
                    <Key value="b" class="" pressed={pressedKeys["b"]} />
                    <Key value="n" class="" pressed={pressedKeys["n"]} />
                    <Key value="m" class="" pressed={pressedKeys["m"]} />
                    <Key value="," class="" pressed={pressedKeys[","]} />
                    <Key value="." class="" pressed={pressedKeys["."]} />
                    <Key value="/" class="" pressed={pressedKeys["/"]} />
                    <Key value="Shift" class="shift" pressed={pressedKeys["Shift"]} />
                </div>
                <Key value="" class="space-bar" pressed={pressedKeys[' ']} />
            </div>
        </main>
    )
}

export default Keyboard;