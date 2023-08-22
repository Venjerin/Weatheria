import axios from "axios";

const APIKey = '8586e5bbce815b74c41c48a7a8f59b42';
export const instance = axios.create({
    baseURL: 'https://api.weatherapi.com/v1/',
    headers: {
        "API-KEY": APIKey
    },
    withCredentials: true
})

console.log(instance);
// current.json?key=b834af3f24cd480ea9841701231808&q=Moscow&aqi=no

export const thisDayAPI = {
  getCurrentTemp(city: string) {
    return instance
      .get(`current.json?key=${APIKey}&q=${city}&aqi=no`)
      .then((response: any) => {
        console.log(response.data);
        return response.data;
      });
  },
};
console.log(1, thisDayAPI);