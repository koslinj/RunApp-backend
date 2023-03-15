require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3004,
    database: process.env.DATABASE || 'mongodb://127.0.0.1:27017/gym-app'
}