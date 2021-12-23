const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

try {
  // Get todays date in the required format
  var today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  today = dd + '/' + mm + '/' + yyyy;
  console.log(today);
  // Get the JSON file with the dates and messages
  var file = fs.readFileSync('dates.json');
  file = JSON.parse(file);
  const datesList = file.dates;
  itemList = datesList.filter(dateEntry =>
    dateEntry.date == today);
  var messageList = [];
  itemList.forEach(item => {
    messageList.push(item.message);    
  });
  console.log(messageList);
  // core.setOutput("time", time);
} catch (error) {
  core.setFailed(error.message);
}