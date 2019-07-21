const Sequelize = require('sequelize');
const sequelize = new Sequelize('workoutlog', 'postgres', 'emaleigh34', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(
        function() {
            console.log('connected to workoutlog');
        },
        function(err) {
            console.log(err)
        }
);

module.exports = sequelize;