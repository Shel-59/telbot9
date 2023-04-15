const Telegram = require('node-telegram-bot-api');

const token = '5917176770:AAE_OZP1u79cNF6hEhylnxyvd07ninmZNIk';
const bot = new Telegram(token, {polling: true});

bot.setMyCommands([
    {command: '/start', description: 'Начало'},
    {command: '/info', description: 'Информация о данном боте'}
])

const commandsOptions = {
    reply_markup: {
        keyboard: [
            ['Алгебра', 'Геометрия']
        ],
        one_time_keyboard: true,
    }
}

const algebraOptions = {
    reply_markup: {
        keyboard: [
            ['Решение уравнений', 'Прогрессии', 'Функции'],
            ['Вернуться в главное меню']
            
        ],
        one_time_keyboard: true,
    }
}

const geometryOptions = {
    reply_markup: {
        keyboard: [
            ['Тригонометрия', 'Площади фигур', 'Теоремы'],
            ['Вернуться в главное меню']
        ],
        one_time_keyboard: true,
    }
}

const equationsOptions = {
    reply_markup: {
        keyboard: [
            ['Формула дискриминанта и корней', 'ФСУ', 'Теорема Виета'],
            ['Вернуться в главное меню', 'Вернуться в раздел "Алгебра"']
            
        ],
        one_time_keyboard: true,
    }
}

const trigOptions = {
    reply_markup: {
        keyboard: [
            ['Синус, косинус, тангенс, котангенс', 'Значения синусов, косинусов, тангенсов, котангенсов'],
            ['Теорема синусов', 'Теорема косинусов'],
            ['Вернуться в главное меню', 'Вернуться в раздел "Геометрия"']
        ],
        one_time_keyboard: true,
    }
}

const squareOptions = {
    reply_markup: {
        keyboard: [
            ['Формулы площади треугольника', 'Формула площади окружности'],
            ['Формулы площади четырёхугольников'],
            ['Вернуться в главное меню', 'Вернуться в раздел "Геометрия"']
        ],
        one_time_keyboard: true,
    }
}

const theoremeOptions = {
    reply_markup: {
        keyboard: [
            ['Теорема Пифагора', 'Теорема Фалеса', 'Теорема Менелая'],
            ['Вернуться в главное меню', 'Вернуться в раздел "Геометрия"']
        ],
        one_time_keyboard: true,
    }
}

const graphicOptions = {
    reply_markup: {
        keyboard: [
            ['Прямая', 'Парабола', 'Гипербола'],
            ['Вернуться в главное меню', 'Вернуться в раздел "Алгебра"']
        ],
        one_time_keyboard: true,
    }
}

bot.on('message', msg => {
    const text = msg.text.toString();
    const userId = msg.chat.id;



    if (text === '/start') {
        bot.sendMessage(userId, 'Здравствуй! Выбирай нужную категорию.', commandsOptions);
    }
    if (text === '/info') {
        bot.sendMessage(userId, 'Данный бот создан учеником 9 класса, Мусиным Александром. Все материалы были взяты из открытых источников.', );
    }



    if (text === 'Алгебра') {
        bot.sendMessage(userId, 'Выбирай нужную шпаргалку по алгбре:', algebraOptions);
    }
    if (text === 'Геометрия') {
        bot.sendMessage(userId, 'Выбирай нужную шпаргалку по геометрии:', geometryOptions);
    }



    if (text === 'Тригонометрия') {
        bot.sendMessage(userId, 'Выбирай нужную шпаргалку по тригонометрии:', trigOptions);
    }
    if (text === 'Площади фигур') {
        bot.sendMessage(userId, 'Выбирай нужную шпаргалку по площадям фигур:', squareOptions);
    }
    if (text === 'Теоремы') {
        bot.sendMessage(userId, 'Выбирай нужную шпаргалку по теоремам:', theoremeOptions);
    }
    if (text === 'Решение уравнений') {
        bot.sendMessage(userId, 'Выбирай нужную шпаргалку по уравнениям:', equationsOptions);
    }
    if (text === 'Прогрессии') {
        bot.sendPhoto(userId, 'https://images.app.goo.gl/PrK9pwcK5V2JHvVo9');
    }
    if (text === 'Функции') {
        bot.sendMessage(userId, 'Выбирай нужную шпаргалку по функциям:', graphicOptions);
    }




    if (text === 'ФСУ') {
        bot.sendPhoto(userId, 'https://images.app.goo.gl/phfXaqPn8zsffA5Q9');
    }
    if (text === 'Формула дискриминанта и корней') {
        bot.sendPhoto(userId, 'https://images.app.goo.gl/JzyAVGhmtqRv54s36');
    }
    if (text === 'Теорема Виета') {
        bot.sendPhoto(userId, 'https://images.app.goo.gl/ziWo2mpHMcAqPyhi6');
    }
    if (text === 'Синус, косинус, тангенс, котангенс') {
        bot.sendPhoto(userId, 'https://images.app.goo.gl/uTKh5BKHevYjq1ot5');
    }
    if (text === 'Значения синусов, косинусов, тангенсов, котангенсов') {
        bot.sendPhoto(userId, 'https://images.app.goo.gl/akVxWDAC1BHHWdDRA');
    }
    if (text === 'Прямая') {
        bot.sendPhoto(userId, 'https://images.app.goo.gl/dPxB4qFNXw4h2uvDA');
    }
    if (text === 'Парабола') {
        bot.sendPhoto(userId, 'https://images.app.goo.gl/ao5K9rXeJEUm3n5N8');
    }
    if (text === 'Гипербола') {
        bot.sendPhoto(userId, 'https://images.app.goo.gl/i3wQfRn1UkDWgcrq9');
    }
    if (text === 'Теорема Пифагора') {
        bot.sendPhoto(userId, 'https://images.app.goo.gl/Q6DDQvXTwrRoZEjE8');
    }
    if (text === 'Теорема Фалеса') {
        bot.sendPhoto(userId, 'https://images.app.goo.gl/EZEx4qyW7SJF5S4f7');
    }
    if (text === 'Теорема Менелая') {
        bot.sendPhoto(userId, 'https://images.app.goo.gl/cxABY8C9KETNgP4QA');
    }
    if (text === 'Формулы площади треугольника') {
        bot.sendPhoto(userId, 'https://images.app.goo.gl/3q2bfekPTsugU261A');
    }
    if (text === 'Формулы площади четырёхугольников') {
        bot.sendPhoto(userId, 'https://images.app.goo.gl/5q9GjTP3XN6k8ZuC9');
        bot.sendPhoto(userId, 'https://images.app.goo.gl/huyZnN2hg1fSnr4q8');
    }
    if (text === 'Формула площади окружности') {
        bot.sendPhoto(userId, 'https://images.app.goo.gl/KEp7jM4cPDLkVt72A');
    }
    if (text === 'Теорема косинусов') {
        bot.sendPhoto(userId, 'https://i.pinimg.com/564x/ec/78/bd/ec78bde6be99025511735177701b2734.jpg');
    }
    if (text === 'Теорема синусов') {
        bot.sendPhoto(userId, 'https://images.app.goo.gl/y9ommqGyaaXEEpD79');
    }

    


    if (text === 'Вернуться в главное меню') {
        bot.sendMessage(userId, 'Выбирай нужную категоррию:', commandsOptions);
    }
    if (text === 'Вернуться в раздел "Геометрия"') {
        bot.sendMessage(userId, 'Выбирай нужную шпаргалку по геометрии:', geometryOptions);
    }
    if (text === 'Вернуться в раздел "Алгебра"') {
        bot.sendMessage(userId, 'Выбирай нужную шпаргалку по алгебре:', algebraOptions);
    }
})