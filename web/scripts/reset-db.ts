import { config } from 'dotenv';
config({ path: '.env.local' });

import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { columns, cards, teamMembers, labels } from '../src/db/schema';

async function main() {
    const client = createClient({
        url: process.env.TURSO_DATABASE_URL!,
        authToken: process.env.TURSO_AUTH_TOKEN,
    });

    const db = drizzle(client);

    await db.delete(cards);
    await db.delete(columns);
    await db.delete(teamMembers);
    await db.delete(labels);

    const defaultCols = ['Backlog', 'To Do', 'In Progress', 'Review', 'Done'];
    for (let i = 0; i < defaultCols.length; i++) {
        await db.insert(columns).values({
            id: crypto.randomUUID(),
            title: defaultCols[i],
            position: i,
            createdAt: new Date(),
        });
    }

    console.log('DB reset complete — default columns created (English)');
    client.close();
}

main();
