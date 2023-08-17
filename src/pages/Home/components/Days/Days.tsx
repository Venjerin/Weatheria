import React from "react";
import s from './Days.module.scss';
import { GlobalSvgSelector } from "../../../../assets/images/icons/global/GlobalSvgSelector";
import { Card } from "./Card";
import { Tabs } from "./Tabs";
interface Props {}

export interface Day {
  day: string
  day_info: string
  icon_id: string
  temp_day: string
  temp_night: string
  info: string
}

export const Days = (props: Props) => {
    const days: Array<Day> = [
      {
        day: "Сегодня",
        day_info: "28 авг",
        icon_id: "sun",
        temp_day: "+18",
        temp_night: "+15",
        info: "Ясно",
      },
      {
        day: "Завтра",
        day_info: "29 авг",
        icon_id: "small_rain_sun",
        temp_day: "+18",
        temp_night: "+15",
        info: "Небольшой дождь и солнце",
      },
      {
        day: "Ср",
        day_info: "30 авг",
        icon_id: "rain",
        temp_day: "+18",
        temp_night: "+15",
        info: "Небольшой дождь",
      },
      {
        day: "Чт",
        day_info: "31 авг",
        icon_id: "mainly_cloudy",
        temp_day: "+18",
        temp_night: "+15",
        info: "Облачно",
      },
      {
        day: "Пт",
        day_info: "1 сен",
        icon_id: "mainly_cloudy",
        temp_day: "+18",
        temp_night: "+15",
        info: "Облачно",
      },
      {
        day: "Сб",
        day_info: "2 сен",
        icon_id: "sun",
        temp_day: "+18",
        temp_night: "+15",
        info: "Ясно",
      },
      {
        day: "Вс",
        day_info: "3 сен",
        icon_id: "sun",
        temp_day: "+18",
        temp_night: "+15",
        info: "Ясно",
      },
    ];
    return (
      <>
        <Tabs></Tabs>
        <div className={s.days}>
          {days.map((day: Day) => {
            return <Card day={day}></Card>;
          })}
        </div>
      </>
    );
}