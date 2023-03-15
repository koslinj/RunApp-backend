require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3004,
    database: process.env.DATABASE || 'mongodb+srv://jan:jan@cluster0.iqgnxop.mongodb.net/?retryWrites=true&w=majority'
}