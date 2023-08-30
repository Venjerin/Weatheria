const express = require('express');
const app = express();
const axios = require('axios');
app.use(express.json());

app.get('/', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');

    const APIKey = '8586e5bbce815b74c41c48a7a8f59b42';
    const cityName = req.query.city;

    //http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIKey}`,
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=ru&appid=${APIKey}&units=metric
        `);
        const data = response.data;
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }


    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=ru&appid=${APIKey}&units=metric
        `);
        const data = response.data;
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});





app.listen(8080, () => {
    console.log('listening on port 8080');
});





// https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=metric