const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.Database_URL)

    .then(() => {
        console.log("DB connected successfully");
    })

    .catch((error) => {
        console.log("DB facing connect error");
        console.log(error);
        process.exit(1);
    });
};

module.exports = connectWithDb;