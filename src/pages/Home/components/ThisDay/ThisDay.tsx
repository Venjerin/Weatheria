import React from "react";
import s from './ThisDay.module.scss';
import { GlobalSvgSelector } from "../../../../assets/images/icons/global/GlobalSvgSelector";
// import { setTodayData } from "../../../../store/slices/currentWeatherSlice";
import { connect } from "react-redux";

interface Props {}

 export const ThisDay = (props: Props) => {
   return (
     <div className={s.this_day}>
       <div className={s.top_block}>
         <div className={s.top_block_wrapper}>
           <div className={s.this_temp}>20°</div>
           <div className={s.this_day_name}>Сегодня</div>
         </div>
         <GlobalSvgSelector id="sun"></GlobalSvgSelector>
       </div>
       <div className={s.bottom_block}>
         <div className={s.this_time}>
           Время: <span>21:00</span>
         </div>
         <div className={s.this_city}>Санкт-Петербург</div>
       </div>
     </div>
   );
 };

// const mapStateToProps = (state: any) => {
//   return { 
//       temp: state.currentWeather.temp,
//       time: state.currentWeather.time,
//       city: state.currentWeather.city
//   }
// };

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     setTodayData: (city: string) => {
//       dispatch (setTodayData(city))
//     }
//   }
// };

// export const ThisDayContainer = connect(mapDispatchToProps, mapDispatchToProps)(ThisDay)