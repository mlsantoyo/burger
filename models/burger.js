//import orm to create functions that will interact with mysql
var orm = require('../config/orm.js');

var burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    })
  },

  updateOne: function(id,cb){
  	orm.updateOne('burgers',id,cb);
  },

  insertOne: function(name,cb){
  	orm.insertOne('burgers',name,cb);
  }
}

// export database functions for the controller (burgersController.js).
module.exports = burger;
