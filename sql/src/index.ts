import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://neondb_owner:npg_eVbrhUWR9Q5z@ep-tiny-band-a5yo8r78-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require",
});

async function main() {
  try {
    await client.connect();

    // Create the table if not exists
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("✅ Table created or already exists.");

    // Insert a user
    const insertQuery = `
      INSERT INTO users (username, email, password)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = ['username2', 'keshav@gmail.com', 'newpassword'];
    const res = await client.query(insertQuery, values);

    console.log("✅ Insertion success:", res.rows[0]);
  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await client.end();
  }
}

main();
