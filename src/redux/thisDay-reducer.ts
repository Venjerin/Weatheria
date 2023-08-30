import { thisDayAPI } from "../api/Api";


// const SET_CURRENT_TEMP = "SET_CURRENT_TEMP";
// const SET_CURRENT_CITY = "SET_CURRENT_CITY";
// const SET_CURRENT_FEEL_TEMP = "SET_CURRENT_FEEL_TEMP";
const SET_CURRENT_DAY = "SET_CURRENT_DAY";

let initialState = {
  thisDayTemp: "---",
  thisDayTime: "---",
  thisDayPressure: '---',
  thisDayTempFeelsLike: '---',
  thisDayCity: 'Выберите город',
  icon: "---",
  thisDayWind: {
    speed: "---",
    direction: "---"
  }
};

export type IState = typeof initialState;

const thisDayReducer = (state: IState = initialState , action: any) => {
  switch (action.type) {
    // case SET_CURRENT_TEMP:
    //   return {
    //     ...state,
    //     thisDayTemp: action.payload,
    //   };
    // case SET_CURRENT_CITY:
    //   return {
    //     ...state,
    //     thisDayCity: action.payload,
    //   };
    // case SET_CURRENT_FEEL_TEMP:
    //   return {
    //     ...state,
    //     thisDayTempFeelsLike: action.payload,
    //   };
    case SET_CURRENT_DAY:
      const main= action.payload.data.main;
      return {
        ...state,
        thisDayTemp: Math.round(main.temp),
        thisDayTempFeelsLike: Math.round(main.feels_like),
        thisDayCity: action.payload.cityname,
        thisDayPressure: main.pressure,
        thisDayTime: action.payload.time,
        icon: action.payload.data.weather[0].icon,
        thisDayWind: action.payload.wind
      };
    default:
      return state;
  }
};

export default thisDayReducer;

// export const setCurrentTempAC = (temp: number) => ({type: SET_CURRENT_TEMP, payload: temp})

// export const setCurrentCity = (city: string) => ({type: SET_CURRENT_CITY, payload: city})

// export const setCurrentFeelTemp = (feelTemp: number) => ({type: SET_CURRENT_FEEL_TEMP, payload: feelTemp})

export const setCurrentDay = (data: {}, cityname:string, time:string, wind: {}) => ({type: SET_CURRENT_DAY, payload: {data, cityname, time, wind}})

export const getCurrentData = (city: string, cityname: string) => async (dispatch: any) => {
    const currentDate = new Date();
    let response = await thisDayAPI.getCurrentTemp(city);
    if (response.cod === 200) {
      // response - объект с сервера со всеми данными
      const time = getCityTime(response.timezone);
      const wind = getCityWind(response.wind)
      dispatch(setCurrentDay(response, cityname, time, wind));
    }
  };

const getCityWind = (wind: any) => {
  const deg = wind.deg;
  const directions = [
    "северо-восток",
    "юго-восток",
    "юго-запад",
    "северо-запад",
  ];
  let direction;
  if (deg % 90 == 0) {
    deg == 0
      ? (direction = "северный")
      : deg == 90
      ? (direction = "восточный")
      : deg == 180
      ? (direction = "южный")
      : (direction = "западный");
  } else {
    const directionIndex = Math.floor(deg / 90);
    direction = directions[directionIndex];
  }
  return { speed: Math.round(wind.speed), direction };
};


const getCityTime = (timezone: number) => {
  const currentDate = new Date();
  const utcHours = currentDate.getUTCHours();
  const utcMinutes = currentDate.getUTCMinutes();
  const timezoneInSeconds = timezone; // Смещение временной зоны в секундах
  const totalSeconds = utcHours * 3600 + utcMinutes * 60 + timezoneInSeconds;
  const newDate = new Date(0); // Создаем новый объект даты с началом эпохи (UTC)
  newDate.setUTCSeconds(totalSeconds);

  // Формат времени в строку "ЧЧ:ММ"
  const formattedTime = `${newDate
    .getUTCHours()
    .toString()
    .padStart(2, "0")}:${newDate.getUTCMinutes().toString().padStart(2, "0")}`;
  return formattedTime;
};


    // dispatch(setCurrentTempAC(Math.round(response.main.temp)));
    // dispatch(setCurrentCity(cityname))
    // dispatch(setCurrentFeelTemp(Math.round(response.main.feels_like)))
