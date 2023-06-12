const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Postgress",
  password: "Shlok@0134",
  port: 5432,
});

(async () => {
  try {
    await pool.connect();
    console.log("Database connected successfully");
  } catch (err) {
    console.log("Error connecting to the database", err);
  }
})();

module.exports = pool;
