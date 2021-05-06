module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define('user', {
    username : {
      type: dataTypes.STRING,
      allowNull: false
    },
    password : {
      type: dataTypes.STRING,
      allowNull: false
    },
    email : {
      type: dataTypes.STRING,
      allowNull: false
    },
    member_no : {
      type: dataTypes.STRING,
      allowNull: false
    },
  });
}
