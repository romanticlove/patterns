module.exports = {
    async sendMessage(chatId, message, meta) {
        console.log(`I call telegram-sdk sendMessage method with params:`, chatId, message, meta );
        return {status: 1, response: {some: 'data'}}
    },
    async getMessage(messageId) {
        console.log(`I call telegram-sdk getMessage method with params:`, messageId );
        return {status: 1, response: {some: 'data'}}
    }
};