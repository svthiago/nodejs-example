const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "example",
    database: "todo_database",
    host: "db",
    port: "5432"
});

module.exports = pool;
