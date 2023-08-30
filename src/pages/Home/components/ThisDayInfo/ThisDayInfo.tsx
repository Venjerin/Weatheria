import s from './ThisDayInfo.module.scss';
import React from "react";
import cloud from '../../../../assets/images/cloud.png'
import { ThisDayItem } from './ThisDayItem';
import { connect } from 'react-redux';
import { stat } from 'fs';
interface Props {}

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

const ThisDayInfo = (props: any) => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: `${props.temp}° - ощущается как ${props.temp_feels_like}°`,
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: `${props.pressure} мм ртутного столба`,
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков',
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: `${props.wind.speed} м/с ${props.wind.direction}`,
    },
  ];
    return (
      <div className={s.this_day_info}>
        <div className={s.this_day_info_items}>
          {items.map ((item: Item) => {
             return <ThisDayItem key={item.icon_id} item={item}></ThisDayItem>
            })
          }
        </div>
        <img className={s.cloud_image} src={cloud} alt="облако"></img>
      </div>
    );
}

const mapStateToProps = (state: any) => {
  return {
    temp: state.mainPage.thisDayTemp,
    temp_feels_like: state.mainPage.thisDayTempFeelsLike,
    pressure: state.mainPage.thisDayPressure,
    wind: state.mainPage.thisDayWind
  }
}

export default connect(mapStateToProps)(ThisDayInfo)