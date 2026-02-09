const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const { MongoClient } = require('mongodb');
require('dotenv').config();

async function createDatabase() {
    const uri = process.env.MONGODB_URI;
    
    console.log('Creating database admin_panel_db...');
    
    const client = new MongoClient(uri, { 
        family: 4
    });
    
    try {
        await client.connect();
        
        // Create database by inserting a document
        const db = client.db('admin_panel_db');
        await db.collection('test').insertOne({ created: new Date() });
        await db.collection('test').drop();
        
        console.log('✅ Database "admin_panel_db" created successfully!');
        
    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        await client.close();
    }
}
require('dotenv').config();

async function createDatabase() {
    const uri = process.env.MONGODB_URI;
    
    console.log('Creating database admin_panel_db...');
    
    const client = new MongoClient(uri, { 
        family: 4
    });
    
    try {
        await client.connect();
        
        // Create database by inserting a document
        const db = client.db('admin_panel_db');
        await db.collection('test').insertOne({ created: new Date() });
        await db.collection('test').drop();
        
        console.log('✅ Database "admin_panel_db" created successfully!');
        
    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        await client.close();
    }
}

createDatabase();
