// server.js (แก้ไขตรงนี้)
const express = require('express');
const cors = require('cors');
const db = require('./config/database');
//const userRoutes = require('./routes/auth'); // ตรวจสอบให้แน่ใจว่า import ถูกต้อง
require('dotenv').config(); // สำหรับดึงค่าจาก .env

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// **ย้าย /api/test มาไว้ตรงนี้!!**
app.get('/api/test', (req, res) => {
  console.log('Received request for /api/test (after CORS)');
  res.status(200).json({
    message: 'Hello from /api/test! Your API is working!',
    timestamp: new Date()
  });
});




//app.use(cors({
//  origin: '*', // เปิดให้ทุก origin ชั่วคราว
//  credentials: true
//}));
//app.use(express.json());

//const authRoutes = require('./routes/auth');
// app.use('/api/auth', authRoutes);

// เพิ่ม middleware log requests
app.use((req, res, next) => {
  console.log(`📥 ${req.method} ${req.path} from ${req.ip}`);
  next();
});


app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});