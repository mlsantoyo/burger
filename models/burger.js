//import orm to create functions that will interact with mysql
var orm = require('../config/orm.js');

var burger = {
  all: function(cb) {
    orm.all('burgers', function(res) {
      cb(res);
    })
  },

  update: function(id,cb){
  	orm.update('burgers',id,cb);
  }
}

// export database functions for the controller (burgersController.js).
module.exports = burger;
