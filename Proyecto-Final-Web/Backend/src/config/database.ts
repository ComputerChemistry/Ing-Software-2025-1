// src/config/database.ts
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Proyecto-Final',
  password: 'yourpassword',
  port: 5432,
});

export default pool;

