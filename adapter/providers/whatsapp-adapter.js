const whatsAppSDK = require('./whatsapp-sdk');
module.exports = {
    async sendMessage(chatId, message, meta) {
        console.log(`I call whatsapp-adapter sendMessage method with params:`, chatId, message, meta );
        const {success, entity} = await whatsAppSDK.send({chat: chatId, message});
        return {status: (success) ? 1 : 0, response: entity}
    },
    async getMessage(messageId) {
        console.log(`I call whatsapp-adapter getMessage method with params:`, messageId);
        const {success, entity} = await whatsAppSDK.get(messageId);
        return {status: (success) ? 1 : 0, response: entity}
    },
};