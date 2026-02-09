const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Database Connection - SIMPLIFIED
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('✅ MongoDB Atlas connected successfully');
    console.log(`📁 Database: ${mongoose.connection.name}`);
    console.log(`📍 Host: ${mongoose.connection.host}`);
})
.catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
});

// TEST ROUTES FIRST (Comment out original routes)
app.get('/api/auth', (req, res) => {
    res.json({ 
        message: 'Auth API is working',
        endpoints: ['POST /api/auth/login', 'POST /api/auth/register']
    });
});

app.get('/api/admin', (req, res) => {
    res.json({ 
        message: 'Admin API is working',
        endpoints: ['GET /api/admin/dashboard']
    });
});

app.get('/api/contacts', (req, res) => {
    res.json({ 
        message: 'Contacts API is working',
        endpoints: ['GET /api/contacts', 'POST /api/contacts/submit']
    });
});

app.get('/api/appointments', (req, res) => {
    res.json({ 
        message: 'Appointments API is working',
        endpoints: ['GET /api/appointments', 'GET /api/appointments/today']
    });
});

// COMMENT OUT THESE LINES FOR NOW (lines 28-31)
// app.use('/api/auth', require('./vitalis-backend/routes/auth.routes'));
// app.use('/api/admin', require('./vitalis-backend/routes/admin.routes'));
// app.use('/api/contacts', require('./vitalis-backend/routes/contact.routes'));
// app.use('/api/appointments', require('./vitalis-backend/routes/appointment.routes'));

// Health check
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
        timestamp: new Date().toISOString()
    });
});

// Admin Panel Route
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/admin', 'index.html'));
});

app.get('/admin/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/admin', 'login.html'));
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? err.message : {}
    });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('\n' + '='.repeat(50));
    console.log('🚀 SERVER STARTED SUCCESSFULLY!');
    console.log('='.repeat(50));
    console.log(`📍 Port: ${PORT}`);
    console.log(`🌐 Admin Panel: http://localhost:${PORT}/admin`);
    console.log(`🔗 Health Check: http://localhost:${PORT}/health`);
    console.log(`🔗 Auth API: http://localhost:${PORT}/api/auth`);
    console.log(`🔗 Admin API: http://localhost:${PORT}/api/admin`);
    console.log('='.repeat(50) + '\n');
});

module.exports = app;