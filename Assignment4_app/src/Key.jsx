

function Key({value : value, class : className, pressed: pressed}) {
    return (
        <div className={`keyboard-key ${className} ${pressed ? "active" : ""}`}>
            {value}
        </div>
    )
}

export default Key;