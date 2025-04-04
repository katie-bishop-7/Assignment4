

function Key({value : value, pressed: pressedDict, highlighted: highlightedDict}) {

    let className = "";
    if (value === "Shift") {
        className="shift"
    } else if (value === "Space") {
        className="space-bar"
        value = " "
    }

    return (
        <div className={`keyboard-key ${className} ${pressedDict[value] ? "active" : ""} ${highlightedDict[value] ? "highlighted" : ""}`}>
            {value}
        </div>
    )
}

export default Key;