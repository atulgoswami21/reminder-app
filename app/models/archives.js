const reminders = require('./reminders');
const { arhives } = require('./db');

async function archive(id) {
  const reminder = await reminders.getReminderById(id);
  await arhives.addRow({
    date: new Date(),
    reminder
  });
}

async function getArchives() {
  const rows = await arhives.getRows();
  return rows;
}

module.exports = {
  archive,
  getArchives
};