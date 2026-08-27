import { Calendar } from "antd"
import { Dayjs} from 'dayjs'
import type { IEvent } from "../models/types"

export interface IEventCalendar {
    events: IEvent[]
}
export const EventCalendar = ({  events }: IEventCalendar ) => {

    const dataRender = (value: Dayjs) => {
        const formatDate = value.format('YYYY-MM-DD')
        const currentDate = events.filter(ev => ev.date === formatDate)

        return (
            <div>
                {currentDate.map(ev =>
                    <div key={ev.id}
                    style={{marginBottom: '2px', fontSize: '12px', background: '#e6f7ff'}}
                    >{ev.description}</div>
                )}
            </div>
        )
    }

    return (
        <Calendar cellRender={dataRender} />
    )
}