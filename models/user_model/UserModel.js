'use strict'

const conn = require('../connection')

class UserModel {
  getUser(user_id, cb) {
    const query = 'select name, email, password from users where user_id = ?'
    conn.query(query, user_id, cb)
  }

  deleteUser(user_id, cb) {
    const query = 'delete from users where user_id = ?'
    conn.query(query, user_id, cb)
  }

  createUser(dataUser, cb) {
    const query = 'insert into users set ?'
    conn.query(query, dataUser, cb)
  }

  updateUser(user_id, dataUser, cb) {
    const query = 'update users set ? where user_id = ?'
    conn.query(query, [dataUser, user_id], cb)
  }
}

const userModel = new UserModel()

module.exports = userModel

/* 
user_id int not null auto_increment,
  name varchar(25) not null,
  email varchar(30) not null,
  password varchar(30) not null,
  primary key(user_id)
   */
