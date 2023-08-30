import React from "react";
import s from './Days.module.scss';
import { GlobalSvgSelector } from "../../../../assets/images/icons/global/GlobalSvgSelector";
import { Card } from "./Card";
import Tabs from "./Tabs";
import { connect } from "react-redux";
interface Props {}

export interface Day {
  day: string
  day_info: string
  icon_id: string
  temp_day: string
  temp_night: string
  info: string
}

const days = [
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
const hours = [
  {
    hour: "12:00",
    hour_info: "28 авг",
    icon_id: "sun",
    temp_hour: "+18",
    info: "Ясно",
  },
  {
    hour: "13:00",
    hour_info: "29 авг",
    icon_id: "small_rain_sun",
    temp_day: "+18",
    info: "Небольшой дождь и солнце",
  },
  {
    hour: "14:00",
    hour_info: "30 авг",
    icon_id: "rain",
    temp_hour: "+18",
    info: "Небольшой дождь",
  },
  {
    hour: "15:00",
    hour_info: "31 авг",
    icon_id: "mainly_cloudy",
    temp_hour: "+18",
    info: "Облачно",
  },
  {
    hour: "16:00",
    hour_info: "1 сен",
    icon_id: "mainly_cloudy",
    temp_hour: "+18",
    info: "Облачно",
  },
  {
    hour: "17:00",
    hour_info: "2 сен",
    icon_id: "sun",
    temp_hour: "+18",
    info: "Ясно",
  },
  {
    hour: "18:00",
    hour_info: "3 сен",
    icon_id: "sun",
    temp_hour: "+18",
    info: "Ясно",
  },
];

const Days = (props: any) => {
    // const days: Array<Day> = [
    //   {
    //     day: "Сегодня",
    //     day_info: "28 авг",
    //     icon_id: "sun",
    //     temp_day: "+18",
    //     temp_night: "+15",
    //     info: "Ясно",
    //   },
    //   {
    //     day: "Завтра",
    //     day_info: "29 авг",
    //     icon_id: "small_rain_sun",
    //     temp_day: "+18",
    //     temp_night: "+15",
    //     info: "Небольшой дождь и солнце",
    //   },
    //   {
    //     day: "Ср",
    //     day_info: "30 авг",
    //     icon_id: "rain",
    //     temp_day: "+18",
    //     temp_night: "+15",
    //     info: "Небольшой дождь",
    //   },
    //   {
    //     day: "Чт",
    //     day_info: "31 авг",
    //     icon_id: "mainly_cloudy",
    //     temp_day: "+18",
    //     temp_night: "+15",
    //     info: "Облачно",
    //   },
    //   {
    //     day: "Пт",
    //     day_info: "1 сен",
    //     icon_id: "mainly_cloudy",
    //     temp_day: "+18",
    //     temp_night: "+15",
    //     info: "Облачно",
    //   },
    //   {
    //     day: "Сб",
    //     day_info: "2 сен",
    //     icon_id: "sun",
    //     temp_day: "+18",
    //     temp_night: "+15",
    //     info: "Ясно",
    //   },
    //   {
    //     day: "Вс",
    //     day_info: "3 сен",
    //     icon_id: "sun",
    //     temp_day: "+18",
    //     temp_night: "+15",
    //     info: "Ясно",
    //   },
    // ];
    return (
      <>
        <Tabs></Tabs>
        {props.currentData == "week" ? (
          <div className={s.days}>
            {days.map((day: Day) => {
              return <Card option={day} key="day"></Card>;
            })}
          </div>
        ) : (
          <div className={s.days}>
            {hours.map((hour: any) => {
              return <Card option={hour} key="hour"></Card>;
            })}
          </div>
        )}
      </>
    );
}

const mapStateToProps = (state:any) => {
   return {
    currentData: state.tabsPage.currentData
   } 
}

export default connect(mapStateToProps)(Days)