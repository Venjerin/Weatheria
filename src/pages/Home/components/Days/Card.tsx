import React from "react";
import s from './Days.module.scss';
import { Day } from "./Days";
import { GlobalSvgSelector } from "../../../../assets/images/icons/global/GlobalSvgSelector";
interface Props {}

export const Card = ({option}: any) => {
    return (
      <div className={s.card}>
        {}
        <div className={s.day}>{option.day}</div>
        <div className={s.day_info}>{option.day_info}</div>
        <div className={s.img}>
          <GlobalSvgSelector id={option.icon_id}></GlobalSvgSelector>
        </div>
        <div className={s.temp_day}>{option.temp_day}</div>
        <div className={s.temp_night}>{option.temp_day}</div>
        <div className={s.info}>{option.info}</div>
      </div>
    );
}