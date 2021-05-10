  
module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('task',{
        taskName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        taskUnique:{
            type: DataTypes.STRING(16),
            allowNull: false,
            unique: true
        },
        isDoing: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        isDone: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    })

    return Task;
}