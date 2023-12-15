
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "default",
  host: "ep-bitter-frost-07401869-pooler.ap-southeast-1.postgres.vercel-storage.com",
  database: "verceldb",
  password: "HZWo1Lcg3RTa",
  port: 5432,
  ssl: {
    rejectUnauthorized: false, // Tùy thuộc vào môi trường,  có thể cần điều chỉnh này
  },
});

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "testing",
//   password: "123456",
//   port: 5432,
//   });


pool.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
  });
  module.exports = pool;