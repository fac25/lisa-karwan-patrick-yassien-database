const { readFileSync } = require('node:fs')
const { join } = require('node:path')
const Database = require('better-sqlite3')

const db = Database(process.env.DB_FILE)

const schemaPath = join('database', 'schema.sql')
const schema = readFileSync(schemaPath, 'utf-8')
db.exec(schema)

console.log(db)

module.exports = db
