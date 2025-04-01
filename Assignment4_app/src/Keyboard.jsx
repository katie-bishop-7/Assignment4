
function Keyboard(){

    // const [phrase, setPhrase] = useState("Coding is both a practical skill and a creative outlet for building innovative solutions.")
    // const [typedPhrase, setTypedPhrase] = useState("")


    return(
    <body>
        <div id="root">
            <main class="content">
                <div class="phrase">
                    <span class="typed-phrase"></span><span class="pointer">C</span>oding is both a practical skill and a creative outlet for building innovative solutions.
                </div>
                <div class="keyboard">
                    <div class="keyboard-row">
                        <div class="keyboard-key">`</div>
                        <div class="keyboard-key" >1</div>
                        <div class="keyboard-key" >2</div>
                        <div class="keyboard-key" >3</div>
                        <div class="keyboard-key" >4</div>
                        <div class="keyboard-key" >5</div>
                        <div class="keyboard-key" >6</div>
                        <div class="keyboard-key" >7</div>
                        <div class="keyboard-key" >8</div>
                        <div class="keyboard-key" >9</div>
                        <div class="keyboard-key" >0</div>
                        <div class="keyboard-key" >-</div>
                        <div class="keyboard-key" >=</div>
                    </div>
                    <div class="keyboard-row">
                        <div class="keyboard-key">q</div>
                        <div class="keyboard-key">w</div>
                        <div class="keyboard-key">e</div>
                        <div class="keyboard-key">r</div>
                        <div class="keyboard-key">t</div>
                        <div class="keyboard-key">y</div>
                        <div class="keyboard-key">u</div>
                        <div class="keyboard-key">i</div>
                        <div class="keyboard-key">o</div>
                        <div class="keyboard-key">p</div>
                        <div class="keyboard-key">[</div>
                        <div class="keyboard-key">]</div>
                        <div class="keyboard-key">\</div>
                    </div>
                    <div class="keyboard-row">
                        <div class="keyboard-key">a</div>
                        <div class="keyboard-key">s</div>
                        <div class="keyboard-key">d</div>
                        <div class="keyboard-key">f</div>
                        <div class="keyboard-key">g</div>
                        <div class="keyboard-key">h</div>
                        <div class="keyboard-key">j</div>
                        <div class="keyboard-key">k</div>
                        <div class="keyboard-key">l</div>
                        <div class="keyboard-key">;</div>
                        <div class="keyboard-key">'</div>
                    </div>
                    <div class="keyboard-row">
                        <div class="keyboard-key shift">Shift</div>
                        <div class="keyboard-key">z</div>
                        <div class="keyboard-key">x</div>
                        <div class="keyboard-key">c</div>
                        <div class="keyboard-key">v</div>
                        <div class="keyboard-key">b</div>
                        <div class="keyboard-key">n</div>
                        <div class="keyboard-key">m</div>
                        <div class="keyboard-key">,</div>
                        <div class="keyboard-key">.</div>
                        <div class="keyboard-key">/</div>
                        <div class="keyboard-key shift">Shift</div>
                    </div>
                    <div class="keyboard-key space-bar"></div>
                </div>
            </main>
        </div>
    </body>
    )
}

export default Keyboard;