const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

try {
  // Get todays date
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + '/' + mm + '/' + yyyy;
  console.log(today);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON 
  var information = fs.readFileSync('dates.json');
  information = JSON.parse(information);
  dates = information.dates;
  itemList = dates.filter(dateEntry =>
    dateEntry.date == today);
  var messageList = [];
  itemList.forEach(item => {
    messageList.push(item.message);    
  });
  console.log(messageList);
} catch (error) {
  core.setFailed(error.message);
}