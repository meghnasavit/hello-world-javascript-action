const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

try {
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  // Get todays date
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
  information = JSON.parse(information);
  dates = information.dates;
  itemList = dates.filter(dateEntry =>
    dateEntry.date == today);
  console.log(itemList);
  item = dates.find(item => {
    return item.date == today
  })
  console.log(item.message);
} catch (error) {
  core.setFailed(error.message);
}