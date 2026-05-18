// Database initialization using Dexie.js
const db = new Dexie("AnatomyMaster_v3");

db.version(2).stores({
    categories: "++id, name",
    questions: "++id, text, status, isTest, *categoryIds"
});

// Seed some initial categories if empty
async function initDB() {
    const catCount = await db.categories.count();
    if (catCount === 0) {
        await db.categories.bulkAdd([
            { name: "Muskeln" },
            { name: "Skelett" },
            { name: "Organe" },
            { name: "Nervensystem" }
        ]);
    }
}

initDB();
