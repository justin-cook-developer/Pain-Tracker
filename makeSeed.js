const path = require('path')
const file = require('fs')

let sqlStatements = ''

const makeTitle = (date, painLevel) => `${date}:${painLevel}`

const makeStatement = (i, date, painLevel) => `INSERT INTO records (id, title, notes, "painLevel", date, "createdAt", "updatedAt") VALUES (${i}, '${makeTitle(date, painLevel)}', 'k', ${painLevel}, to_date('${date}','YYYYMMDD'), '2019-04-25 20:57:11.62-07', '2019-04-25 20:57:11.62-07');`

for (let i = 1; i < 24; i++) {
  const painLevel = Math.round(Math.random() * 10)
  const date = `201907${i < 10 ? `0${i}` : i}`
  console.log(date)
  console.log(makeStatement(i, date, painLevel))
  sqlStatements += makeStatement(i, date, painLevel)
  sqlStatements += '\n'
}

file.writeFileSync('seed.sql', sqlStatements, 'utf8');
