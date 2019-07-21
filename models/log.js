module.exports = function (sequelize, DataTypes) {
    return sequelize.define('log', {
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        definition: {
            type: DataTypes.STRING,
            allowNull: false
        },
        results: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner_properties: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}