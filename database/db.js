const { readFileSync } = require('node:fs')
const { join } = require('node:path')
const Database = require('better-sqlite3')

const db = Database(process.env.DB_FILE)

const schemaPath = join('database', 'schema.sql')
const schema = readFileSync(schemaPath, 'utf-8')
db.exec(schema)

// const createQuery = db.prepare(
//   /*sql*/
//   `INSERT name INTO restaurants VALUES (
//     1, 'alksjdf', 'kjlakjdlkfja', 'laksdjflkajsdflkaj1', '123') ON CONFLICT DO NOTHING`
// )

// createQuery.run()

// const listQuery = db.prepare(`SELECT * from restaurants`)
// console.log(listQuery.all())

module.exports = db
