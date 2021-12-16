const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + '/' + mm + '/' + yyyy;
  console.log(today);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  var information = fs.readFileSync('dates.json');
  var dates = JSON.parse(information);
  dates = information.dates;
  const message = dates.find(item => {
    return item.date === '16/12/2021'
  })
  console.log(message);
  console.log(JSON.stringify(information.dates));
  console.log(`dates: ${dates}`);
} catch (error) {
  core.setFailed(error.message);
}