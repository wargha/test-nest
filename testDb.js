const mysql = require('mysql');
const url = require('url');

// Parse the DATABASE_URL environment variable
const databaseUrl = process.env.DATABASE_URL;
const parsedUrl = url.parse(databaseUrl);

// Extract the connection information
const [username, password] = parsedUrl.auth.split(':');
const host = parsedUrl.hostname;
const port = parsedUrl.port;
const database = parsedUrl.pathname.slice(1); // Remove the leading '/'

// Create the MySQL connection configuration
const connectionConfig = {
  host: host,
  port: port,
  user: username,
  password: password,
  database: database,
};

// Create the connection
const connection = mysql.createConnection(connectionConfig);

// Connect to the database
connection.connect(function (err) {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Remember to close the connection when you're done
// connection.end();
