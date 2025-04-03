import React, { useEffect, useState } from 'react';
import Key from './Key.jsx';
function Keyboard({shiftUp : shiftUp, pressedKeys : pressedKeys}) {

    
    return (
        <main className="content">
            <div className="keyboard">
                <div className="keyboard-row">
                    <Key value={shiftUp ? "`" : "~"} class="" pressed={pressedKeys["`"]} />
                    <Key value={shiftUp ? "1" : "!"} class="" pressed={pressedKeys["1"]} />
                    <Key value={shiftUp ? "2" : "@"} class="" pressed={pressedKeys["2"]} />
                    <Key value={shiftUp ? "3" : "#"} class="" pressed={pressedKeys["3"]} />
                    <Key value={shiftUp ? "4" : "$"} class="" pressed={pressedKeys["4"]} />
                    <Key value={shiftUp ? "5" : "%"} class="" pressed={pressedKeys["5"]} />
                    <Key value={shiftUp ? "6" : "^"} class="" pressed={pressedKeys["6"]} />
                    <Key value={shiftUp ? "7" : "&"} class="" pressed={pressedKeys["7"]} />
                    <Key value={shiftUp ? "8" : "*"} class="" pressed={pressedKeys["8"]} />
                    <Key value={shiftUp ? "9" : "("} class="" pressed={pressedKeys["9"]} />
                    <Key value={shiftUp ? "0" : ")"} class="" pressed={pressedKeys["0"]} />
                    <Key value={shiftUp ? "-" : "_"} class="" pressed={pressedKeys["-"]} />
                    <Key value={shiftUp ? "=" : "+"} class="" pressed={pressedKeys["="]} />
                </div>
                <div className="keyboard-row">
                    <Key value={shiftUp ? "q" : "Q"} class="" pressed={pressedKeys["q"]} />
                    <Key value={shiftUp ? "w" : "W"} class="" pressed={pressedKeys["w"]} />
                    <Key value={shiftUp ? "e" : "E"} class="" pressed={pressedKeys["e"]} />
                    <Key value={shiftUp ? "r" : "R"} class="" pressed={pressedKeys["r"]} />
                    <Key value={shiftUp ? "t" : "T"} class="" pressed={pressedKeys["t"]} />
                    <Key value={shiftUp ? "y" : "Y"} class="" pressed={pressedKeys["y"]} />
                    <Key value={shiftUp ? "u" : "U"} class="" pressed={pressedKeys["u"]} />
                    <Key value={shiftUp ? "i" : "I"} class="" pressed={pressedKeys["i"]} />
                    <Key value={shiftUp ? "o" : "O"} class="" pressed={pressedKeys["o"]} />
                    <Key value={shiftUp ? "p" : "P"} class="" pressed={pressedKeys["p"]} />
                    <Key value={shiftUp ? "[" : "{"} class="" pressed={pressedKeys["["]} />
                    <Key value={shiftUp ? "]" : "}"} class="" pressed={pressedKeys["]"]} />
                    <Key value={shiftUp ? "\'" : "|"} class="" pressed={pressedKeys["\'"]} />
                </div>
                <div className="keyboard-row">
                    <Key value={shiftUp ? "a" : "A" } class="" pressed={pressedKeys["a"]} />
                    <Key value={shiftUp ? "s" : "S" } class="" pressed={pressedKeys["s"]} />
                    <Key value={shiftUp ? "d" : "D" } class="" pressed={pressedKeys["d"]} />
                    <Key value={shiftUp ? "f" : "F" } class="" pressed={pressedKeys["f"]} />
                    <Key value={shiftUp ? "g" : "G" } class="" pressed={pressedKeys["g"]} />
                    <Key value={shiftUp ? "h" : "H" } class="" pressed={pressedKeys["h"]} />
                    <Key value={shiftUp ? "j" : "J" } class="" pressed={pressedKeys["j"]} />
                    <Key value={shiftUp ? "k" : "K" } class="" pressed={pressedKeys["k"]} />
                    <Key value={shiftUp ? "l" : "L" } class="" pressed={pressedKeys["l"]} />
                    <Key value={shiftUp ? ";" : ":" } class="" pressed={pressedKeys[";"]} />
                    <Key value={shiftUp ? "'" : "\"" } class="" pressed={pressedKeys["'"]} />
                </div>
                <div className="keyboard-row">
                    <Key value="Shift" class="shift" pressed={pressedKeys["Shift"]} />
                    <Key value={shiftUp ? "z" : "Z" } class="" pressed={pressedKeys["z"]} />
                    <Key value={shiftUp ? "x" : "X" } class="" pressed={pressedKeys["x"]} />
                    <Key value={shiftUp ? "c" : "C" } class="" pressed={pressedKeys["c"]} />
                    <Key value={shiftUp ? "v" : "V" } class="" pressed={pressedKeys["v"]} />
                    <Key value={shiftUp ? "b" : "B" } class="" pressed={pressedKeys["b"]} />
                    <Key value={shiftUp ? "n" : "N" } class="" pressed={pressedKeys["n"]} />
                    <Key value={shiftUp ? "m" : "M" } class="" pressed={pressedKeys["m"]} />
                    <Key value={shiftUp ? "," : "<" } class="" pressed={pressedKeys[","]} />
                    <Key value={shiftUp ? "." : ">" } class="" pressed={pressedKeys["."]} />
                    <Key value={shiftUp ? "/" : "?" } class="" pressed={pressedKeys["/"]} />
                    <Key value="Shift" class="shift" pressed={pressedKeys["Shift"]} />
                </div>
                <Key value="" class="space-bar" pressed={pressedKeys[' ']} />
            </div>
        </main>
    )
}

export default Keyboard;