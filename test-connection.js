require('dotenv').config();
const mongoose = require('mongoose');

console.log('Testing connection...\n');

// Show what we're connecting to
console.log('MONGODB_URI exists:', !!process.env.MONGODB_URI);

async function test() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        
        console.log('✅ Connected to MongoDB Atlas!');
        console.log(`📁 Database: ${mongoose.connection.name}`);
        console.log(`📍 Host: ${mongoose.connection.host}`);
        console.log(`🔌 State: ${mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'}`);
        
        // Create a test collection
        const Test = mongoose.model('Test', new mongoose.Schema({ name: String }));
        await Test.create({ name: 'Test Document' });
        console.log('✅ Can write to database');
        
        // Clean up
        await Test.deleteMany({});
        
        console.log('\n🎉 All tests passed!');
        
    } catch (error) {
        console.error('\n❌ Connection failed:', error.message);
        
        if (error.message.includes('bad auth')) {
            console.log('\n🔧 Password might be wrong. Check in MongoDB Atlas.');
        } else if (error.message.includes('ENOTFOUND')) {
            console.log('\n🔧 Check cluster name: admin-panel-cluster.qpwctra.mongodb.net');
        }
    }
    
    process.exit();
}

test();