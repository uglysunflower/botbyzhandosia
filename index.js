const { Telegraf, Markup } = require('telegraf');
const bot = new Telegraf('6249665818:AAGweZSmjnH_2BXjvP4kGYtf-7BONfYQAYo');
const compliments = [
    'Ты восхитительный человек!',
    'Твой взгляд как солнечный лучик!',
    'Ты всегда умеешь поднять настроение!',
    'Ты прекрасный друг и заботливый человек!',
];

let currentCompliment = compliments [0];

const keyboard = Markup.keyboard([
    ['Сказать комплимент'],
    ['Поменять комплимент']
]).resize().oneTime();

bot.start((ctx) => {
    ctx.reply('Привет! я бот-комплиментатор. Вот мои команды:', keyboard);
});

bot.hears('Сказать комплимент', (ctx) => {
    ctx.reply(currentCompliment, keyboard);
});

bot.hears('Поменять комплимент', (ctx) => {
    const randomIndex = Math.floor(Math.random() * compliments. length);
    currentCompliment = compliments[randomIndex];
    ctx.reply('Новый комплимент выбран!', keyboard);
});

bot.launch();