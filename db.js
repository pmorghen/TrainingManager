// Database initialization using Dexie.js
const db = new Dexie("AnatomyMaster_v3");

db.version(2).stores({
    categories: "++id, name",
    questions: "++id, text, status, isTest, *categoryIds"
});
