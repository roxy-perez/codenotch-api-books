const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('library', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

sequelize.sync().then(() => {
    console.log('Book/User table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

module.exports = sequelize;

/* async function testDBConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testDBConnection(); */
