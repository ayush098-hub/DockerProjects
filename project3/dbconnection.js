const {Client} = require("pg");
const client = new Client({
	user: 'postgres',
	password: 'postgres',
	host: '127.0.0.1',
	port: '5432',
	database: 'postgres',
});

client
	.connect()
	.then(() => {
		console.log('Connected to PostgreSQL database');
		return 1;
	})
	.catch((err) => {
		console.error('Error connecting to PostgreSQL database', err);
	});
