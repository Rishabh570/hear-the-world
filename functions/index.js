'use strict';

const functions = require('firebase-functions');
const { actionssdk } = require('actions-on-google');

const app = actionssdk({debug: true});

app.intent('actions.intent.MAIN', (conv) => {
  conv.ask('welcome to the actions sdk project!');
});

// app.intent('actions.intent.TEXT', (conv, input) => {
//   if (input === 'test') {
//     return conv.close('Hey, this is some special kind of testing going on!!!');
//   }
//   conv.ask('<speak>You said, ' +
//     `<say-as interpret-as="ordinal">${input}</say-as></speak>`);
// });

exports.heartheworldfunction = functions.https.onRequest(app);