import React, { FC } from "react";
import s from './ThisDay.module.scss';
import { GlobalSvgSelector } from "../../../../assets/images/icons/global/GlobalSvgSelector";
// import { setTodayData } from "../../../../store/slices/currentWeatherSlice";
import { connect, useSelector } from "react-redux";
import { IState } from "../../../../redux/thisDay-reducer";
import store from "../../../../redux/redux-store";


type ILocalState = IState;
interface Props {}

const ThisDay = (props: any) => {
  return (
    <div className={s.this_day}>
      <div className={s.top_block}>
        <div className={s.top_block_wrapper}>
          <div className={s.this_temp}>{props.temp}°</div>
          <div className={s.this_day_name}>Сегодня</div>
        </div>
        <img className={s.icon} src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}></img>
        {/* <GlobalSvgSelector id="sun"></GlobalSvgSelector> */}
      </div>
      <div className={s.bottom_block}>
        <div className={s.this_time}>
          Время: <span>{props.time}</span>
        </div>
        <div className={s.this_city}>{props.city}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  console.log('mapState: ' + state.mainPage.thisDayTemp)
  return { 
      temp: state.mainPage.thisDayTemp,
      city: state.mainPage.thisDayCity,
      icon: state.mainPage.icon,
      time: state.mainPage.thisDayTime
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(ThisDay)