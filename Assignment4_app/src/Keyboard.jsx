import React, { useEffect, useState } from 'react';
import Key from './Key.jsx';
function Keyboard({ shiftUp: shiftUp, pressedKeys: pressedKeys, highlighted: highlightedKeys }) {


    return (
        <main className="content">
            <div className="keyboard">
                <div className="keyboard-row">
                    <Key value={shiftUp ? "`" : "~"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "1" : "!"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "2" : "@"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "3" : "#"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "4" : "$"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "5" : "%"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "6" : "^"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "7" : "&"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "8" : "*"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "9" : "("} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "0" : ")"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "-" : "_"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "=" : "+"} pressed={pressedKeys} highlighted={highlightedKeys} />
                </div>
                <div className="keyboard-row">
                    <Key value={shiftUp ? "q" : "Q"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "w" : "W"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "e" : "E"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "r" : "R"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "t" : "T"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "y" : "Y"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "u" : "U"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "i" : "I"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "o" : "O"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "p" : "P"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "[" : "{"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "]" : "}"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "\'" : "|"} pressed={pressedKeys} highlighted={highlightedKeys} />
                </div>
                <div className="keyboard-row">
                    <Key value={shiftUp ? "a" : "A"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "s" : "S"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "d" : "D"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "f" : "F"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "g" : "G"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "h" : "H"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "j" : "J"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "k" : "K"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "l" : "L"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? ";" : ":"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "'" : "\""} pressed={pressedKeys} highlighted={highlightedKeys} />
                </div>
                <div className="keyboard-row">
                    <Key value="Shift" pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "z" : "Z"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "x" : "X"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "c" : "C"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "v" : "V"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "b" : "B"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "n" : "N"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "m" : "M"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "," : "<"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "." : ">"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value={shiftUp ? "/" : "?"} pressed={pressedKeys} highlighted={highlightedKeys} />
                    <Key value="Shift" pressed={pressedKeys} highlighted={highlightedKeys} />
                </div>
                <Key value="Space" shiftUp="space-bar" pressed={pressedKeys} highlighted={highlightedKeys} />
            </div>
        </main>
    )
}

export default Keyboard;