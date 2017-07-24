const users = require('./seeds-data/users')
const bcrypt = require('bcrypt')


exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex.raw('TRUNCATE users RESTART IDENTITY CASCADE;')
	.then(function () {
		return Promise.all(
			users.map(user => {
				return bcrypt.hash(user.password, 4).then(password => {
					user.password = password
					return user;
				})
			})
		).then(users => {
			return knex('users').insert(users);
		})

	});
};
