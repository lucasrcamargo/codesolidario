const Pool = require('pg').Pool
const pool = new Pool({
  user: 'gliqhcjozleaiu',
  host: 'lec2-174-129-41-127.compute-1.amazonaws.com',
  database: 'ddu5cgfcnese5l',
  password: '801b1654709e4e10e959846bec9ba4e30233b71f2986a8387baa02b668e6705b',
  port: 5432,
})
const query = pool.query(
    'CREATE TABLE ideias(id SERIAL PRIMARY KEY, nome VARCHAR(40) not null, email VARCHAR(50) not null, categoria VARCHAR(40) not null, descricao VARCHAR(40) not null)');
  query.on('end', () => { pool.end(); });
module.exports = pool