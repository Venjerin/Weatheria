import axios, {CreateAxiosDefaults} from "axios";

// Создайте экземпляр axios с настройками
const instance = axios.create({
    baseURL: 'http://localhost:8080',
} as CreateAxiosDefaults);

export const thisDayAPI = {

    getCurrentTemp() {
        return instance
            .get(`?city=Moscow`)
            .then((response) => {
                console.log(response.data);
                return response.data;
            });
    },


};
