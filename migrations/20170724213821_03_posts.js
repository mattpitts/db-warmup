
exports.up = function(knex, Promise) {
	return knex.schema.createTable('post', (table) => {
		table.increments('id').primary();
		table.string('body').notNullable();
		table.integer('parent_id');
		table.foreign('parent_id').references('post.id');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('post');
};
