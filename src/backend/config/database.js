// เพิ่มบรรทัดนี้ด้านบน
require('dotenv').config();

const mysql = require('mysql2');

// Debug environment variables
console.log('🔍 Database Config:');
console.log('Host:', process.env.DB_HOST);
console.log('User:', process.env.DB_USER);
console.log('Password:', process.env.DB_PASSWORD ? '***' : 'NOT SET');
console.log('Database:', process.env.DB_NAME);

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'cbam_user',
  password: process.env.DB_PASSWORD || 'cbam_secure_2025',
  database: process.env.DB_NAME || 'cbam_platform',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('❌ Database connection failed:', err);
  } else {
    console.log('✅ Database connected successfully!');
    connection.release();
  }
});

module.exports = pool.promise();