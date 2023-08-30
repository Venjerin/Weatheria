import axios, {CreateAxiosDefaults} from "axios";

// Создайте экземпляр axios с настройками
const instance = axios.create({
    baseURL: 'http://localhost:8080',
} as CreateAxiosDefaults);

//Тип возвращаемой даты
export interface IResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}




export const thisDayAPI = {
  getCurrentTemp(city: string): Promise<IResponse> {
    return instance.get(`?city=${city}`).then((response) => {
      // console.log(response.data);
      return response.data;
    });
  },
  getHourTemp(city: string) {
    const apiKey = "cc4f18b5-498f-4a21-b3c0-856e693e3a81";
    const cityName = "Moscow"; // Название города

    const apiUrl = `https://api.weather.yandex.ru/v2/forecast?geoid=${cityName}&hours=true`;

    fetch(apiUrl, {
      method: "GET",
      headers: {
        "X-Yandex-API-Key": apiKey, // Добавление API-ключа в заголовок
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Обработка полученных данных о погоде
        console.log(data);
      })
      .catch((error) => {
        // Обработка ошибок
        console.error("Ошибка:", error);
      });
  },
};

console.log(thisDayAPI.getHourTemp(''))
