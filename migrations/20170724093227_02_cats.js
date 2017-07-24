
exports.up = function(knex, Promise) {
	return knex.schema.createTable('cats', (table) => {
		table.increments('id').primary();
		table.text('name').notNullable();
		table.text('breed');
		table.integer('owner_id').references('users.id').unsigned().onDelete('cascade');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('cats');
};
