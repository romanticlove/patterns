module.exports = {
    async send({chat, message}) {
        console.log(`I call whatsapp-sdk send method with params:`, chat, message );
        return {success: true, entity: {some: 'data'}}
    },
    async get(messageId) {
        console.log(`I call whatsapp-sdk get method with params:`, messageId );
        return {success: true, entity: {some: 'data'}}
    }
};