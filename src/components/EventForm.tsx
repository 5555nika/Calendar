import { Button, DatePicker, Form, Input, Row, Select } from "antd"
import { useState } from "react"
import { rules } from "../utils/rules"
import { Dayjs } from 'dayjs'
import type { IEvent, IUser } from "../models/types"

export interface IEventForm {
    guests: IUser[],
    onAdd: (event: IEvent) => void
}

export const EventForm = ({ guests, onAdd }: IEventForm) => {

    const [event, setEvent] = useState<IEvent>({
        id: 0,
        author: '',
        guest: '',
        date: '',
        description: ''
    } as IEvent)

    const handleSubmit = () => {
        onAdd(event)
        setEvent({
            description: '',
            date: '',
            guest: '',
        } as IEvent);

    }

    const selectDate = (date: Dayjs | null) => {
        if (date) {
        const formatDate = date.format('YYYY-MM-DD')
        setEvent({...event, date: formatDate}) 
    }
}

    return (
        <Form onFinish={handleSubmit}>
            <Form.Item
            label='Добавить событие'
            name='description'
            rules={[rules.required()]}>
                <Input 
                value={event.description} 
                onChange={(e) => setEvent({...event, description: e.target.value})}  />
            </Form.Item>

            <Form.Item
            label='Выбрать дату'
            name='date'
            rules={[rules.required()]}
            >
                <DatePicker onChange={selectDate}  style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
            label='Выбрать гостя'
            name='guest'
            rules={[rules.required()]}>
                <Select 
                value={event.guest} 
                onChange={(guest: string) => setEvent({...event, guest})}
                options={
                    guests.map(ev => ({
                        value: ev.username, label: ev.username }))
                }/>
            </Form.Item>

            <Form.Item>
                <Row justify='center' >
                <Button block type="primary" htmlType="submit"
                >Создать</Button>
                </Row>               
            </Form.Item>           
        </Form>
    )
}


/*
const [form] = Form.useForm();
  // ВОТ ОН — ОДИН ЕДИНСТВЕННЫЙ ДИНАМИЧЕСКИЙ ОБРАБОТЧИК:
    const handleSubmit = (values: any) => {
    // 1. values.date — это объект dayjs. Мы форматируем его в строку:
    const formatedDate = values.date.format('YYYY.MM.DD');
    // 2. Отдаем готовый объект наверх родителю:
    onAdd({
        description: values.description,
        date: formatedDate,
        guest: values.guest,
    } as IEvent);
    // 3. Очищаем форму:
    form.resetFields();
    };
*/