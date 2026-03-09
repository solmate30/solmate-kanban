import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from '../src/db/schema';
import { config } from 'dotenv';
import { eq } from 'drizzle-orm';

config({ path: '.env.local' });

const client = createClient({
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
});

const db = drizzle(client, { schema });

async function main() { 
    console.log('Deleting all cards and columns...');
    await db.delete(schema.cards);
    await db.delete(schema.columns);
    console.log('Done!');
    process.exit(0);
}

main();
