const { readFileSync } = require('node:fs')
const { join } = require('node:path')
const Database = require('better-sqlite3')

const db = Database(process.env.DB_FILE)

const schema