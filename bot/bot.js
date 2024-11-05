import { Telegraf, Markup } from "telegraf";

const TOKEN = "paste your own bot token";
const website_link = "https://celadon-lebkuchen-38decd.netlify.app/";

const bot = new Telegraf(TOKEN);

bot.start((ctx) => 
    ctx.reply(
        'Welcome! Tap "Launch Game" to play in full screen.',
        Markup.inlineKeyboard([
            [Markup.button.webApp("Launch Game", website_link)]
        ])
    )
);

bot.launch();
