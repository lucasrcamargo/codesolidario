const Pool = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});
pool.connect();
pool.query(
    'CREATE TABLE IF NOT EXISTS ideias(id SERIAL PRIMARY KEY, nome VARCHAR(40) not null, email VARCHAR(50) not null, categoria VARCHAR(40) not null, descricao VARCHAR(40) not null)');
  
module.exports = pool