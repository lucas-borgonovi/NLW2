import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;

    label: string
}
// o parametro ...rest é para i input poder aceitar todos as
// propriedades padrao do input mais aquelas da interface

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={label}>{label}</label>
            <input type="text" id={name} {...rest}/>
        </div>
    )
}

export default Input;