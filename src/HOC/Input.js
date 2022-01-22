import React from 'react'

export const Input = (props) => {
    return (
        <div>
            <input type={props.type} placeholder={props.placeholder}   required={props.required}   value={props.value} onChange={props.onChange} />
        </div>
    )
}
