const telegram = require('./providers/telegram-sdk');
const whatsapp = require('./providers/whatsapp-adapter');
const providers = {
    'telegram': telegram,
    'whatsapp': whatsapp,
};

module.exports = {
    async sendMessage(provider, chatId, text, meta) {
        const chatProvider = providers[provider];
        const {status, response} = await chatProvider.sendMessage(chatId, text, meta);
        if(status === 1)
            return response;

        throw new Error('Failed to send message');
    },
    async getMessage(provider, id) {
        const chatProvider = providers[provider];
        const {status, response} = await chatProvider.getMessage(id);
        if(status === 1)
            return response;

        throw new Error('Failed to get message');
    }
};