import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

export default function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="" alt="Lucas borgonovi" />
                <div>
                    <strong>Lucas Borgonovi</strong>
                    <span>Química</span>
                </div>
            </header>
                <p>Entusiasta das melhores tecnologias
                <br /><br />
                    Apaxionado por explodir coisas...
                </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}