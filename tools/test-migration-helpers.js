const path = require('path');
const { promisify } = require('util');
const run = require('./run');
const rimraf = promisify(require('rimraf'));


async function resetTestDB() {
  const dbPath = path.resolve(__dirname, '../var/reminder-app-test')
  await rimraf(dbPath);
}

async function run_migration(number) {
  number = number.toString();

  let migrationFunction;
  const fileName = global.migrationFiles.filter((file) => {
    return (file.startsWith(number) || file.startsWith('0' + number));
  })[0];

  const filePath = path.join(__dirname, '../app/models/migrations', fileName);
  migrationFunction = require(filePath);
  if (migrationFunction) {
    await migrationFunction();
  } else {
    throw Error('Cannot find migration file with number', number);
  }
}

module.exports = {
  resetTestDB,
  run_migration
};