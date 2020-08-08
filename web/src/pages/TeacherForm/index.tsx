import React, { useState, FormEvent } from 'react'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import {useHistory} from 'react-router-dom'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'
import api from '../../services/api'

function TeacherForm() {
    const history = useHistory();
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setWhatsApp] = useState('')
    const [bio, setBio] = useState('')
    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' },
    ])


    function addNewScheduleitem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ])
    }

    function handleCreateClass(e:FormEvent) {
        e.preventDefault()

        api.post('classes',{
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(()=>{
            alert('Cadastro efetuado com sucesso')

            history.push('/')
        }).catch(()=>{
            alert('Erro no cadastro!')
        })
    }

    function setScheduleItemValue(position:number, field:string, value:string){
        const updatedScheduleItems = scheduleItems.map((scheduleItem,index)=>{
            if(index === position){
                return {...scheduleItem,[field]:value}
            }

            return scheduleItem;
        })

        setScheduleItems(updatedScheduleItems);

    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader description="teste" title="Que bom que você quer dar aulas" />
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input
                            name="name"
                            label="Nome completo"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(e) => setAvatar(e.target.value)}
                        />
                        <Input
                            name="whatsapp"
                            label="WhatsApp"
                            value={whatsapp}
                            onChange={(e) => setWhatsApp(e.target.value)}
                        />
                        <Textarea
                            name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />

                    </fieldset>
                    <fieldset>
                        <legend>Sobre a Aula</legend>

                        <Select
                            name="subject"
                            label="Matéria"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'História', label: 'História' },
                                { value: 'Português', label: 'Português' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Química', label: 'Química' },
                            ]}
                        />
                        <Input
                            name="cost"
                            label="Custo da sua hora por aula"
                            value={cost}
                            onChange={(e) => setCost(e.target.value)}

                        />

                    </fieldset>
                    <fieldset>
                        <legend>
                            Horários Disponíveis
                        <button type="button" onClick={addNewScheduleitem}>
                                + Novo horário
                        </button>
                        </legend>
                        {scheduleItems.map((scheduleItem,index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Dia da Semana"
                                        value={scheduleItem.week_day}
                                        onChange={e=>setScheduleItemValue(index,'week_day',e.target.value)}
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-Feira' },
                                            { value: '2', label: 'Terça-Feira' },
                                            { value: '3', label: 'Quarta-Feira' },
                                            { value: '4', label: 'Quinta-Feira' },
                                            { value: '5', label: 'Sexta-Feira' },
                                            { value: '6', label: 'Sábado' },
                                        ]}
                                    />
                                    <Input 
                                    name="from" 
                                    label="Das" 
                                    type="time" 
                                    value={scheduleItem.from}
                                    onChange={e=>setScheduleItemValue(index,'from',e.target.value)}
                                    />
                                    <Input 
                                    name="to" 
                                    label="Até" 
                                    type="time"
                                    value={scheduleItem.to}
                                    onChange={e=>setScheduleItemValue(index,'to',e.target.value)} 
                                    />
                                </div>
                            )
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                    Importante! <br />
                    Preencha todos os dados
                </p>
                        <button type="button">
                            Salvar Cadastro
                </button>
                    </footer>
                </form>
            </main>
        </div>

    )
}

export default TeacherForm