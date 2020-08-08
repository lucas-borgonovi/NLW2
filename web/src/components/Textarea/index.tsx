import React, { TextareaHTMLAttributes } from 'react'

import './styles.css'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;

    label: string
}
// o parametro ...rest é para i Textarea poder aceitar todos as
// propriedades padrao do Textarea mais aquelas da interface

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={label}>{label}</label>
            <textarea  id={name} {...rest}/>
        </div>
    )
}

export default Textarea;