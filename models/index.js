const User = require('./user');
const Workout = require('./workout');
const UserDetail = require('./userdetail');
const WeightHistory = require('./weighthistory');  

User.hasMany(Workout, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Workout.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasOne(UserDetail, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

UserDetail.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(WeightHistory, {  
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

WeightHistory.belongsTo(User, {  
  foreignKey: 'user_id'
});

module.exports = { User, Workout, UserDetail, WeightHistory }; 