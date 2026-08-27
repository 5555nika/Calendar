import { Button, Layout, Modal, Row } from "antd"
import { useEffect, useState } from "react"
import { EventCalendar } from "../components/EventCalendar"
import { EventForm } from "../components/EventForm"
import { useTypeSelector } from "../hooks/useTypeSelector"
import { useActions } from "../hooks/useActions"
import type { IEvent } from "../models/types"


export const Event = () => {
    const [visible, setVisible] = useState(false)

    const { fetchGuest, createEvent, eventFilter } = useActions()
    const { events, guests } = useTypeSelector(state => state.event)
    const { user } = useTypeSelector(state => state.auth)
    
    const add = (event: IEvent) => {
        // Дописываем автора и отправляем в Redux!
        createEvent({...event, author: user.username, id: Date.now()})
        setVisible(false)
    }

    useEffect(() => {
        fetchGuest() // Загружаем всех возможных гостей для выпадающего списка
        eventFilter(user.username) // Загружаем события конкрет. залог. польз.!
    }, [])

    return (
        <Layout>
            <EventCalendar events={events} />
            <Row justify='center'>
                <Button onClick={() => setVisible(true)}>Добавить событие</Button>
            </Row>
            <Modal
            title='Добавить событие'
            footer={null}
            open={visible}
            onCancel={() => setVisible(false)}
            ><EventForm guests={guests} onAdd={add} />
            </Modal>
        </Layout>
    )
}