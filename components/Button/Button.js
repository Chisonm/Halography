import React from 'react'

function Button({text,style,textColor}) {
    return (
        <a className="btn" style={style} textColor={textColor}>
            {text}
        </a>
    )
}

export default Button
