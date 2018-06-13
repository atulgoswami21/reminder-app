const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const webPush = require('web-push');

const writeFile = promisify(fs.writeFile);
const dataPath = path.resolve(__dirname, '../var/push-notifications.json');

let webPushData;
try {
  webPushData = require(dataPath);
} catch(e) {
  const vapidKeys = webPush.generateVAPIDKeys();
  webPushData = {
    subscriptions: [],
    ...vapidKeys
  };

  fs.writeFileSync(dataPath, JSON.stringify(webPushData, null, 2), 'utf8');
}

webPush.setVapidDetails(
  'mailto:priyankp390@gmail.com', // TODO: Figure out what can we put here?
  webPushData.publicKey,
  webPushData.privateKey
);

async function saveSubscription(pushSubscription) {
  let isSaved = false;
  webPushData.subscriptions.forEach(sub => {
    if (sub.endpoint === pushSubscription.endpoint &&
        sub.keys === pushSubscription.keys) {
      isSaved = true;
    }
  });

  if (isSaved) {
    return;
  }

  webPushData.subscriptions.push(pushSubscription);
  await writeFile(dataPath, JSON.stringify(webPushData, null, 2), 'utf8');
}

async function sendPushNotification(data) {
  data = JSON.stringify(data);
  for (let sub of webPushData.subscriptions) {
    await webPush.sendNotification(sub, data);
  }
}

module.exports = {
  webPushData,
  saveSubscription,
  sendPushNotification
};
