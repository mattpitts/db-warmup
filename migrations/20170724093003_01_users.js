
exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', (table) => {
		table.increments('id').primary();
		table.text('email').notNullable().unique();
		table.text('password').notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('users');
};
