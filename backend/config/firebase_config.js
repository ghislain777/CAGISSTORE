
var admin = require("firebase-admin");
var serviceAccount = require("./aliecard-firebase-adminsdk-iw32b-65659bf38b.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports.admin = admin