const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
    insert: (user) => {
        return db('users').insert(user);
    },
    findByUsername: (username) => {
        return db('users').where('username', username);
    },
    findUsers: () => {
        return db('users').select('id','username');
    }
};
