

function Key({value : value, class : className}) {
    return (
        <div className={`keyboard-key${className}`}>
            {value}
        </div>
    )
}

export default Key;