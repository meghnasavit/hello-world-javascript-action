const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const date = new Date();
  console.log(date);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const information = fs.readFileSync('package.json');
  console.log(`information: ${information}`);
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payloaddgfdhfhg: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}