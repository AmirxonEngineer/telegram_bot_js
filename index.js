const TelegramBot = require('node-telegram-bot-api');


// replace the value below with the Telegram token you receive from @BotFather
const token = '6107729498:AAEnl9Yw4zEHlM-u2dlKLNUd2kOSt5Sm6Wo';


// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});




bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  
  
  if (text === '/start'){
    bot.sendMessage(
      chatId,
      'asalomu alaykum'
    )
  }
  
});