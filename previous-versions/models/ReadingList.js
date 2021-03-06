const DT = require("sequelize").DataTypes;

module.exports = (db => {
    return db.define("readinglist", {
        bookID: {
            type: DT.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        title: DT.STRING,
        author: DT.STRING, 
        amazonLink: DT.STRING,
        didRead: DT.BOOLEAN
    });
});