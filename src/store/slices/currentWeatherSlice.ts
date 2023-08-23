import { createSlice } from '@reduxjs/toolkit';


const currentWeatherSlice = createSlice({
  name: "current-weather",
  initialState: {
    temp: "1",
    time: "0",
    city: "SPB",
  },
  reducers: {
    setTodayData: (state, action) => {
      switch (action.payload) {
        case "SPB":
          state.temp = "20S";
          state.time = "12:00S";
          state.city = "SPB";
          break;
        case "Moscow":
          state.temp = "20M";
          state.time = "12:00M";
          state.city = "Moscow";
        break;
      }
    },
  },
});


