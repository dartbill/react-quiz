const { Pool } = require('pg');

// const pool = new Pool({ database: process.env.PGDATABASE });
const pool = new Pool();

module.exports = pool;
